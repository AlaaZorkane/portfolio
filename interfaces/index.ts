export interface Skill {
  name: string;
  stars: number;
}

export interface Domain {
  title: string;
  skills: Skill[];
}
