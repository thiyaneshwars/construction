/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: projects
 * Interface for Projects
 */
export interface Projects {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  projectName?: string;
  /** @wixFieldType text */
  briefDescription?: string;
  /** @wixFieldType image */
  mainImage?: string;
  /** @wixFieldType text */
  fullDescription?: string;
  /** @wixFieldType text */
  projectLocation?: string;
  /** @wixFieldType date */
  completionDate?: Date | string;
  /** @wixFieldType text */
  clientType?: string;
  /** @wixFieldType image */
  galleryImage1?: string;
}


/**
 * Collection ID: services
 * Interface for Services
 */
export interface Services {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  serviceName?: string;
  /** @wixFieldType text */
  shortDescription?: string;
  /** @wixFieldType text */
  detailedDescription?: string;
  /** @wixFieldType image */
  serviceImage?: string;
  /** @wixFieldType text */
  serviceCategory?: string;
  /** @wixFieldType text */
  callToActionLabel?: string;
  /** @wixFieldType url */
  callToActionLink?: string;
}


/**
 * Collection ID: testimonials
 * Interface for Testimonials
 */
export interface Testimonials {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  clientName?: string;
  /** @wixFieldType text */
  testimonialText?: string;
  /** @wixFieldType text */
  clientTitleCompany?: string;
  /** @wixFieldType text */
  projectService?: string;
  /** @wixFieldType image */
  clientPhoto?: string;
  /** @wixFieldType number */
  rating?: number;
}
