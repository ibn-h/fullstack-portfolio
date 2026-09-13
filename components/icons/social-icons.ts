import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconMail,
  type TablerIcon,
} from "@tabler/icons-react";

import type { SocialIconName } from "@/lib/site";

/** Maps the icon names stored in lib/site.ts to Tabler components. */
export const socialIcons: Record<SocialIconName, TablerIcon> = {
  "ti-brand-linkedin": IconBrandLinkedin,
  "ti-brand-github": IconBrandGithub,
  "ti-brand-x": IconBrandX,
  "ti-mail": IconMail,
};
