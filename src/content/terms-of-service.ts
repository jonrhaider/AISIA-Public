import type { LegalDocument } from '../components/LegalPage'

/** Marketing-site terms of service — draft for legal review before production deploy. */
export const TERMS_OF_SERVICE: LegalDocument = {
  title: 'Terms of Service',
  lastUpdated: 'July 6, 2026',
  disclaimer:
    'These terms govern use of the AISIA marketing website. They are provided for transparency and should be reviewed by qualified counsel before you rely on them for compliance decisions.',
  intro:
    'These Terms of Service ("Terms") are a legal agreement between you and HaiBuilt Inc ("HaiBuilt," "we," "us," or "our") for your use of the public AISIA marketing website — the pages that introduce the product and let you join our waitlist. By accessing or using this site, you agree to these Terms. If you do not agree, please do not use the site. These Terms do not govern the AISIA application itself; separate terms will apply when the app is available.',
  sections: [
    {
      id: 'who-we-are',
      title: '1. Who we are',
      paragraphs: [
        'AISIA is a product of HaiBuilt Inc, located at 2108 N ST #4268, Sacramento, CA 95816, USA.',
        'Questions about these Terms: aisia.io@haibuilt.com.',
      ],
    },
    {
      id: 'scope',
      title: '2. What this site is',
      paragraphs: [
        'This website describes AISIA — a life operating system for guided reflection across eight life domains. The site is for informational and pre-launch purposes. Joining the waitlist does not create an account in the AISIA application and does not guarantee early access, launch timing, or pricing.',
      ],
    },
    {
      id: 'not-advice',
      title: '3. Not professional advice',
      paragraphs: [
        'AISIA is a reflection and organization tool. Nothing on this website — including product descriptions, examples, expert personas, or marketing copy — is medical, legal, financial, therapeutic, or other professional advice.',
        'Do not rely on this site or on future AISIA features as a substitute for qualified professionals. If a topic requires licensed help, consult someone qualified to assist you.',
      ],
    },
    {
      id: 'acceptable-use',
      title: '4. Acceptable use',
      paragraphs: ['You agree not to:'],
      bullets: [
        'Use the site in any way that violates applicable law',
        'Attempt to gain unauthorized access to our systems, networks, or data',
        'Interfere with or disrupt the site\'s operation or security',
        'Scrape, crawl, or harvest content or data from the site without our written permission',
        'Misrepresent your affiliation with HaiBuilt or AISIA',
        'Use the site to transmit malware, spam, or harmful code',
      ],
    },
    {
      id: 'waitlist',
      title: '5. Waitlist',
      paragraphs: [
        'If you submit an email to join the waitlist, you represent that the address is yours and that you are permitted to use it. Today, waitlist information is stored locally in your browser and is not sent to our servers. When we connect the waitlist to a mailing service, we will update our Privacy Policy and these Terms if needed.',
        'We may remove waitlist entries or decline access if we believe a submission is fraudulent, abusive, or violates these Terms.',
      ],
    },
    {
      id: 'ip',
      title: '6. Intellectual property',
      paragraphs: [
        'The site and its content — including text, graphics, logos, icons, layout, and software — are owned by HaiBuilt or its licensors and are protected by intellectual property laws. We grant you a limited, non-exclusive, non-transferable license to access and view the site for personal, non-commercial use.',
        'You may not copy, modify, distribute, sell, or create derivative works from our content without our prior written consent, except as allowed by law.',
      ],
    },
    {
      id: 'third-party',
      title: '7. Third-party links',
      paragraphs: [
        'The site may link to third-party websites or services (for example, a sign-in URL for the AISIA application). We do not control and are not responsible for third-party sites. Your use of them is at your own risk and subject to their terms and policies.',
      ],
    },
    {
      id: 'disclaimers',
      title: '8. Disclaimers',
      paragraphs: [
        'THE SITE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.',
        'We do not warrant that the site will be uninterrupted, error-free, or free of harmful components. Product features, pricing, and launch details described on the site may change before release.',
      ],
    },
    {
      id: 'liability',
      title: '9. Limitation of liability',
      paragraphs: [
        'TO THE MAXIMUM EXTENT PERMITTED BY LAW, HAIBUILT AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR GOODWILL, ARISING FROM YOUR USE OF THE SITE.',
        'OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATING TO THE SITE WILL NOT EXCEED ONE HUNDRED U.S. DOLLARS (US $100) OR THE AMOUNT YOU PAID US TO USE THE SITE IN THE TWELVE MONTHS BEFORE THE CLAIM, WHICHEVER IS GREATER. BECAUSE THE SITE IS FREE TO USE TODAY, THE ONE HUNDRED DOLLAR CAP WILL TYPICALLY APPLY.',
      ],
    },
    {
      id: 'indemnity',
      title: '10. Indemnity',
      paragraphs: [
        'You agree to indemnify and hold harmless HaiBuilt from any claims, damages, losses, or expenses (including reasonable attorneys\' fees) arising from your misuse of the site or violation of these Terms.',
      ],
    },
    {
      id: 'governing-law',
      title: '11. Governing law',
      paragraphs: [
        'These Terms are governed by the laws of the State of California, USA, without regard to conflict-of-law principles. Any dispute arising from these Terms or the site will be brought in the state or federal courts located in Sacramento County, California, and you consent to their jurisdiction.',
      ],
    },
    {
      id: 'changes',
      title: '12. Changes to these Terms',
      paragraphs: [
        'We may update these Terms from time to time. When we do, we will revise the "Last updated" date at the top of this page. Continued use of the site after changes become effective constitutes acceptance of the revised Terms.',
      ],
    },
    {
      id: 'contact',
      title: '13. Contact us',
      paragraphs: [
        'HaiBuilt Inc',
        '2108 N ST #4268',
        'Sacramento, CA 95816, USA',
        'Email: aisia.io@haibuilt.com',
      ],
    },
  ],
}
