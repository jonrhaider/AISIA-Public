import type { LegalDocument } from '../components/LegalPage'

/** Marketing-site privacy policy — draft for legal review before production deploy. */
export const PRIVACY_POLICY: LegalDocument = {
  title: 'Privacy Policy',
  lastUpdated: 'July 10, 2026',
  disclaimer:
    'This policy describes how HaiBuilt Inc operates the AISIA marketing website. It is provided for transparency and should be reviewed by qualified counsel before you rely on it for compliance decisions.',
  intro:
    'HaiBuilt Inc ("HaiBuilt," "we," "us," or "our") operates the public website for AISIA — the AI Self Improvement App. This Privacy Policy explains what information we collect when you visit our marketing site, how we use it, and the choices you have. This policy applies to the marketing website only. When you sign up for a trial or use the AISIA application, separate terms and privacy practices apply.',
  sections: [
    {
      id: 'who-we-are',
      title: '1. Who we are',
      paragraphs: [
        'AISIA is a product of HaiBuilt Inc, located at 2108 N ST #4268, Sacramento, CA 95816, USA.',
        'For privacy questions about this website, contact us at aisia.io@haibuilt.com.',
      ],
    },
    {
      id: 'scope',
      title: '2. Scope of this policy',
      paragraphs: [
        'This policy covers the AISIA marketing website — the pages that introduce the product, explain how it works, and link you to the AISIA application to start a free trial.',
        'It does not cover the AISIA application itself, third-party websites we link to, or email you send us outside of this site. Account data, conversation content, and billing information are governed by the app\'s privacy practices.',
      ],
    },
    {
      id: 'what-we-collect',
      title: '3. Information we collect',
      paragraphs: ['We collect only what is needed to operate this site.'],
      bullets: [
        'Technical logs — When you visit this site, Cloudflare Pages (our hosting provider) may automatically process standard web-server data such as your IP address, browser type, referring page, and request timestamps. We do not use this data to profile you or for advertising.',
        'Communications — If you email us at aisia.io@haibuilt.com, we receive whatever you choose to include in your message.',
      ],
    },
    {
      id: 'what-we-do-not-collect',
      title: '4. What we do not collect on this site',
      paragraphs: ['We designed this marketing site to minimize data collection. On this site we do not:'],
      bullets: [
        'Collect form submissions or store account information',
        'Use advertising or analytics trackers',
        'Use third-party marketing pixels',
        'Set non-essential cookies for tracking',
        'Process trial signups or payments (those happen in the AISIA application)',
      ],
    },
    {
      id: 'how-we-use',
      title: '5. How we use information',
      paragraphs: ['We use the information described above to:'],
      bullets: [
        'Operate and secure the marketing website',
        'Respond to your emails and support requests',
        'Understand aggregate traffic patterns through hosting logs, without selling or renting personal information',
      ],
    },
    {
      id: 'sharing',
      title: '6. How we share information',
      paragraphs: [
        'We do not sell your personal information. We do not share it for cross-context behavioral advertising.',
        'We share limited technical data with service providers who help us run this site. Today that includes Cloudflare, Inc., which hosts and delivers our static website. Those providers process data on our behalf and only as needed to provide their services.',
        'When you click a trial or subscription CTA, you leave this site for the AISIA application. Data you provide there is handled under the app\'s privacy practices, not this policy.',
        'We may disclose information if required by law, to protect our rights, or to prevent fraud or abuse.',
      ],
    },
    {
      id: 'storage',
      title: '7. Cookies, local storage, and fonts',
      paragraphs: [
        'This site does not set tracking cookies and does not store form data in your browser.',
        'We self-host our fonts. Loading this site does not send your information to Google Fonts or other font CDNs.',
        'If we add cookies or change how this site works, we will update this policy before or when that happens.',
      ],
    },
    {
      id: 'retention',
      title: '8. How long we keep information',
      paragraphs: [
        'Hosting logs are retained according to Cloudflare\'s standard log-retention practices. Emails you send us are kept as long as needed to respond and maintain ordinary business records.',
      ],
    },
    {
      id: 'security',
      title: '9. Security',
      paragraphs: [
        'We use HTTPS and reputable hosting infrastructure to protect data in transit. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.',
      ],
    },
    {
      id: 'your-rights',
      title: '10. Your choices and rights',
      paragraphs: [
        'If you are a California resident, you may have rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect, to request deletion, and to opt out of the sale or sharing of personal information. We do not sell personal information. To exercise your rights, email aisia.io@haibuilt.com.',
        'Residents of other U.S. states may have similar rights under applicable state privacy laws. Contact us and we will respond in line with applicable law.',
      ],
    },
    {
      id: 'children',
      title: '11. Children',
      paragraphs: [
        'AISIA is a personal reflection product. We do not knowingly collect personal information from children through this marketing site.',
      ],
    },
    {
      id: 'changes',
      title: '12. Changes to this policy',
      paragraphs: [
        'We may update this Privacy Policy from time to time. When we do, we will revise the "Last updated" date at the top of this page. Material changes — such as adding analytics or new data collection on this site — will be reflected here before or when those features go live.',
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
