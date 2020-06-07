export interface Skill {
  name: string;
  stars: number;
}

export interface Domain {
  title: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  techs: string[];
}

export interface NormalizedDomains {
  byId: { [id: string]: Domain };
  allIds: string[];
}
export interface NormalizedProjects {
  byId: { [id: string]: Project };
  allIds: string[];
}

export interface NavLink {
  title: string;
  location: string;
}
