export type SkillStat = {
  label: string;
  value: string;
  change: string;
};

export type FeedPost = {
  id: number;
  context?: string;
  actor: {
    name: string;
    subtitle: string;
    followers?: string;
    logo: string;
    isPromoted?: boolean;
  };
  time: string;
  location?: string;
  body: string;
  image?: string;
  reactions: number;
  comments: number;
  commentPreview?: {
    author: string;
    text: string;
  };
};

export type ConnectionSuggestion = {
  id: number;
  name: string;
  headline: string;
  mutual: number;
  mutualName: string;
  avatar: string;
  verified?: boolean;
};

export const networkContext = {
  ownerName: 'Your Profile',
  ownerAvatar: require('@/assets/images/sakshib.png'),
};

export type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  applicants: number;
  mode: string;
};

export type Conversation = {
  id: number;
  sender: string;
  snippet: string;
  time: string;
  unread?: boolean;
};

export type Notification = {
  id: number;
  title: string;
  description: string;
  time: string;
  type: 'mention' | 'job' | 'connection';
};

export const heroStats: SkillStat[] = [
  { label: 'Profile views', value: '1,204', change: '+8%' },
  { label: 'Search appearances', value: '312', change: '+12%' },
  { label: 'Post impressions', value: '82,140', change: '+25%' },
];

export const posts: FeedPost[] = [
  {
    id: 1,
    context: 'TechVista commented on this',
    actor: {
      name: 'BI Hub Solution',
      subtitle: '236 followers',
      followers: '236 followers',
        logo: 'https://api.dicebear.com/7.x/lorelei/png?seed=bi-hub-solution&scale=80',
    },
    time: '4h',
    location: 'Remote',
    body: "We're #Hiring: Full Stack Developer (Internship)\nLocation: Remote · Apply by March 30.",
    reactions: 28,
    comments: 31,
    commentPreview: {
      author: 'TechVista',
      text: '📌 Bookmarking this for jobseekers I know.',
    },
  },
  {
    id: 2,
    context: "SID KHURANA follows Masters' Union",
    actor: {
      name: "Masters' Union",
      subtitle: '105,068 followers · Promoted',
      isPromoted: true,
        logo: 'https://api.dicebear.com/7.x/lorelei/png?seed=masters-union&scale=80',
    },
    time: '6h',
    body: 'Ensure your business thrives for generations. Apply for the Owners & Promoters Management Programme.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
    reactions: 158,
    comments: 12,
  },
  {
    id: 3,
    context: 'Suggested post',
    actor: {
      name: 'Rahul Yadav',
      subtitle: 'Engineering Manager · Cognition Labs',
        logo: 'https://api.dicebear.com/7.x/lorelei/png?seed=rahul-yadav&scale=80',
    },
    time: '1d',
    body: 'Product sense teardown: how agency teams can ship faster when every stakeholder has a seat at the table.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=900&q=80',
    reactions: 482,
    comments: 98,
    commentPreview: {
      author: 'Anjali B.',
      text: 'Thanks for sharing—love the actionable insights!',
    },
  },
];

const firstNames = [
  'Rahul', 'Sahan', 'Mohamad', 'Nitesh', 'Sharad', 'Yogita', 'Devashree', 'Ananya', 'Rhea', 'Kabir', 'Aarav', 'Mira',
  'Alex', 'Jordan', 'Taylor', 'Morgan', 'Casey', 'Riley', 'Parker', 'Avery', 'Quinn', 'Blake', 'Sage', 'River',
  'Arjun', 'Priya', 'Vikram', 'Neha', 'Harsh', 'Divya', 'Rohan', 'Isha', 'Karan', 'Aisha', 'Sanjay', 'Pooja',
];

const lastNames = [
  'Choudhary', 'Katta', 'Hassan', 'Jha', 'Dubey', 'Kemkar', 'Sharma', 'Singh', 'Gupta', 'Mehta', 'Patel', 'Banerjee',
  'Anderson', 'Chen', 'Martinez', 'Garcia', 'Rodriguez', 'Johnson', 'Williams', 'Brown', 'Jones', 'Miller', 'Davis', 'Wilson',
  'Kumar', 'Rao', 'Verma', 'Tripathi', 'Pandey', 'Mishra', 'Agarwal', 'Bhat', 'Nair', 'Desai', 'Iyer', 'Rani',
];

const roleSnippets = [
  'Senior Associate Developer',
  'Frontend Engineer',
  'SDE II',
  'Technical Lead',
  'Data Engineer',
  'Product Manager',
  'Growth Marketer',
  'ML Engineer',
  'Security Architect',
];

const companies = [
  'Morgan Stanley',
  'Dish',
  'Jio',
  'Salesforce',
  'Databricks',
  'R Systems',
  'Stripe',
  'Figma',
  'Freshworks',
  'Shopify',
];

const mutualContacts = ['Alex', 'Jordan', 'Taylor', 'Morgan', 'Casey', 'Riley'];

const avatarBase = (seed: string) =>
  `https://api.dicebear.com/7.x/lorelei/png?seed=${encodeURIComponent(seed)}&scale=64`;

// Prefetch helper to warm remote PNG avatars so Image component loads faster
// Use runtime requires so TypeScript doesn't fail when native types are not installed.
declare const require: any;
let RNImage: { prefetch?: (uri: string) => Promise<boolean> } | null = null;
let RNPlatform: { OS?: string } = { OS: 'web' };
try {
  const rn = require('react-native');
  RNImage = rn.Image;
  RNPlatform = rn.Platform;
} catch (e) {
  RNImage = null;
  RNPlatform = { OS: 'web' };
}

const prefetchAvatar = (uri: string) => {
  try {
    // Only prefetch on native platforms (skip web / node where `window` may be undefined)
    if (RNPlatform?.OS === 'web' || typeof window === 'undefined') return;
    // Fire-and-forget prefetch to warm the RN image cache (if available)
    if (RNImage && typeof RNImage.prefetch === 'function') RNImage.prefetch(uri);
  } catch (e) {
    // ignore prefetch errors — fallback will still render remote image
  }
};

const buildAvatarSeed = (fullName: string, id: number, offset: number) =>
  `${fullName.replace(/\s+/g, '-').toLowerCase()}-${id}-${offset}`;

export const buildConnectionSuggestions = (count = 60, offset = 0): ConnectionSuggestion[] =>
  Array.from({ length: count }).map((_, index) => {
    const id = index + 1 + offset;
    const first = firstNames[Math.floor(Math.random() * firstNames.length)];
    const last = lastNames[Math.floor(Math.random() * lastNames.length)];
    const role = roleSnippets[Math.floor(Math.random() * roleSnippets.length)];
    const company = companies[Math.floor(Math.random() * companies.length)];
    const mutualName = mutualContacts[Math.floor(Math.random() * mutualContacts.length)];
    const fullName = `${first} ${last}`;
    const randomSeed = buildAvatarSeed(fullName, id, offset);

    return {
      id,
      name: fullName,
      headline: `${role} at ${company}`,
      mutual: 12 + ((index + 5) % 30),
      mutualName,
      verified: index % 3 !== 0,
      avatar: avatarBase(randomSeed),
    };
  });

// Warm cache for initial suggestions so images appear faster in the UI
export const warmConnectionAvatarCache = (items: ConnectionSuggestion[]) => {
  for (const it of items) {
    if (typeof it.avatar === 'string') {
      prefetchAvatar(it.avatar);
    }
  }
};

export let suggestions = buildConnectionSuggestions(60);
warmConnectionAvatarCache(suggestions);

// Function to refresh suggestions with new random data
export const refreshConnectionSuggestions = () => {
  suggestions = buildConnectionSuggestions(60, Math.floor(Math.random() * 1000));
  warmConnectionAvatarCache(suggestions);
  return suggestions;
};

export const jobs: Job[] = [
  { id: 1, title: 'Staff Product Designer', company: 'Questbase', location: 'Bengaluru, India (Hybrid)', applicants: 54, mode: 'Actively recruiting' },
  { id: 2, title: 'Senior Platform Engineer', company: 'Northwind Cloud', location: 'Remote - APAC', applicants: 88, mode: 'Promoted' },
  { id: 3, title: 'Growth Marketing Lead', company: 'Horizon Labs', location: 'Singapore (On-site)', applicants: 32, mode: 'New' },
];

export const conversations: Conversation[] = [
  { id: 1, sender: 'Sahana Rao', snippet: 'Loved your post on product sense. Would you be up for a quick chat?', time: '2m', unread: true },
  { id: 2, sender: 'FutureStack Recruiter', snippet: 'Thanks for applying, we would love to schedule a call.', time: '1h' },
  { id: 3, sender: 'Aditya (Mutual)', snippet: 'Sharing the deck from today’s workshop. Let me know what you think!', time: '4h' },
];

export const notifications: Notification[] = [
  { id: 1, title: 'You were mentioned by Isha Kapoor', description: '“Opportunity graph launch learnings”', time: '1h', type: 'mention' },
  { id: 2, title: 'Northwind Cloud is hiring', description: 'Matches your profile: Senior Platform Engineer', time: '3h', type: 'job' },
  { id: 3, title: 'Anita Chen started following you', description: 'Head of Product · BetaFlow', time: '6h', type: 'connection' },
];

// Warm any other images (posts, invitations) into the RN image cache to reduce first-render lag
try {
  // Prefetch post actor logos
  for (const p of posts) {
    if (p.actor && typeof p.actor.logo === 'string') prefetchAvatar(p.actor.logo);
  }
} catch (e) {}

