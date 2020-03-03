
export interface IContrastPoints {
  title: string;
  description?: string;
  fact?: {
    title: string;
    description: string;
    color: 'red' | 'green';
    icon: string;
  }[];
}
