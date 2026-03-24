import { Project, Skill } from '../types';

export const projects: Project[] = [
  {
    id: 'travel-search-api',
    title: 'Travel Search API System',
    description: 'A high-performance search system built with Node.js and Elasticsearch. Optimized for RESTful API performance and search relevance.',
    tags: ['Node.js', 'Express', 'Elasticsearch', 'REST API'],
    githubUrl: 'https://github.com/yangronghua616',
    featured: true,
    image: 'https://picsum.photos/seed/travel/800/600'
  },
  {
    id: 'cafe-management',
    title: 'Cafe Management System',
    description: 'Full-stack application for order and inventory management. Features a real-time dashboard for business operations.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    githubUrl: 'https://github.com/yangronghua616',
    demoUrl: 'https://ais-dev-y6xfkwyewu5ndz6db6du3d-125223680573.asia-southeast1.run.app',
    featured: true,
    image: 'https://picsum.photos/seed/cafe/800/600'
  }
];

export const skills: Skill[] = [
  {
    category: 'Languages',
    items: ['JavaScript', 'PHP', 'SQL', 'TypeScript']
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'REST APIs', 'Elasticsearch']
  },
  {
    category: 'Frontend',
    items: ['React', 'Tailwind CSS', 'Next.js (Learning)']
  },
  {
    category: 'Database',
    items: ['MySQL', 'MongoDB', 'PostgreSQL']
  },
  {
    category: 'Other',
    items: ['Git', 'Docker', 'Agile', 'Business Management']
  }
];
