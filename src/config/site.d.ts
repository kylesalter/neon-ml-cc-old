export interface SrConfigProps {
  origin: string;
  distance: string;
  duration: number;
  delay: number;
  rotate: { x: number; y: number; z: number };
  opacity: number;
  scale: number;
  easing: string;
  mobile: boolean;
  reset: boolean;
  useDelay: string;
  viewFactor: number;
  viewOffset: { top: number; right: number; bottom: number; left: number };
}

export interface LinkProps {
  name: string;
  url: string;
}

export interface SiteProps {
  colorScheme: string;
  siteTitle?: string;
  siteDescription?: string;
  siteKeywords?: string;

  siteUrl?: string;
  siteLanguage?: string;
  googleVerification?: string;
  name?: string;
  location?: string;
  email?: string;
  socialMedia?: LinkProps[];
  navLinks?: LinkProps[];

  twitterHandle?: string;
  googleAnalyticsID?: string;
  navHeight?: number;

  themeFgColor?: string;
  themeBgColor?: string;
  srConfig?(delay: number): SrConfigProps;
  fonts: WebFont.Config;
}
