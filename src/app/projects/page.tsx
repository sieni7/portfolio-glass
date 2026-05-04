import ProjectGrid from '@/components/ProjectGrid';

export const metadata = {
  title: 'Projects | Digital Architect Portfolio',
  description: 'Explore the latest projects in high-performance web development and premium UI design.',
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-8">
      <header>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">Selected Works</h1>
        <p className="text-xl text-white/60 max-w-2xl">
          A curation of experimental and production projects pushing the boundaries of web interaction.
        </p>
      </header>
      
      <ProjectGrid />
    </div>
  );
}
