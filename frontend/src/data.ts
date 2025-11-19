// Random name and avatar generators
const firstNames = ['Alex', 'Jordan', 'Taylor', 'Morgan', 'Casey', 'Riley', 'Parker', 'Avery', 'Quinn', 'Blake', 'Sage', 'River', 'Dakota', 'Cameron', 'Drew', 'Skylar', 'Reese', 'Finley', 'Rowan', 'Phoenix', 'Jamie', 'Sam', 'Bailey', 'Harper', 'Elliot', 'Sydney', 'Eden', 'Indigo', 'Jasper', 'Kerry']

const lastNames = ['Anderson', 'Banerjee', 'Chen', 'Doe', 'Elliott', 'Fischer', 'Garcia', 'Harrison', 'Ito', 'Johnson', 'Kumar', 'Laurent', 'Martinez', 'Nakamura', 'O\'Brien', 'Patel', 'Quinn', 'Rodriguez', 'Singh', 'Thompson', 'Umami', 'Vasquez', 'Wagner', 'Xavier', 'Yamamoto', 'Zhang', 'Park', 'Kim', 'Lee', 'Wong']

const titles = ['Software Engineer', 'Product Manager', 'Designer', 'Data Scientist', 'DevOps Engineer', 'Frontend Developer', 'Backend Developer', 'Full Stack Developer', 'Cloud Architect', 'UX Designer', 'Growth Marketing Lead', 'Business Analyst', 'Project Manager', 'QA Engineer', 'Solutions Architect']

const companies = ['Tech Corp', 'Innovations Inc', 'Digital Labs', 'Cloud Systems', 'Future Tech', 'AI Solutions', 'Web Dynamics', 'Data Insights', 'Mobile First', 'Enterprise Plus', 'StartUp Hub', 'Global Tech', 'Quantum Labs', 'Nexus Systems', 'Vertex AI']

// Generate AI avatar using Dicebear - realistic human avatars
function generateAIAvatar(seed: string): string {
  return `https://api.dicebear.com/7.x/lorelei/png?seed=${encodeURIComponent(seed)}&scale=80`
}

// Generate random person data
function generateRandomPerson(id: number) {
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)]
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)]
  const name = `${firstName} ${lastName}`
  const title = titles[Math.floor(Math.random() * titles.length)]
  const company = companies[Math.floor(Math.random() * companies.length)]
  const avatar = generateAIAvatar(`${name}-${id}`)
  
  return { name, title, company, avatar }
}

export type Post = {
  id: number
  author: {
    name: string
    title: string
    avatar: string
  }
  time: string
  text: string
  image?: string
  reactions: number
  comments: number
  hashtags: string[]
}

export type TrendingTopic = {
  id: number
  title: string
  audience: string
  change: string
}

export type Job = {
  id: number
  role: string
  company: string
  location: string
  applicants: number
  type: string
}

export type Course = {
  id: number
  title: string
  author: string
  duration: string
}

export type Invitation = {
  id: number
  name: string
  title: string
  mutual: number
  message: string
  avatar: string
}

export type NetworkSuggestion = {
  id: number
  name: string
  title: string
  company: string
  mutual: number
  avatar: string
}

export type ManageNetworkItem = {
  id: string
  label: string
  count: number
  type: 'connections' | 'contacts' | 'following' | 'groups' | 'events' | 'companies' | 'hashtags'
}

export type Group = {
  id: number
  name: string
  members: string
  avatar: string
  category: string
}

export const posts: Post[] = [
  {
    id: 1,
    author: {
      name: 'Isha Kapoor',
      title: 'Product Lead at Nuralink',
      avatar: generateAIAvatar('isha-kapoor-1'),
    },
    time: '2h',
    text: 'We just launched our new opportunity graph to help teams find signal faster. Proud of this incredible crew.',
    image: 'https://images.unsplash.com/photo-1551292831-023188e78222?auto=format&fit=crop&w=900&q=80',
    reactions: 412,
    comments: 68,
    hashtags: ['#product', '#design', '#opportunity'],
  },
  {
    id: 2,
    author: {
      name: 'Kenji Matsuda',
      title: 'VP Engineering | Cloudscale',
      avatar: generateAIAvatar('kenji-matsuda-2'),
    },
    time: '5h',
    text: 'Hiring senior platform engineers across Mumbai, Delhi NCR, and remote. If distributed systems spark joy for you, let us talk!',
    reactions: 298,
    comments: 104,
    hashtags: ['#hiring', '#engineering', '#cloud'],
  },
  {
    id: 3,
    author: {
      name: 'Lucia Romero',
      title: 'Brand Strategist | StoryLab',
      avatar: generateAIAvatar('lucia-romero-3'),
    },
    time: '1d',
    text: 'Case study: how we rebuilt community trust with a listening-first approach. Long read but packed with insights.',
    image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80',
    reactions: 705,
    comments: 192,
    hashtags: ['#marketing', '#community', '#casestudy'],
  },
]

export const trendingTopics: TrendingTopic[] = [
  { id: 1, title: 'AI funding in India', audience: '34,221 readers', change: '+12%' },
  { id: 2, title: 'Green jobs surge APAC', audience: '21,004 readers', change: '+8%' },
  { id: 3, title: 'Salary reset 2025', audience: '18,432 readers', change: '+16%' },
  { id: 4, title: 'Future of hybrid work', audience: '41,900 readers', change: '+5%' },
]

export const featuredJobs: Job[] = [
  { id: 1, role: 'Staff Product Designer', company: 'Questbase', location: 'Bengaluru, India', applicants: 54, type: 'Hybrid' },
  { id: 2, role: 'Senior Platform Engineer', company: 'Northwind Cloud', location: 'Remote - India', applicants: 88, type: 'Remote' },
  { id: 3, role: 'Growth Marketing Lead', company: 'Horizon Labs', location: 'Singapore', applicants: 32, type: 'On-site' },
]

export const learningCourses: Course[] = [
  { id: 1, title: 'Strategic Storytelling for Leaders', author: 'LinkedIn Learning', duration: '52 min' },
  { id: 2, title: 'System Design Deep Dive', author: 'TechPath', duration: '1 h 12 min' },
  { id: 3, title: 'Career GPS: Finding Your Next Role', author: 'CareerOS', duration: '38 min' },
]

export const featuredEvents = [
  { id: 1, title: 'Designing Trustworthy AI Systems', time: 'Thu, 11:00 AM IST', attendees: '3,140 attendees' },
  { id: 2, title: 'Creator Economy Forecast 2025', time: 'Fri, 6:30 PM IST', attendees: '1,870 attendees' },
]

export const networkInvitations: Invitation[] = [
  {
    id: 1,
    name: 'Rhea Banerjee',
    title: 'Sr. Product Manager · Atlassian',
    mutual: 24,
    message: '"Loved your breakdown on storytelling metrics—would be great to connect!"',
    avatar: generateAIAvatar('rhea-banerjee-1'),
  },
  {
    id: 2,
    name: 'Victor Chen',
    title: 'Head of Partnerships · Luma',
    mutual: 18,
    message: '"Working on a creator ecosystem report. Your insights would help."',
    avatar: generateAIAvatar('victor-chen-2'),
  },
]

export const networkSuggestions: NetworkSuggestion[] = (() => {
  const suggestions = []
  for (let i = 1; i <= 4; i++) {
    const person = generateRandomPerson(i)
    suggestions.push({
      id: i,
      name: person.name,
      title: person.title,
      company: person.company,
      mutual: Math.floor(Math.random() * 50) + 10,
      avatar: person.avatar,
    })
  }
  return suggestions
})()

export const manageNetworkItems: ManageNetworkItem[] = [
  { id: 'connections', label: 'Connections', count: 1249, type: 'connections' },
  { id: 'contacts', label: 'Contacts', count: 612, type: 'contacts' },
  { id: 'following', label: 'Following & followers', count: 310, type: 'following' },
  { id: 'groups', label: 'Groups', count: 28, type: 'groups' },
  { id: 'events', label: 'Events', count: 12, type: 'events' },
  { id: 'companies', label: 'Companies', count: 96, type: 'companies' },
  { id: 'hashtags', label: 'Hashtags', count: 44, type: 'hashtags' },
]

export const recommendedGroups: Group[] = [
  {
    id: 1,
    name: 'Product Builders APAC',
    members: '89,211 members',
    category: 'Product',
    avatar: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 2,
    name: 'Women in Tech Leadership',
    members: '121,004 members',
    category: 'Leadership',
    avatar: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 3,
    name: 'AI Strategy Circle',
    members: '54,872 members',
    category: 'AI & Data',
    avatar: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80',
  },
]

// Function to generate fresh network suggestions when refreshed
export function generateFreshNetworkSuggestions(): NetworkSuggestion[] {
  const suggestions = []
  for (let i = 1; i <= 4; i++) {
    const randomId = Math.floor(Math.random() * 10000)
    const person = generateRandomPerson(randomId)
    suggestions.push({
      id: i,
      name: person.name,
      title: person.title,
      company: person.company,
      mutual: Math.floor(Math.random() * 50) + 10,
      avatar: person.avatar,
    })
  }
  return suggestions
}