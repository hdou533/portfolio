import { GraphQLClient, gql } from "graphql-request";

const CONTENTFUL_API_SPACE_ID = process.env.NEXT_PUBLIC_CONTENTFUL_API_SPACE_ID;
const CONTENTFUL_API_ACCESS_TOKEN =
  process.env.NEXT_PUBLIC_CONTENTFUL_API_ACCESS_TOKEN;

console.log("SPACE ID:", CONTENTFUL_API_SPACE_ID); // Log the URL
console.log("API Token:", CONTENTFUL_API_ACCESS_TOKEN);

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

  const data = await client.request(query);
  return data?.projectCollection?.items;
};
