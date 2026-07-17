import type { LegalDocument } from '../components/LegalPage'

/** Marketing-site security overview — draft for legal review before production deploy. */
export const SECURITY_OVERVIEW: LegalDocument = {
  title: 'Security',
  lastUpdated: 'July 10, 2026',
  disclaimer:
    'This page describes security practices for the AISIA marketing website. It is provided for transparency and should be reviewed by qualified counsel before you rely on it for compliance decisions.',
  intro:
    'Security matters to AISIA because the product is built around personal reflection across sensitive life domains. This page explains how we protect the marketing website today. It does not describe the full security architecture of the AISIA application, which has its own controls. For what data this site collects and how we use it, see our Privacy Policy.',
  sections: [
    {
      id: 'approach',
      title: '1. Our approach',
      paragraphs: [
        'We minimize data collection on the marketing site, use reputable infrastructure, and keep the attack surface small. Security is not a one-time checklist — we revisit practices as the product and website evolve.',
      ],
    },
    {
      id: 'scope',
      title: '2. What this page covers',
      paragraphs: [
        'This page applies to the AISIA marketing website hosted on Cloudflare Pages. It covers how we deliver the site, protect data in transit, and handle the limited information described in our Privacy Policy.',
        'Trial signup and account data are handled in the AISIA application, which has its own security practices.',
      ],
    },
    {
      id: 'in-transit',
      title: '3. Encryption in transit',
      paragraphs: [
        'The marketing site is served over HTTPS (TLS). Modern browsers negotiate encrypted connections so content and requests between your device and our hosting provider are protected in transit.',
      ],
    },
    {
      id: 'hosting',
      title: '4. Hosting and delivery',
      paragraphs: [
        'We host the marketing site on Cloudflare Pages, a static-site platform with global CDN delivery. Cloudflare provides DDoS mitigation, edge caching, and standard web-security features as part of its platform.',
        'Because the site is static, there is no application database or server-side session layer on this property. That reduces certain classes of web-application risk.',
      ],
    },
    {
      id: 'data-minimization',
      title: '5. Data minimization',
      paragraphs: ['On this marketing site we intentionally avoid:'],
      bullets: [
        'Collecting form submissions or storing user data on our servers',
        'Advertising or analytics trackers',
        'Third-party marketing pixels',
        'Non-essential cookies for tracking',
        'Loading fonts from external CDNs (fonts are self-hosted)',
      ],
    },
    {
      id: 'trial-signup',
      title: '6. Trial signup',
      paragraphs: [
        'This marketing site does not process trial signups or store account information. When you click a trial or subscription CTA, you are directed to the AISIA application, which handles authentication, billing, and data storage under its own security controls.',
      ],
    },
    {
      id: 'dependencies',
      title: '7. Software supply chain',
      paragraphs: [
        'The site is built with widely used open-source libraries (React, Vite, Tailwind, and others). We keep dependencies reasonably current and run production builds through our standard validation process before deploy.',
      ],
    },
    {
      id: 'access',
      title: '8. Internal access',
      paragraphs: [
        'Access to deployment and domain configuration is limited to authorized HaiBuilt personnel. We use strong authentication and least-privilege access for production systems.',
      ],
    },
    {
      id: 'incident',
      title: '9. Security incidents',
      paragraphs: [
        'If we become aware of a security incident affecting personal information collected through this site, we will investigate promptly and take steps to mitigate harm, including notification where required by law.',
      ],
    },
    {
      id: 'reporting',
      title: '10. Report a vulnerability',
      paragraphs: [
        'If you believe you have found a security vulnerability affecting the AISIA marketing website, please report it to aisia.io@haibuilt.com. Include enough detail for us to reproduce the issue. Please do not publicly disclose vulnerabilities before we have had a reasonable opportunity to address them.',
        'We appreciate responsible disclosure and will acknowledge good-faith reports.',
      ],
    },
    {
      id: 'limits',
      title: '11. Limits',
      paragraphs: [
        'No website or system is completely secure. We work to protect the marketing site, but we cannot guarantee absolute security. Use the site in line with your own risk tolerance and security practices.',
      ],
    },
    {
      id: 'contact',
      title: '12. Contact us',
      paragraphs: [
        'HaiBuilt Inc',
        '2108 N ST #4268',
        'Sacramento, CA 95816, USA',
        'Email: aisia.io@haibuilt.com',
      ],
    },
  ],
}
