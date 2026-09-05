import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, FileText } from "lucide-react";
import { findProject, projects } from "../../../lib/projects";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project) notFound();

  const sections = [["The Challenge", project.challenge], ["Research", project.research], ["Thinking", project.thinking], ["Final Solution", project.solution], ["Business Impact", project.impact], ["Reflection", project.reflection]];

  return <main className="project-page">
    <header className="project-header"><Link href="/#products"><ArrowLeft size={16}/> All products</Link><Link className="wordmark" href="/">MANN<span>.</span></Link></header>
    <article className="project-story">
      <span className="eyebrow">{project.domain} / {project.duration}</span>
      <h1>{project.name}</h1><p className="case-tag">{project.tag}</p>
      <div className="case-meta"><span>Role<br/><b>{project.role}</b></span><span>Format<br/><b>{project.duration}</b></span></div>
      {sections.map(([title, copy], index) => <section className="case-section" key={title}><span>0{index + 1}</span><div><h2>{title}</h2><p>{copy}</p></div></section>)}
      <div className="case-actions">{project.deck && <a href={project.deck} target="_blank"><FileText size={16}/> View complete deck</a>}{project.live && <a href={project.live} target="_blank"><ExternalLink size={16}/> Open platform</a>}</div>
    </article>
  </main>;
}
