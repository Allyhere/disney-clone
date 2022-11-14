import { gql } from "graphql-request";

const allVideosQuery = gql`
  query {
    videos {
      createdAt
      id
      title
      description
      seen
      slug
      tags
      thumbnail {
        url
      }
      mp4 {
        url
      }
    }
  }
`;

const videoBySlugQuery = gql`
  query ($pageSlug: String!) {
    video(where: { slug: $pageSlug }) {
      createdAt
      id
      title
      description
      seen
      slug
      tags
      thumbnail {
        url
      }
      mp4 {
        url
      }
    }
  }
`;

export { allVideosQuery, videoBySlugQuery };
