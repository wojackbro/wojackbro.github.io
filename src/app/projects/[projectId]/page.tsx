import { profileData } from '../../data/profile';
import ProjectClientContent from './ProjectClientContent';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return profileData.projects.map((project) => ({
    projectId: project.title.toLowerCase().replace(/\s+/g, '-'),
  }));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function ProjectPage({ params }: any) {
  const { projectId } = await params;

  const project = profileData.projects.find(
    p => p.title.toLowerCase().replace(/\s+/g, '-') === projectId
  );

  if (!project) {
    notFound();
  }

  return <ProjectClientContent project={project} />;
}
