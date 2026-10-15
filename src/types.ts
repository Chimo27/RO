export type ViewMode = 'accueil' | 'modules-s5' | 'module-detail' | 'conseils-et-ressources';

export interface ModulePillar {
  number: string;
  title: string;
  description: string;
  theorem?: string;
  formula?: string;
  iconName?: string;
}

export interface Pitfall {
  title: string;
  description: string;
}

export interface IndustryUseCase {
  icon: string;
  title: string;
  description: string;
}

export interface StudentReview {
  id: string;
  author: string;
  initials: string;
  promo: string;
  specialty: string;
  tag: string;
  tagType: 'primary' | 'secondary' | 'neutral';
  quote: string;
  upvotes: number;
}

export interface ModuleResource {
  id: string;
  title: string;
  category: 'syllabus' | 'code' | 'annales' | 'fiche';
  tagLabel: string;
  tagStyle: string;
  description: string;
  details: string;
  format: string;
  size: string;
  icon: string;
  previewContent?: {
    pages?: number;
    extractTitle?: string;
    extractBody?: string[];
  };
}

export interface CourseModule {
  id: string;
  code: string;
  title: string;
  category: 'ia' | 'stats' | 'bigdata' | 'optimisation' | 'seminar';
  categoryLabel: string;
  ects: number;
  hours: string;
  isMandatory: boolean;
  statusTag: string;
  verified: boolean;
  keywords: string;
  shortDescription: string;
  fullDescription: string;
  skills: string[];
  evaluation: {
    coef: number;
    examPct: number;
    ccPct: number;
  };
  prerequisites: string[];
  prereqBadges: string[];
  theoreticalQuote: {
    axis: string;
    headline: string;
    description: string;
    formula: string;
  };
  whatItStudies: string;
  learningObjectives: string[];
  pillars: ModulePillar[];
  practicalExpectations: {
    description: string;
    badges: string[];
  };
  studyMethodology: {
    mainQuote: string;
    tpAdvice: string;
  };
  pitfalls: Pitfall[];
  professionalUtility: {
    intro: string;
    useCases: IndustryUseCase[];
    deontologicalNote: string;
  };
  studentReviews: StudentReview[];
  resources: ModuleResource[];
}

export interface AdviceGuide {
  id: string;
  title: string;
  category: 'method' | 'exam' | 'sheet';
  categoryLabel: string;
  categoryPillBg: string;
  categoryPillText: string;
  readTime: string;
  summary: string;
  badge: {
    type: 'formula' | 'rule' | 'planning' | 'feynman' | 'team';
    label: string;
    value: string;
  };
  fullArticle: {
    introduction: string;
    sections: {
      heading: string;
      content: string;
      bulletPoints?: string[];
    }[];
    actionSteps: string[];
  };
}

export interface DownloadableResource {
  id: string;
  title: string;
  category: 'exam' | 'syllabus' | 'sheet';
  badgeLabel: string;
  badgeType: 'verified' | 'official' | 'student';
  format: string;
  size: string;
  typeDesc: string;
  extraMeta: string;
  icon: string;
  iconBg: string;
  iconText: string;
  moduleCode?: string;
  previewText?: string;
}
