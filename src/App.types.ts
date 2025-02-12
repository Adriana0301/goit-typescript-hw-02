export interface Image {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular?: string;
  };
  tags?: string[];
  user?: {
    name: string;
  };
  likes?: number;
  description?: string;
}
