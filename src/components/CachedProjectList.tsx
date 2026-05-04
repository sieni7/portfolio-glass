'use cache';

import { projects } from '@/data/projects';
import { unstable_cache } from 'next/cache';
import Link from 'next/link';
import GlassCardAnimated from './GlassCardAnimated';

/**
 * CachedProjectList - React 19 Cache Component Pattern
 * Uses unstable_cache for high-performance data retrieval.
 */
const getCachedProjects = unstable_cache(
  async () => projects.slice(0, 3),
  ['featured-projects'],
  { revalidate: 3600, tags: ['projects'] }
);

export default async function CachedProjectList() {
  const featured = await getCachedProjects();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
      {featured.map((project) => (
        <Link key={project.id} href={`/projects/${project.slug}`}>
          <GlassCardAnimated className="p-6 h-full flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-white/50 line-clamp-2">{project.description}</p>
            </div>
            <div className="mt-4 text-xs font-mono text-white/30">
              View Case Study →
            </div>
          </GlassCardAnimated>
        </Link>
      ))}
    </div>
  );
}
