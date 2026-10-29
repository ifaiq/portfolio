import fs from 'node:fs';
import path from 'node:path';

export type Quote = {
  text: string;
  source?: string;
};

const quotesFile = path.join(process.cwd(), 'content', 'quotes.md');

/**
 * Each quote is a blockquote. The last line, wrapped in asterisks, is the source.
 *
 *   > The best way out is always through.
 *   > *Robert Frost*
 */
export function getQuotes(): Quote[] {
  if (!fs.existsSync(quotesFile)) return [];

  return fs
    .readFileSync(quotesFile, 'utf8')
    .replace(/^\uFEFF/, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter((block) => block.startsWith('>'))
    .map((block) => {
      const lines = block
        .split('\n')
        .map((line) => line.replace(/^>\s?/, '').trim())
        .filter(Boolean);

      const last = lines.at(-1) ?? '';
      const source = /^\*(.+)\*$/.exec(last);

      if (source && lines.length > 1) {
        return { text: lines.slice(0, -1).join(' '), source: source[1] };
      }

      return { text: lines.join(' ') };
    })
    .filter((quote) => quote.text.length > 0);
}
