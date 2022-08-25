import queryString from "query-string";

type generateQueryStringProps = {
  date: string;
  state: string;
  gender: string;
  status: string;
  sport: string;
};

export const generateQueryString = ({
  date,
  state,
  gender,
  status,
  sport,
}: generateQueryStringProps) => {
  const string = queryString.stringify(
    { status_id: status, date, state, gender_id: gender, sport_id: sport },
    {
      skipEmptyString: true,
    }
  );
  const url = "/v2/games?" + string;
  return url;
};
