import { StaticImageData } from "next/image";

// next/head meta types
export type MetaType = {
  title: string;
  description: string;
  keywords: string;
  robots: string;
  favicon: Array<FaviconType>;
};

export type FaviconType = {
  rel: string;
  sizes?: string;
  type?: string;
  href: string;
};

// repository types
export type RepositoryType = {
  id: number;
  nameWithOwner: string;
  description: string | null;
  url: string;
  archived: boolean;
  language: RepositoryLanguageType;
  license: RepositoryLicenseType;
  stars: string;
  forks: number;
};

export type RepositoryLanguageType = {
  name: string;
  color: string;
};

export type RepositoryLicenseType = {
  key: string;
  name: string;
  spdx_id: string;
  url: string;
  node_id: string;
};

// skill types
export type SkillsType = {
  [key: string]: Array<SkillType>;
};

export type SkillType = {
  id: number;
  name: string;
  image: string;
};

// education types
export type EducationType = {
  id: number;
  title: string;
  duration: string;
  description: string;
  type: string;
  file?: {
    title: string;
    url: string;
  };
};

// experience types
export type ExperienceType = {
  id: number;
  title: string;
  slug: string;
  company: string;
  duration: string;
  description: string;
  logo?: string;
  color?: {
    text: string;
    background: string;
  };
  languages?: LanguageType[];
};

export type LanguageType = {
  id: number;
  name: string;
};
