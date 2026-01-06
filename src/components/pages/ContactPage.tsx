import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Image } from '@/components/ui/image';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: 'Message Sent!',
        description: 'Thank you for contacting us. We will get back to you within 24 hours.',
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[50vh] w-full max-w-[120rem] mx-auto grid place-items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://static.wixstatic.com/media/477ab0_c62d6b3bb5f149d58ed34444b6ffa7d6~mv2.png?originWidth=960&originHeight=512"
            alt="Contact BuildPro Construction"
            className="w-full h-full object-cover"
            width={1920}
          />
          <div className="absolute inset-0 bg-primary/70"></div>
        </div>

        <div className="relative z-10 text-center px-6">
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-primary-foreground uppercase tracking-tight mb-4">
            Contact Us
          </h1>
          <p className="font-paragraph text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Let's discuss your construction project
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary uppercase mb-8">
                Get in Touch
              </h2>
              <p className="font-paragraph text-lg text-foreground/80 mb-12">
                Ready to start your construction project? Contact us today for a free consultation and quote. Our team is here to answer your questions and help bring your vision to life.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-primary uppercase mb-2">
                      Phone
                    </h3>
                    <p className="font-paragraph text-base text-foreground/80 mb-1">
                      <a href="tel:+15551234567" className="hover:text-secondary transition-colors">
                        +1 (555) 123-4567
                      </a>
                    </p>
                    <p className="font-paragraph text-sm text-dark-grey">
                      Monday - Friday: 8:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-primary uppercase mb-2">
                      Email
                    </h3>
                    <p className="font-paragraph text-base text-foreground/80">
                      <a href="mailto:info@buildpro.com" className="hover:text-secondary transition-colors">
                        info@buildpro.com
                      </a>
                    </p>
                    <p className="font-paragraph text-sm text-dark-grey">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-primary uppercase mb-2">
                      Office Location
                    </h3>
                    <p className="font-paragraph text-base text-foreground/80">
                      123 Construction Avenue<br />
                      Building City, BC 12345<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary flex items-center justify-center flex-shrink-0">
                    <Clock size={24} className="text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-primary uppercase mb-2">
                      Business Hours
                    </h3>
                    <p className="font-paragraph text-base text-foreground/80">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-light-grey/30 p-8 lg:p-12">
              <h2 className="font-heading text-3xl font-bold text-primary uppercase mb-6">
                Request a Quote
              </h2>
              <p className="font-paragraph text-base text-foreground/80 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="font-paragraph font-bold text-foreground mb-2 block">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full font-paragraph"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="font-paragraph font-bold text-foreground mb-2 block">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full font-paragraph"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="font-paragraph font-bold text-foreground mb-2 block">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full font-paragraph"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <Label htmlFor="projectType" className="font-paragraph font-bold text-foreground mb-2 block">
                    Project Type *
                  </Label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full font-paragraph px-3 py-2 border border-light-grey bg-background focus:outline-none focus:ring-2 focus:ring-secondary"
                  >
                    <option value="">Select a project type</option>
                    <option value="residential">Residential Construction</option>
                    <option value="commercial">Commercial Construction</option>
                    <option value="renovation">Renovation & Remodeling</option>
                    <option value="interior">Interior Design</option>
                    <option value="project-management">Project Management</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message" className="font-paragraph font-bold text-foreground mb-2 block">
                    Project Details *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full font-paragraph"
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-secondary text-secondary-foreground font-paragraph font-bold px-8 py-4 hover:bg-secondary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-light-grey/30">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary uppercase mb-4">
              Visit Our Office
            </h2>
            <p className="font-paragraph text-lg text-foreground/80">
              Stop by for a consultation or to discuss your project in person
            </p>
          </div>

          <div className="bg-light-grey h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} className="text-dark-grey mx-auto mb-4" />
              <p className="font-paragraph text-base text-dark-grey">
                123 Construction Avenue, Building City, BC 12345
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase mb-6">
            Need Immediate Assistance?
          </h2>
          <p className="font-paragraph text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            For urgent construction matters or emergency support, call us directly.
          </p>
          <a
            href="tel:+15551234567"
            className="bg-secondary text-secondary-foreground font-paragraph font-bold px-8 py-4 hover:bg-secondary/90 transition-colors inline-flex items-center gap-2"
          >
            <Phone size={20} />
            Call Now: +1 (555) 123-4567
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
