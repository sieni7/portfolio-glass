'use client';

import { useState } from 'react';
import { projects } from '@/data/projects';
import GlassCardAnimated from '@/components/GlassCardAnimated';
import AnimatedSection from '@/components/AnimatedSection';
import Link from 'next/link';
import Image from 'next/image';
import { getBlurPlaceholder } from '@/utils/imageLoader';

export default function ProjectGrid() {
  const [filter, setFilter] = useState('All');
  
  const allTags = ['All', ...Array.from(new Set(projects.flatMap(p => p.tags)))];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.tags.includes(filter));

  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-wrap gap-3">
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => setFilter(tag)}
            className={`
              px-6 py-2 rounded-full text-sm font-medium transition-all
              ${filter === tag 
                ? 'bg-white text-black' 
                : 'bg-white/5 border border-white/10 text-white/60 hover:bg-white/10'}
            `}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project, idx) => (
          <AnimatedSection key={project.id} delay={idx * 0.1}>
            <Link href={`/projects/${project.slug}`}>
              <GlassCardAnimated className="group h-full">
                <div className="relative aspect-video bg-white/5 overflow-hidden">
                  <Image 
                    src={project.imageUrl} 
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    placeholder="blur"
                    blurDataURL={getBlurPlaceholder()}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="p-8">
                  <div className="flex gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-mono uppercase px-2 py-1 bg-white/5 border border-white/10 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors">{project.title}</h3>
                  <p className="text-white/60 leading-relaxed line-clamp-2">{project.description}</p>
                </div>
              </GlassCardAnimated>
            </Link>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
