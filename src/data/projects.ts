export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'quantum-dashboard',
    title: 'Quantum Analytics',
    description: 'A high-performance real-time data dashboard for quantum computing clusters.',
    tags: ['Next.js', 'React 19', 'Tailwind', 'PPR'],
    imageUrl: '/projects/quantum.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: '2',
    slug: 'nebula-design-system',
    title: 'Nebula DS',
    description: 'Atomic design system for massive scale applications, focusing on glassmorphism principles.',
    tags: ['UI/UX', 'Figma', 'System Design'],
    imageUrl: '/projects/nebula.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: '3',
    slug: 'ethos-marketplace',
    title: 'Ethos Market',
    description: 'Decentralized luxury marketplace with zero-knowledge proof authentication.',
    tags: ['Blockchain', 'Next.js 16', 'Web3'],
    imageUrl: '/projects/ethos.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: '4',
    slug: 'titan-os',
    title: 'Titan OS Interface',
    description: 'Conceptual operating system interface design with extreme focus on accessibility and motion.',
    tags: ['Motion', 'Conceptual', 'UI/UX'],
    imageUrl: '/projects/titan.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: '5',
    slug: 'flux-streaming',
    title: 'Flux Streaming',
    description: 'Adaptive bitrate video streaming platform with real-time collaborative features.',
    tags: ['Next.js', 'WebRTC', 'Video'],
    imageUrl: '/projects/flux.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: '6',
    slug: 'apex-portfolio',
    title: 'Apex Kit',
    description: 'A generative toolkit for AI-driven portfolio construction and SEO optimization.',
    tags: ['AI', 'SEO', 'React'],
    imageUrl: '/projects/apex.jpg',
    liveUrl: '#',
    githubUrl: '#',
  }
];
