import { GraphQLClient } from "graphql-request";
import { accountQuery } from "../repository/accountRepository";
import {
  allVideosQuery,
  videoBySlugQuery,
} from "../repository/videoRepository";

const baseRequest = async (query, variables = {}) => {
  const { ENDPOINT, GRAPH_CMS_TOKEN } = process.env;
  const base = new GraphQLClient(ENDPOINT, {
    headers: {
      Authorizaton: GRAPH_CMS_TOKEN,
    },
  });

  return await base.request(query, variables);
};

const fetchAccount = async (variables) =>
  await baseRequest(accountQuery, variables);

const fetchVideos = async (variables) =>
  await baseRequest(allVideosQuery, variables);

const fetchVideoBySlug = async (variables) =>
  await baseRequest(videoBySlugQuery, variables);

export { fetchAccount, fetchVideos, fetchVideoBySlug };
