export interface Match {
  id: string;
  team1: string;
  team2: string;
  team1Logo?: string;
  team2Logo?: string;
  date: string;
  time: string;
  status: 'live' | 'upcoming' | 'completed';
  venue?: string;
  league: string;
  imageUrl?: string;
  score?: {
    team1: number;
    team2: number;
  };
}

export interface League {
  id: string;
  name: string;
  season: string;
  logoUrl?: string;
  matchCount: number;
  description?: string;
}

export interface Video {
  id: string;
  title: string;
  thumbnailUrl: string;
  videoId: string;
  duration: string;
  uploadDate: string;
  views: number;
  category: 'Sport' | 'Podcast' | 'TV Show' | 'Other';
  description?: string;
}

export interface Highlight {
  id: string;
  title: string;
  thumbnailUrl: string;
  videoId: string;
  duration: string;
  uploadDate: string;
  views: number;
  sport: string;
  featured: boolean;
  description?: string;
}