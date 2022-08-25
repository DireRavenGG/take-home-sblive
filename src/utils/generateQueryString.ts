import queryString from "query-string";

type generateQueryStringProps = Record<string, string>;

export const generateQueryString = (queries: generateQueryStringProps) => {
  const string = queryString.stringify(queries, {
    skipEmptyString: true,
  });
  const url = "/v2/games?" + string;
  return url;
};
