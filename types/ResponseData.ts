export interface ResponseData {
  data: Match[];
  meta: MetaData[];
}

export interface Match {
  clock: string | null;
  date: string;
  game_teams: Team[];
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

export interface Team {
  cheers: number;
  created_at: string;
  forfeit: boolean;
  home: boolean;
  id: number;
  linescore: number | null;
  official: boolean;
  score: number;
  schootout_score: number | null;
}

export interface MetaData {
  current_page: number;
  next_page: number | null;
  prev_page: number | null;
  total_pages: number;
  total_count: number;
}
