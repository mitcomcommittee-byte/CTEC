export type ActiveTab = 'home' | 'about' | 'accomplishments' | 'financial' | 'contact';

export interface ReportItem {
  id: string;
  type: 'accomplishment' | 'financial';
  title: string;
  academicYear: string;
  term?: string;
  fileName: string;
  fileUrl: string;
  fileSize?: string;
  datePublished: string;
  status: 'Verified' | 'Official';
  description: string;
  highlights?: string[];
  signatories?: string[];
  isCustom?: boolean;
}

export interface OfficerItem {
  name: string;
  position: string;
  course?: string;
  roleType: 'executive' | 'adviser' | 'committee-head' | 'committee-member';
  committee?: string;
}
