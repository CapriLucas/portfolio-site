export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
  impact?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface Dictionary {
  navigation: {
    home: string;
    about: string;
    projects: string;
    experience: string;
    contact: string;
  };
  home: {
    title: string;
    subtitle: string;
    cta: {
      projects: string;
      contact: string;
    };
  };
  about: {
    title: string;
    intro: string;
    technologies: string;
    techList: string[];
  };
  projects: {
    title: string;
    subtitle: string;
  };
  experience: {
    title: string;
    subtitle: string;
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
      success: string;
      error: string;
    };
  };
  footer: {
    built: string;
    links: {
      github: string;
      linkedin: string;
      email: string;
    };
  };
  meta: {
    title: string;
    description: string;
  };
}
