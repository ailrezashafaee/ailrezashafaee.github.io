export type Role = {
  years: string;
  title: string;
  org: string;
  note: string;
};

export type Project = {
  name: string;
  tag: string;
  blurb: string;
  chips: string[];
  href?: string;
  hrefLabel?: string;
};

export type StackEntry = {
  label: string;
  items: string;
};
