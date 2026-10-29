import fs from 'node:fs';
import path from 'node:path';
import { marked } from 'marked';

export type Note = {
  slug: string;
  title: string;
  date: string;
  summary?: string;
};

export type NoteWithBody = Note & { html: string };

const notesDir = path.join(process.cwd(), 'content', 'notes');

function parseFrontmatter(raw: string): { data: Record<string, string>; body: string } {
  const source = raw.replace(/^\uFEFF/, '');
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(source);
  if (!match) return { data: {}, body: source };

  const data: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const separator = line.indexOf(':');
    if (separator === -1) continue;
    const key = line.slice(0, separator).trim();
    const value = line.slice(separator + 1).trim().replace(/^["'](.*)["']$/, '$1');
    if (key) data[key] = value;
  }

  return { data, body: raw.slice(match[0].length) };
}

function readNotes(): NoteWithBody[] {
  if (!fs.existsSync(notesDir)) return [];

  return fs
    .readdirSync(notesDir)
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const raw = fs.readFileSync(path.join(notesDir, file), 'utf8');
      const { data, body } = parseFrontmatter(raw);
      const slug = file.replace(/\.md$/, '');

      return {
        slug,
        title: data.title || slug,
        date: data.date || '',
        summary: data.summary,
        html: marked.parse(body, { async: false }),
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getNotes(): NoteWithBody[] {
  return readNotes();
}

export function getNoteIndex(): Note[] {
  return readNotes().map(({ html, ...note }) => note);
}

export function getNote(slug: string): NoteWithBody | undefined {
  return readNotes().find((note) => note.slug === slug);
}

export function formatNoteDate(date: string): string {
  if (!date) return '';
  const parsed = new Date(`${date}T00:00:00Z`);
  if (Number.isNaN(parsed.getTime())) return date;

  return parsed.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}
