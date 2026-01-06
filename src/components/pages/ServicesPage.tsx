import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Image } from '@/components/ui/image';
import { BaseCrudService } from '@/integrations';
import { Services } from '@/entities';
import { ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  const [services, setServices] = useState<Services[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    const fetchServices = async () => {
      const { items } = await BaseCrudService.getAll<Services>('services');
      setServices(items);
    };

    fetchServices();
  }, []);

  const categories = ['All', ...Array.from(new Set(services.map(s => s.serviceCategory).filter(Boolean)))];

  const filteredServices = selectedCategory === 'All'
    ? services
    : services.filter(s => s.serviceCategory === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] w-full max-w-[120rem] mx-auto grid place-items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://static.wixstatic.com/media/477ab0_e28109d343b44689811e9fb7a40e2f5b~mv2.png?originWidth=1920&originHeight=704"
            alt="Construction services overview"
            className="w-full h-full object-cover"
            width={1920}
          />
          <div className="absolute inset-0 bg-primary/70"></div>
        </div>

        <div className="relative z-10 text-center px-6">
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-primary-foreground uppercase tracking-tight mb-4">
            Our Services
          </h1>
          <p className="font-paragraph text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Comprehensive construction solutions for every project
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-background">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary uppercase mb-6">
              What We Do
            </h2>
            <p className="font-paragraph text-lg text-foreground/80 max-w-3xl mx-auto">
              From residential homes to commercial complexes, we provide end-to-end construction services with unmatched quality and reliability.
            </p>
          </div>

          {/* Category Filter */}
          {categories.length > 1 && (
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`font-paragraph font-bold px-6 py-3 transition-colors ${
                    selectedCategory === category
                      ? 'bg-secondary text-secondary-foreground'
                      : 'bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-primary-foreground'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service._id}
                id={service._id}
                className="bg-background border-2 border-light-grey hover:border-secondary transition-all"
              >
                {service.serviceImage && (
                  <div className="overflow-hidden h-64">
                    <Image
                      src={service.serviceImage}
                      alt={service.serviceName || 'Service image'}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      width={500}
                    />
                  </div>
                )}
                <div className="p-8">
                  <h3 className="font-heading text-2xl font-bold text-primary uppercase mb-4">
                    {service.serviceName}
                  </h3>
                  <p className="font-paragraph text-base text-foreground/80 mb-4">
                    {service.shortDescription}
                  </p>
                  {service.detailedDescription && (
                    <p className="font-paragraph text-sm text-foreground/70 mb-6">
                      {service.detailedDescription}
                    </p>
                  )}
                  {service.callToActionLink && service.callToActionLabel && (
                    <a
                      href={service.callToActionLink}
                      className="bg-secondary text-secondary-foreground font-paragraph font-bold px-6 py-3 hover:bg-secondary/90 transition-colors inline-flex items-center gap-2"
                    >
                      {service.callToActionLabel}
                      <ArrowRight size={18} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process Section */}
      <section className="py-24 bg-light-grey/30">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary uppercase mb-4">
              Our Process
            </h2>
            <p className="font-paragraph text-lg text-foreground/80 max-w-3xl mx-auto">
              A streamlined approach to ensure your project success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-background p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary text-secondary-foreground font-heading text-3xl font-bold mb-6">
                1
              </div>
              <h3 className="font-heading text-xl font-bold text-primary uppercase mb-3">
                Consultation
              </h3>
              <p className="font-paragraph text-base text-foreground/80">
                We meet to understand your vision, requirements, and budget for the project.
              </p>
            </div>

            <div className="bg-background p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary text-secondary-foreground font-heading text-3xl font-bold mb-6">
                2
              </div>
              <h3 className="font-heading text-xl font-bold text-primary uppercase mb-3">
                Planning
              </h3>
              <p className="font-paragraph text-base text-foreground/80">
                Our team develops detailed plans, timelines, and cost estimates for approval.
              </p>
            </div>

            <div className="bg-background p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary text-secondary-foreground font-heading text-3xl font-bold mb-6">
                3
              </div>
              <h3 className="font-heading text-xl font-bold text-primary uppercase mb-3">
                Execution
              </h3>
              <p className="font-paragraph text-base text-foreground/80">
                Skilled craftsmen bring the project to life with precision and quality.
              </p>
            </div>

            <div className="bg-background p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary text-secondary-foreground font-heading text-3xl font-bold mb-6">
                4
              </div>
              <h3 className="font-heading text-xl font-bold text-primary uppercase mb-3">
                Delivery
              </h3>
              <p className="font-paragraph text-base text-foreground/80">
                Final inspection, handover, and ongoing support for your complete satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase mb-6">
            Ready to Get Started?
          </h2>
          <p className="font-paragraph text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project and receive a free, no-obligation quote.
          </p>
          <Link
            to="/contact"
            className="bg-secondary text-secondary-foreground font-paragraph font-bold px-8 py-4 hover:bg-secondary/90 transition-colors inline-flex items-center gap-2"
          >
            Request a Quote
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
