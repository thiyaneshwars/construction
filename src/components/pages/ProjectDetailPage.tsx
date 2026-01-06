import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Image } from '@/components/ui/image';
import { BaseCrudService } from '@/integrations';
import { Projects } from '@/entities';
import { MapPin, Calendar, ArrowLeft, Building2 } from 'lucide-react';

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Projects | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      if (id) {
        const projectData = await BaseCrudService.getById<Projects>('projects', id);
        setProject(projectData);
      }
    };

    fetchProject();
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-24 text-center">
          <p className="font-paragraph text-lg text-foreground/60">Loading project details...</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] w-full max-w-[120rem] mx-auto overflow-hidden">
        {project.mainImage && (
          <>
            <Image
              src={project.mainImage}
              alt={project.projectName || 'Project image'}
              className="w-full h-full object-cover"
              width={1920}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-primary/30"></div>
          </>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-12">
          <div className="max-w-[120rem] mx-auto">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-primary-foreground font-paragraph font-bold mb-6 hover:text-secondary transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Projects
            </Link>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground uppercase tracking-tight mb-4">
              {project.projectName}
            </h1>
            <div className="flex flex-wrap gap-6 text-primary-foreground/90">
              {project.projectLocation && (
                <div className="flex items-center gap-2">
                  <MapPin size={20} />
                  <span className="font-paragraph text-base">{project.projectLocation}</span>
                </div>
              )}
              {project.completionDate && (
                <div className="flex items-center gap-2">
                  <Calendar size={20} />
                  <span className="font-paragraph text-base">
                    Completed {new Date(project.completionDate).toLocaleDateString('en-US', {
                      month: 'long',
                      year: 'numeric',
                    })}
                  </span>
                </div>
              )}
              {project.clientType && (
                <div className="flex items-center gap-2">
                  <Building2 size={20} />
                  <span className="font-paragraph text-base">{project.clientType}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Project Details Section */}
      <section className="py-24 bg-background">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary uppercase mb-6">
                Project Overview
              </h2>
              {project.briefDescription && (
                <p className="font-paragraph text-xl text-foreground/90 mb-6">
                  {project.briefDescription}
                </p>
              )}
              {project.fullDescription && (
                <div className="font-paragraph text-base text-foreground/80 leading-relaxed space-y-4">
                  {project.fullDescription.split('\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              )}

              {/* Gallery */}
              {project.galleryImage1 && (
                <div className="mt-12">
                  <h3 className="font-heading text-2xl font-bold text-primary uppercase mb-6">
                    Project Gallery
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="overflow-hidden">
                      <Image
                        src={project.galleryImage1}
                        alt="Project gallery image"
                        className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                        width={600}
                      />
                    </div>
                    {project.mainImage && (
                      <div className="overflow-hidden">
                        <Image
                          src={project.mainImage}
                          alt="Project main image"
                          className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                          width={600}
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-light-grey/30 p-8 sticky top-24">
                <h3 className="font-heading text-2xl font-bold text-primary uppercase mb-6">
                  Project Details
                </h3>
                <dl className="space-y-4">
                  {project.projectLocation && (
                    <div>
                      <dt className="font-paragraph text-sm font-bold text-dark-grey uppercase mb-1">
                        Location
                      </dt>
                      <dd className="font-paragraph text-base text-foreground">
                        {project.projectLocation}
                      </dd>
                    </div>
                  )}
                  {project.completionDate && (
                    <div>
                      <dt className="font-paragraph text-sm font-bold text-dark-grey uppercase mb-1">
                        Completion Date
                      </dt>
                      <dd className="font-paragraph text-base text-foreground">
                        {new Date(project.completionDate).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </dd>
                    </div>
                  )}
                  {project.clientType && (
                    <div>
                      <dt className="font-paragraph text-sm font-bold text-dark-grey uppercase mb-1">
                        Client Type
                      </dt>
                      <dd className="font-paragraph text-base text-foreground">
                        {project.clientType}
                      </dd>
                    </div>
                  )}
                </dl>

                <div className="mt-8 pt-8 border-t border-light-grey">
                  <h4 className="font-heading text-lg font-bold text-primary uppercase mb-4">
                    Interested in a Similar Project?
                  </h4>
                  <Link
                    to="/contact"
                    className="bg-secondary text-secondary-foreground font-paragraph font-bold px-6 py-3 hover:bg-secondary/90 transition-colors inline-block w-full text-center"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="font-paragraph text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your construction vision to life with the same quality and dedication.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-secondary text-secondary-foreground font-paragraph font-bold px-8 py-4 hover:bg-secondary/90 transition-colors inline-block"
            >
              Contact Us
            </Link>
            <Link
              to="/projects"
              className="bg-transparent text-primary-foreground font-paragraph font-bold px-8 py-4 border-2 border-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors inline-block"
            >
              View More Projects
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
