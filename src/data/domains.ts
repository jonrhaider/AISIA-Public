/**
 * Mirror of prototype-2/src/data/lifeAreas.ts — website copy is reflection-first.
 * App persona titles may differ; marketing language avoids advisory claims.
 */

export type LifeAreaId =
  | 'wellbeing'
  | 'intimacy'
  | 'career'
  | 'finance'
  | 'family'
  | 'home'
  | 'civic'
  | 'hobbies'

export interface LifeArea {
  id: LifeAreaId
  name: string
  tagline: string
  description: string
  /** Short label for the guided thread — not a professional title */
  guideLabel: string
  accent: string
  glow: string
  icon: string
}

export const LIFE_AREAS: LifeArea[] = [
  {
    id: 'wellbeing',
    name: 'Personal Well-being',
    tagline: 'Body, mind & presence',
    description:
      'A space to articulate how you feel, what drains you, and what steadiness would look like — without diagnosing or prescribing.',
    guideLabel: 'Well-being thread',
    accent: '#34d399',
    glow: 'rgba(52, 211, 153, 0.4)',
    icon: 'heart-pulse',
  },
  {
    id: 'intimacy',
    name: 'Marriage & Intimacy',
    tagline: 'Partnership by design',
    description:
      'Surface what you want from partnership, where friction shows up, and what you have not said out loud yet.',
    guideLabel: 'Partnership thread',
    accent: '#fb7185',
    glow: 'rgba(251, 113, 133, 0.4)',
    icon: 'heart-handshake',
  },
  {
    id: 'career',
    name: 'Career & Professional',
    tagline: 'Advance with intent',
    description:
      'Clarify direction, trade-offs, and workplace tensions in your own words — then see them as structured artifacts.',
    guideLabel: 'Career thread',
    accent: '#22d3ee',
    glow: 'rgba(34, 211, 238, 0.4)',
    icon: 'briefcase',
  },
  {
    id: 'finance',
    name: 'Financial Life',
    tagline: 'Clarity & compound growth',
    description:
      'Name what money feels like right now. If the thread surfaces complexity, AISIA can flag where a qualified advisor may help.',
    guideLabel: 'Financial life thread',
    accent: '#fbbf24',
    glow: 'rgba(251, 191, 36, 0.4)',
    icon: 'landmark',
  },
  {
    id: 'family',
    name: 'Family & Parenting',
    tagline: 'Raise with intention',
    description:
      'Work through parenting rhythms, family values, and tensions — extracted into goals and reminders you chose.',
    guideLabel: 'Family thread',
    accent: '#a78bfa',
    glow: 'rgba(167, 139, 250, 0.4)',
    icon: 'users',
  },
  {
    id: 'home',
    name: 'Home & Household',
    tagline: 'Run the home with ease',
    description:
      'Capture the mental load of maintenance, stocking, and household systems — what is slipping and what would relief look like.',
    guideLabel: 'Home thread',
    accent: '#f97316',
    glow: 'rgba(249, 115, 22, 0.4)',
    icon: 'home',
  },
  {
    id: 'civic',
    name: 'Civic & Community',
    tagline: 'Impact beyond self',
    description:
      'Reflect on values, causes, and the gap between intention and participation — without prescribing activism.',
    guideLabel: 'Community thread',
    accent: '#60a5fa',
    glow: 'rgba(96, 165, 250, 0.4)',
    icon: 'globe',
  },
  {
    id: 'hobbies',
    name: 'Hobbies & Leisure',
    tagline: 'Joy by design',
    description:
      'Name what recharges you, what keeps getting deferred, and what protecting that time would require.',
    guideLabel: 'Leisure thread',
    accent: '#f472b6',
    glow: 'rgba(244, 114, 182, 0.4)',
    icon: 'sparkles',
  },
]

/** Opening prompts — guided reflection, not advice */
export const GUIDE_PROMPTS: Record<LifeAreaId, string> = {
  wellbeing:
    'What has been sitting with you about your energy, habits, or mental clarity? Say it plainly — we will shape what emerges into artifacts you can revisit, not prescriptions to follow.',
  intimacy:
    'What do you want more of in your partnership, and what keeps getting in the way? I will help you articulate it — not counsel you through it.',
  career:
    "Where does your professional life need more clarity — direction, skills, workplace dynamics? Let's organize what matters first. The next steps stay yours to choose.",
  finance:
    'What feels unclear or heavy about money right now? I will help you name it and extract structure — not recommend investments or plans. If something needs a professional, we can flag it with targets for that conversation.',
  family:
    'What is on your mind about family rhythm, parenting, or home life? Talk it through — insights and next steps will surface as artifacts, not instructions.',
  home:
    "What household priorities need attention — maintenance, stocking, repairs, routines? Let's map them so nothing important stays scattered.",
  civic:
    'What causes or community roles pull at you, and what keeps you from engaging? Reflection first — action stays yours.',
  hobbies:
    "What do you wish you made more time for, and what keeps winning instead? Let's name it without guilt — then see what artifacts appear.",
}
