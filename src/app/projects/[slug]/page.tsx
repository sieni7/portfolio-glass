import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import GlassCardAnimated from '@/components/GlassCardAnimated';
import AnimatedSection from '@/components/AnimatedSection';
import MagneticButton from '@/components/MagneticButton';
import Image from 'next/image';
import { getBlurPlaceholder } from '@/utils/imageLoader';
import { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

/**
 * Static Generation for dynamic project routes
 */
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

/**
 * Dynamic Metadata Generation
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  
  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title} | Portfolio`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <div className="flex flex-col gap-12">
      <AnimatedSection>
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div>
            <div className="flex gap-2 mb-4">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs font-mono uppercase px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">{project.title}</h1>
          </div>
          <div className="flex gap-4">
            <MagneticButton className="px-8 py-4 bg-white text-black font-bold rounded-full">
              Live Demo
            </MagneticButton>
            <MagneticButton className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full">
              Source Code
            </MagneticButton>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <GlassCardAnimated className="relative aspect-[21/9] flex items-center justify-center overflow-hidden">
          <Image 
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover opacity-40 mix-blend-luminosity"
            placeholder="blur"
            blurDataURL={getBlurPlaceholder()}
          />
          <div className="relative z-10 text-white/20 font-bold text-6xl md:text-9xl uppercase tracking-[0.2em] pointer-events-none">
            {project.title.split(' ')[0]}
          </div>
        </GlassCardAnimated>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
        <AnimatedSection delay={0.3} className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
          <p className="text-xl text-white/60 leading-relaxed">
            {project.description} This project required a deep understanding of {project.tags.join(', ')} 
            to achieve a seamless user experience while maintaining extreme visual fidelity.
          </p>
        </AnimatedSection>
        
        <AnimatedSection delay={0.4}>
          <GlassCardAnimated className="p-8">
            <h3 className="font-bold mb-4">Project Specs</h3>
            <ul className="flex flex-col gap-4 text-sm text-white/60">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Client</span>
                <span className="text-white">Confidential</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Year</span>
                <span className="text-white">2026</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Role</span>
                <span className="text-white">Lead Architect</span>
              </li>
            </ul>
          </GlassCardAnimated>
        </AnimatedSection>
      </div>
    </div>
  );
}
