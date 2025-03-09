import Image from 'next/image';
import React from 'react';
import { Timeline } from '@/components/ui/timeline';
import Link from 'next/link';

export default function PreviousWorkE() {
    const data = [
        {
            title: 'SRP Technologies',
            content: (
                <div>
                    <p className="mb-8 text-xs font-normal text-neutral-200 md:text-sm">
                        <a href="https://srptechs.com/" className="text-gray-300 no-underline">
                            Sep 2024 - Present. Check it out
                            here</a>.
                    </p>
                    <ul className="mb-8 text-xs font-normal text-neutral-200 md:text-sm list-disc pl-5">
                        <li>
                            <strong>Leading Development of AI SaaS Solutions:</strong>
                            Spearheading the design and development of an AI-powered SaaS platform, tailored to solve industry-specific challenges through advanced machine learning and AI capabilities.
                        </li>
                        <li>
                            <strong>Technology Stack:</strong>
                            Utilizing FastAPI, Node.js, Next.js, PostgreSQL, ChromaDB, TypeORM, LangChain, OpenAI API, and cloud technologies (AWS) to build a scalable, multi-tenant architecture that ensures security, performance, and easy integration.
                        </li>
                        <li>
                            <strong>Cross-functional Leadership:</strong>
                            Collaborating with product managers, AI engineers, and other engineers to align on goals, ensuring efficient and agile delivery of product features.
                        </li>
                        <li>
                            <strong>Scalable Architecture Design:</strong>
                            Architecting a highly modular and scalable backend system, allowing clients to deploy the SaaS platform on both cloud infrastructure and on-premise servers.
                        </li>
                        <li>
                            <strong>Innovation and Optimization:</strong>
                            Constantly innovating to integrate cutting-edge AI functionalities, optimize performance, and enhance the user experience for diverse enterprise clients.
                        </li>
                        <li>
                            <strong>Team Leadership & Mentorship:</strong>
                            Leading and mentoring a team of developers, fostering a culture of continuous learning and innovation while maintaining best practices in software development and DevOps.
                        </li>
                    </ul>
                    <div className="grid grid-cols-1 gap-4">
                        <Image
                            src="/srp.png"
                            alt="hero template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-full"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: 'TeamX',
            content: (
                <div>
                    <div>
                        <p className="mb-8 text-xs font-normal text-neutral-200 md:text-sm">
                            <a href="https://teamx.ae/" className="text-gray-300 no-underline">
                                April 2023 - Oct 2024. Check it out
                                here</a>.
                        </p>
                        <ul className="mb-8 text-xs font-normal text-neutral-200 md:text-sm list-disc pl-5">
                            <li>
                                <strong>At TeamX:</strong> I&apos;ve had the privilege of spearheading backend development for our flagship web & mobile application, reaching millions of users worldwide. Here&apos;s a snapshot of what I&apos;ve accomplished:
                            </li>
                            <li>
                                <strong>Architecting Scalability:</strong>
                                Designed a robust backend architecture that seamlessly supports iOS, Android, and web applications, ensuring a smooth and responsive user experience across all platforms.
                            </li>
                            <li>
                                <strong>API Mastery:</strong>
                                Crafted and optimized RESTful APIs, facilitating core functionalities such as user registrations, subscriptions, e-commerce transactions, and real-time quiz interactions.
                            </li>
                            <li>
                                <strong>Data Security & Management:</strong>
                                Enhanced data integrity and security protocols for our dynamic databases, implementing cutting-edge authentication methods to protect user data.
                            </li>
                            <li>
                                <strong>Innovative Features:</strong>
                                Launched a comprehensive subscription model and payment gateway integration, developed an automated quiz and raffle system, and introduced a versatile notification system to boost user engagement.
                            </li>
                            <li>
                                <strong>Analytics & Insights:</strong>
                                Leveraged Google Analytics and custom analytics tools to derive actionable insights, driving strategic decisions and significantly improving platform performance and user retention.
                            </li>
                        </ul>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        <Image
                            src="/teamx.png"
                            alt="hero template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-full"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: 'Retailo',
            content: (
                <div>

                    <p className="mb-8 text-xs font-normal text-neutral-200 md:text-sm">
                        <a href="https://retailo.co/" className="text-gray-300 no-underline">
                            Nov 2022 - April 2023. Check it out
                            here</a>.
                    </p>
                    <div>
                        <ul className="mb-8 text-xs font-normal text-neutral-200 md:text-sm list-disc pl-5">
                            <li>
                                <strong>Backend Team for Warehouse Management System: </strong>
                                Part of the backend team that created a Warehouse Management System (WMS) to accurately track inventory. This initiative significantly increased the accuracy of physical stock levels, reducing discrepancies and streamlining stock management.
                            </li>
                            <li>
                                <strong>Revamped Logistic Flows: </strong>
                                Led the revamp of existing logistic workflows to reduce delivery and loading time. These optimizations enabled the company to deliver one additional order per batch, increasing sales by 10% per route and improving overall operational efficiency.
                            </li>
                            <li>
                                <strong>Continuous Integration Implementation: </strong>
                                Implemented a Continuous Integration (CI) pipeline for the Warehouse Management System, ensuring that each code change passed 100% of the build and test cases before merging into the main branch. This improved code quality, reduced errors, and accelerated development cycles.
                            </li>
                            <li>
                                <strong>SKU Availability Feature: </strong>
                                Delivered a feature enabling the availability of 5,000 SKUs on the mobile app. This feature contributed an estimated 20% incremental Gross Merchandise Value (GMV) to the company&apos;s product portfolio, boosting revenue and expanding the product range offered to customers.
                            </li>
                        </ul>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        <Image
                            src="/retalo.png"
                            alt="hero template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-full"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: 'Systems Limited',
            content: (
                <div>

                    <p className="mb-8 text-xs font-normal text-neutral-200 md:text-sm">
                        <a href="https://www.systemsltd.com/PK" className="text-gray-300 no-underline">
                            June 2021 - Nov 2022. Check it out
                            here</a>.
                    </p>
                    <div>
                        <ul className="mb-8 text-xs font-normal text-neutral-200 md:text-sm list-disc pl-5">
                            <li>
                                <strong>Spearheading E-Commerce Application Development: </strong>
                                Led the end-to-end development of e-commerce applications for high-profile US-based clients such as <strong>Canada Goose</strong>, <strong>Vineyard Vines</strong>, and <strong>CPO Outlets</strong>. This included creating customized e-commerce platforms that catered to each brand&apos;s unique needs and requirements. Leveraged advanced skills in <strong>Salesforce Commerce Cloud</strong> and <strong>Express.js</strong> to deliver high-performance, scalable, and feature-rich applications that improved user engagement and conversion rates.
                            </li>
                            <li>
                                <strong>Robust Tech Stack Implementation: </strong>
                                Employed a powerful and versatile tech stack consisting of <strong>JavaScript</strong> / <strong>Node.js</strong>, <strong>SCSS</strong>, <strong>ISML</strong>, and <strong>HTML5</strong> to build responsive and intuitive websites. Focused on enhancing user experience (UX) by ensuring seamless navigation, fast load times, and mobile responsiveness, which directly contributed to higher customer satisfaction and retention.
                            </li>
                            <li>
                                <strong>CI/CD Pipeline Optimization: </strong>
                                Optimized the Continuous Integration / Continuous Deployment (CI/CD) pipeline using <strong>Jenkins</strong> and <strong>Docker</strong>, leading to a significant reduction in deployment times. Streamlined workflows allowed for faster release cycles and a 10-minute reduction in deployment time, which enhanced team productivity and minimized downtime during updates.
                            </li>
                            <li>
                                <strong>Maintaining Quality and Innovation Standards: </strong>
                                Maintained high standards of code quality and innovation throughout all stages of development. Delivered clean, well-documented code that adhered to modern design patterns, industry best practices, and cutting-edge technologies. This approach consistently resulted in robust, scalable, and maintainable applications, ensuring long-term project success and client satisfaction.
                            </li>
                        </ul>
                    </div>


                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/cpo.png"
                            alt="hero template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <Image
                            src="/cg.png"
                            alt="cards template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: 'GFK',
            content: (
                <div>

                    <p className="mb-8 text-xs font-normal text-neutral-200 md:text-sm">
                        <a href="https://nielseniq.com/global/en/" className="text-gray-300 no-underline">
                            Jan 2019 - Jun 2021. Check it out
                            here</a>.
                    </p>
                    <div>
                        <ul className="mb-8 text-xs font-normal text-neutral-200 md:text-sm list-disc pl-5">
                            <li>
                                <strong>Design and Development of Distributed Web Crawlers: </strong>
                                Spearheaded the design, development, and ongoing maintenance of distributed web crawlers using <strong>JavaScript</strong> and <strong>Node.js</strong>. Utilized advanced <strong>CSS selectors</strong> to scrape data from multiple websites, ensuring accurate and timely delivery of search results to users. The crawlers were optimized for performance, enabling efficient data extraction and providing scalable solutions that supported the growing needs of the platform.
                            </li>
                            <li>
                                <strong>ETL Process Optimization: </strong>
                                Developed and implemented a new <strong>ETL (Extract, Transform, Load)</strong> process that significantly improved the data pipeline&apos;s efficiency. This process reduced the time required to load data by <strong>25%</strong>, allowing the company to integrate new features and data sources more rapidly, which in turn improved the platform&apos;s ability to serve real-time and up-to-date information to users.
                            </li>
                            <li>
                                <strong>Data Validation and Cleaning: </strong>
                                Took ownership of compiling, validating, and cleaning large datasets using a combination of <strong>Python</strong> and <strong>Excel</strong> tools. This effort was pivotal in ensuring the integrity of the company&apos;s data, eliminating inconsistencies, and ensuring high-quality inputs for downstream processes. As a result, the business was able to make more accurate data-driven decisions, ultimately leading to improved business outcomes such as enhanced product recommendations and better user engagement.
                            </li>
                            <li>
                                <strong>Collaboration with Development Teams: </strong>
                                Worked closely with cross-functional teams, including product managers and other developers, to ensure that web crawlers met the needs and requirements of clients and stakeholders. Regularly engaged in sprint planning, code reviews, and testing to ensure that the crawlers adhered to project specifications and delivered value efficiently. This collaboration ensured the final product aligned with the company&apos;s overall objectives, ultimately improving the user experience and increasing stakeholder satisfaction.
                            </li>
                        </ul>
                    </div>


                    <div className="grid grid-cols-1 gap-4">
                        <Image
                            src="/gfk.png"
                            alt="hero template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-full"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: 'Linked Things',
            content: (
                <div>

                    <p className="mb-8 text-xs font-normal text-neutral-200 md:text-sm">
                        <a href="https://linkedthings.ai/" className="text-gray-300 no-underline">
                            Aug 2018 - Dec 2018. Check it out
                            here</a>.
                    </p>
                    <div>
                        <ul className="mb-8 text-xs font-normal text-neutral-200 md:text-sm list-disc pl-5">
                            <li>
                                <strong>Embedded System Software Design and Development: </strong>
                                Led the design and development of embedded system software for various hardware platforms. Deployed the software onto the target device and conducted rigorous testing to ensure the system operated as expected under real-world conditions. The testing process included validating all system features and functionality, ensuring reliability and performance standards were met, and troubleshooting any potential issues before the software was deemed production-ready. This ensured seamless integration between the embedded system and the target device, minimizing failures and optimizing system uptime.
                            </li>
                            <li>
                                <strong>Automation of Data Collection from Embedded Devices: </strong>
                                Architected and implemented an end-to-end system that automated the collection of data from embedded devices, incorporating a mobile application, backend web services, and a data storage solution. This system allowed for real-time data collection and analysis, improving operational efficiency by eliminating manual data entry and reducing human error. The backend services integrated seamlessly with the mobile app, allowing users to view and interact with device data in real-time, while the data store maintained high availability and reliability for long-term storage and analysis.
                            </li>
                            <li>
                                <strong>IoT Device Design: </strong>
                                Designed and developed a highly efficient Internet of Things (IoT) device using a microcontroller, various sensors, and a wireless radio communication module. The IoT device was intended for use in a variety of applications, including remote monitoring and environmental sensing. The sensors captured critical data, while the wireless radio enabled real-time data transmission to cloud-based systems or local servers. The device was designed with power efficiency in mind, ensuring long battery life and optimal performance in the field. This design contributed to the company’s IoT product portfolio, offering a scalable solution for multiple industries.
                            </li>
                        </ul>
                    </div>


                    <div className="grid grid-cols-1 gap-4">
                        <Image
                            src="/lt.png"
                            alt="hero template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-full"
                        />
                    </div>
                </div>
            ),
        },
    ];
    return (
        <div className="w-full bg-black" id="prev-work">
            <Timeline data={data} />
        </div>
    );
}
