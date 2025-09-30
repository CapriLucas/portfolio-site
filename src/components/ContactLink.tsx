'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface ContactLinkProps {
  children: React.ReactNode;
  className?: string;
}

export default function ContactLink({ children, className }: ContactLinkProps) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    // If we're not on home page, navigate to home first
    if (window.location.pathname !== '/') {
      router.push('/#contact');
      return;
    }

    // If we're already on home, scroll to contact section
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Handle hash navigation when component mounts (for direct links)
  useEffect(() => {
    if (window.location.hash === '#contact') {
      setTimeout(() => {
        const contactSection = document.getElementById('contact-section');
        if (contactSection) {
          contactSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  }, []);

  return (
    <a
      href="/#contact"
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
}