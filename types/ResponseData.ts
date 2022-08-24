export interface ResponseData {
  data: Match[];
  meta: MetaData[];
}

export interface Match {
  clock: string | null;
  date: string;
  game_teams: GameTeam[];
  game_type_id: number;
  gender_id: number;
  hashtag: string | null;
  id: number;
  intermission: boolean;
  level_id: number;
  location: string;
  neutral: boolean;
  period: number;
  periods: number;
  results_only: boolean;
  round_id: number | null;
  scoring_type: string | null;
  secondary_status_id: number | null;
  slug: string;
  sport_id: number;
  status_id: number;
  title: string | null;
  user: string | null;
  uuid: string;
}

export interface GameTeam {
  cheers: number;
  created_at: string;
  forfeit: boolean;
  home: boolean;
  id: number;
  linescore: number | null;
  official: boolean;
  score: number;
  schootout_score: number | null;
  team: School;
}

export interface MetaData {
  current_page: number;
  next_page: number | null;
  prev_page: number | null;
  total_pages: number;
  total_count: number;
}

export interface School {
  id: number;
  uuid: string;
  slug: string;
  sport_id: number;
  primary_color: string;
  secondary_color: string;
  address: string;
  gender_id: number;
  level_id: number;
  team_type_id: number;
  school_id: number;
  name: string;
  mascot: string;
  abbrev: string;
  image: string;
  cover_image: string | null;
  city: string;
  state: string;
  instagram: string | null;
  club_house: string | null;
  owned: number;
  hashtag: string | null;
  url: string | null;
  twitter: null;
  link: {
    fanapp: string;
    webapp: string;
  };
}
