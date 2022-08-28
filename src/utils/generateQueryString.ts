import queryString from "query-string";

type generateQueryStringProps = Record<string, string | number>;

export const generateQueryString = (queries: generateQueryStringProps) => {
  const string = queryString.stringify(queries, {
    skipEmptyString: true,
  });
  const url = "https://api.scorebooklive.com/v2/games?" + string;
  return url;
};
