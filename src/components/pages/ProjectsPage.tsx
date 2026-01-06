import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Image } from '@/components/ui/image';
import { BaseCrudService } from '@/integrations';
import { Projects } from '@/entities';
import { MapPin, Calendar } from 'lucide-react';

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Projects[]>([]);
  const [selectedType, setSelectedType] = useState<string>('All');

  useEffect(() => {
    const fetchProjects = async () => {
      const { items } = await BaseCrudService.getAll<Projects>('projects');
      setProjects(items);
    };

    fetchProjects();
  }, []);

  const clientTypes = ['All', ...Array.from(new Set(projects.map(p => p.clientType).filter(Boolean)))];

  const filteredProjects = selectedType === 'All'
    ? projects
    : projects.filter(p => p.clientType === selectedType);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] w-full max-w-[120rem] mx-auto grid place-items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://static.wixstatic.com/media/477ab0_23122092fac04889a523fae40cedcc27~mv2.png?originWidth=1920&originHeight=704"
            alt="Construction projects portfolio"
            className="w-full h-full object-cover"
            width={1920}
          />
          <div className="absolute inset-0 bg-primary/70"></div>
        </div>

        <div className="relative z-10 text-center px-6">
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-primary-foreground uppercase tracking-tight mb-4">
            Our Projects
          </h1>
          <p className="font-paragraph text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Showcasing excellence in construction and design
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-background">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary uppercase mb-6">
              Featured Work
            </h2>
            <p className="font-paragraph text-lg text-foreground/80 max-w-3xl mx-auto">
              Explore our portfolio of completed projects that demonstrate our commitment to quality, innovation, and client satisfaction.
            </p>
          </div>

          {/* Filter Buttons */}
          {clientTypes.length > 1 && (
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {clientTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`font-paragraph font-bold px-6 py-3 transition-colors ${
                    selectedType === type
                      ? 'bg-secondary text-secondary-foreground'
                      : 'bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-primary-foreground'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          )}

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link
                key={project._id}
                to={`/projects/${project._id}`}
                className="group bg-background border-2 border-light-grey hover:border-secondary transition-all"
              >
                {project.mainImage && (
                  <div className="overflow-hidden h-64">
                    <Image
                      src={project.mainImage}
                      alt={project.projectName || 'Project image'}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      width={500}
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="font-heading text-2xl font-bold text-primary uppercase mb-3 group-hover:text-secondary transition-colors">
                    {project.projectName}
                  </h3>
                  <p className="font-paragraph text-base text-foreground/80 mb-4">
                    {project.briefDescription}
                  </p>
                  <div className="space-y-2">
                    {project.projectLocation && (
                      <div className="flex items-center gap-2 text-dark-grey">
                        <MapPin size={16} />
                        <span className="font-paragraph text-sm">{project.projectLocation}</span>
                      </div>
                    )}
                    {project.completionDate && (
                      <div className="flex items-center gap-2 text-dark-grey">
                        <Calendar size={16} />
                        <span className="font-paragraph text-sm">
                          {new Date(project.completionDate).toLocaleDateString('en-US', {
                            month: 'long',
                            year: 'numeric',
                          })}
                        </span>
                      </div>
                    )}
                  </div>
                  {project.clientType && (
                    <div className="mt-4">
                      <span className="inline-block bg-secondary/20 text-primary font-paragraph text-xs font-bold px-3 py-1 uppercase">
                        {project.clientType}
                      </span>
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="font-paragraph text-lg text-foreground/60">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="font-heading text-6xl font-bold text-secondary mb-2">500+</div>
              <p className="font-paragraph text-lg">Projects Completed</p>
            </div>
            <div>
              <div className="font-heading text-6xl font-bold text-secondary mb-2">98%</div>
              <p className="font-paragraph text-lg">On-Time Delivery Rate</p>
            </div>
            <div>
              <div className="font-heading text-6xl font-bold text-secondary mb-2">100%</div>
              <p className="font-paragraph text-lg">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="bg-light-grey/50 p-12 md:p-16 text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary uppercase mb-6">
              Let's Build Your Vision
            </h2>
            <p className="font-paragraph text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
              Ready to start your construction project? Contact us today for a free consultation and quote.
            </p>
            <Link
              to="/contact"
              className="bg-secondary text-secondary-foreground font-paragraph font-bold px-8 py-4 hover:bg-secondary/90 transition-colors inline-block"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
