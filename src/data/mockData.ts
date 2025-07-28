import { Match, League, Video, Highlight } from '../types';

export const mockMatches: Match[] = [
  {
    id: '1',
    team1: 'Manchester United',
    team2: 'Liverpool',
    team1Logo: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=100',
    team2Logo: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=100',
    date: '2025-01-28',
    time: '15:00',
    status: 'live',
    venue: 'Old Trafford',
    league: 'Premier League',
    imageUrl: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=800',
    score: { team1: 2, team2: 1 }
  },
  {
    id: '2',
    team1: 'Chelsea',
    team2: 'Arsenal',
    team1Logo: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=100',
    team2Logo: 'https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?auto=compress&cs=tinysrgb&w=100',
    date: '2025-01-29',
    time: '18:30',
    status: 'upcoming',
    venue: 'Stamford Bridge',
    league: 'Premier League',
    imageUrl: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '3',
    team1: 'Manchester City',
    team2: 'Tottenham',
    team1Logo: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=100',
    team2Logo: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=100',
    date: '2025-01-26',
    time: '16:00',
    status: 'completed',
    venue: 'Etihad Stadium',
    league: 'Premier League',
    imageUrl: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=800',
    score: { team1: 3, team2: 0 }
  },
  {
    id: '4',
    team1: 'Real Madrid',
    team2: 'Barcelona',
    date: '2025-01-30',
    time: '20:00',
    status: 'upcoming',
    venue: 'Santiago Bernabéu',
    league: 'La Liga',
    imageUrl: 'https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '5',
    team1: 'Bayern Munich',
    team2: 'Borussia Dortmund',
    date: '2025-01-25',
    time: '17:30',
    status: 'completed',
    venue: 'Allianz Arena',
    league: 'Bundesliga',
    imageUrl: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=800',
    score: { team1: 1, team2: 2 }
  }
];

export const mockLeagues: League[] = [
  {
    id: '1',
    name: 'Premier League',
    season: '2024-25',
    logoUrl: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=200',
    matchCount: 380,
    description: 'The top tier of English football'
  },
  {
    id: '2',
    name: 'La Liga',
    season: '2024-25',
    logoUrl: 'https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?auto=compress&cs=tinysrgb&w=200',
    matchCount: 380,
    description: 'Spain\'s premier football league'
  },
  {
    id: '3',
    name: 'Bundesliga',
    season: '2024-25',
    logoUrl: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=200',
    matchCount: 306,
    description: 'Germany\'s top football division'
  },
  {
    id: '4',
    name: 'Champions League',
    season: '2024-25',
    logoUrl: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=200',
    matchCount: 125,
    description: 'Europe\'s elite club competition'
  }
];

export const mockVideos: Video[] = [
  {
    id: '1',
    title: 'Premier League Weekly Highlights',
    thumbnailUrl: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoId: 'dQw4w9WgXcQ',
    duration: '12:45',
    uploadDate: '2 days ago',
    views: 125000,
    category: 'Sport',
    description: 'Best moments from this week\'s Premier League matches'
  },
  {
    id: '2',
    title: 'Football Talk Podcast - Episode 15',
    thumbnailUrl: 'https://images.pexels.com/photos/7130560/pexels-photo-7130560.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoId: 'dQw4w9WgXcQ',
    duration: '45:30',
    uploadDate: '1 day ago',
    views: 45000,
    category: 'Podcast',
    description: 'Weekly discussion about football transfers and news'
  },
  {
    id: '3',
    title: 'Match of the Day - Full Show',
    thumbnailUrl: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoId: 'dQw4w9WgXcQ',
    duration: '58:20',
    uploadDate: '3 days ago',
    views: 89000,
    category: 'TV Show',
    description: 'Complete Match of the Day episode with analysis'
  },
  {
    id: '4',
    title: 'Behind the Scenes: Training Ground',
    thumbnailUrl: 'https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoId: 'dQw4w9WgXcQ',
    duration: '15:10',
    uploadDate: '1 week ago',
    views: 67000,
    category: 'Other',
    description: 'Exclusive access to professional training sessions'
  },
  {
    id: '5',
    title: 'Champions League Final Preview',
    thumbnailUrl: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoId: 'dQw4w9WgXcQ',
    duration: '22:15',
    uploadDate: '5 days ago',
    views: 156000,
    category: 'Sport',
    description: 'Analysis and predictions for the upcoming final'
  }
];

export const mockHighlights: Highlight[] = [
  {
    id: '1',
    title: 'Best Goals of the Week',
    thumbnailUrl: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoId: 'dQw4w9WgXcQ',
    duration: '8:45',
    uploadDate: '1 day ago',
    views: 234000,
    sport: 'Football',
    featured: true,
    description: 'Spectacular goals from around the world'
  },
  {
    id: '2',
    title: 'Amazing Basketball Dunks',
    thumbnailUrl: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoId: 'dQw4w9WgXcQ',
    duration: '6:30',
    uploadDate: '2 days ago',
    views: 145000,
    sport: 'Basketball',
    featured: false,
    description: 'Incredible dunks from NBA games'
  },
  {
    id: '3',
    title: 'Tennis Match Point Compilation',
    thumbnailUrl: 'https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoId: 'dQw4w9WgXcQ',
    duration: '10:15',
    uploadDate: '3 days ago',
    views: 89000,
    sport: 'Tennis',
    featured: true,
    description: 'Thrilling match points from recent tournaments'
  },
  {
    id: '4',
    title: 'Baseball Home Run Derby',
    thumbnailUrl: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoId: 'dQw4w9WgXcQ',
    duration: '12:00',
    uploadDate: '4 days ago',
    views: 67000,
    sport: 'Baseball',
    featured: false,
    description: 'Best home runs from the derby competition'
  },
  {
    id: '5',
    title: 'Hockey Saves of the Season',
    thumbnailUrl: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoId: 'dQw4w9WgXcQ',
    duration: '7:20',
    uploadDate: '1 week ago',
    views: 112000,
    sport: 'Hockey',
    featured: false,
    description: 'Incredible goalkeeper saves from NHL'
  }
];