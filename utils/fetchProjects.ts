import { GraphQLClient, gql } from "graphql-request";

const CONTENTFUL_API_SPACE_ID = process.env.NEXT_PUBLIC_CONTENTFUL_API_SPACE_ID;
const CONTENTFUL_API_ACCESS_TOKEN =
  process.env.NEXT_PUBLIC_CONTENTFUL_API_ACCESS_TOKEN;

type ProjectCollectionResponse = {
  projectCollection: {
    items: Array<{
      _id: string;
      title: string;
      description: string;
      tags: string[];
      demoUrl: string;
      codeUrl: string;
      cover: {
        fileName: string;
        url: string;
      };
    }>;
  };
};
export const fetchProjects = async () => {
  const client = new GraphQLClient(
    `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_API_SPACE_ID}`,
    {
      headers: {
        Authorization: `Bearer ${CONTENTFUL_API_ACCESS_TOKEN}`,
      },
    }
  );

  const query = gql`
    query {
      projectCollection {
        items {
          _id
          title
          description
          tags
          demoUrl
          codeUrl
          cover {
            fileName
            url
          }
        }
      }
    }
  `;

  const data: ProjectCollectionResponse = await client.request(query);
  return data?.projectCollection?.items;
};
