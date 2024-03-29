export interface StudentModel {
  id: number;
  name: string;
  username?: string;
  problems: number;
  solves: number;
  location?: {
    country?: string;
    city?: string;
  };
  avatar?: string;
  specialization: string;
  group: string;
}
