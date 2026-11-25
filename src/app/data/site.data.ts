export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

/** Navigation shared by the header and the footer. */
export const NAV_LINKS: readonly NavLink[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre Mim', href: '#sobre' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Formação', href: '#formacao' },
  { label: 'Contato', href: '#contato' }
];

/** Social profiles already configured in the contact section. */
export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jose-jimenez-04a0aa22a/',
    icon: 'fab fa-linkedin-in'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Woltryn',
    icon: 'fab fa-github'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/josstry_n/?hl=es',
    icon: 'fab fa-instagram'
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=100000120216975',
    icon: 'fab fa-facebook-f'
  }
];

export const CONTACT_EMAIL = 'j.jimenez.dev7@gmail.com';
export const CONTACT_PHONE_DISPLAY = '+55 41 99540-1983';
export const CONTACT_PHONE_HREF = 'tel:+5541995401983';

export const WHATSAPP_NUMBER = '5541995401983';
export const WHATSAPP_MESSAGE = 'Olá, gostaria de falar com você';
export const WHATSAPP_URL =
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const CV_URL =
  'https://drive.google.com/file/d/1b_lwmM3TSbXGY-uJ85qiMOZuH9YX9FzP/view?usp=sharing';
