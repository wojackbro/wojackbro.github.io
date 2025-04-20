import { profileData } from '../../data/profile';
import ProjectClientContent from './ProjectClientContent'; // Import the new client component
import { notFound } from 'next/navigation';

// Keep generateStaticParams as it runs on the server
export async function generateStaticParams() {
  return profileData.projects.map((project) => ({
    projectId: project.title.toLowerCase().replace(/\s+/g, '-'),
  }));
}

// This is now a Server Component - Use 'any' for props as a workaround for type error
export default function ProjectPage({ params }: any) {
  const projectId = params.projectId;

  // Fetch project data on the server based on projectId
  const project = profileData.projects.find(
    p => p.title.toLowerCase().replace(/\s+/g, '-') === projectId
  );

  // Handle case where project is not found
  if (!project) {
    notFound(); // Use Next.js notFound utility
  }

  // Render the Client Component and pass the fetched data as props
  return <ProjectClientContent project={project} />;
} 