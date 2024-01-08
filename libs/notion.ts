import "server-only";

import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

export const notion = new Client({
  auth: process.env.NOTION_KEY,
});

export const fetchAllPage = async () => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    // filter: {
    //   property: "Status",
    //   select: {
    //     equals: "Published",
    //   },
    // },
  });
  return response.results;
};

export const fetchPageBySlug = async (slug: string) => {
  try {
    const response = await notion.pages.retrieve({ page_id: slug });
    if (!response?.properties?.title) {
      console.warn("Page does not have a title:", response);
      return null;
    }
    return response;
  } catch (error) {
    console.error("Error fetching Notion page by slug:", error);
    return null; // or throw an error, depending on your requirements
  }
};

export const fetchPageBlocks = async (pageId: string) => {
  if (!pageId || !isValidUUID(pageId)) {
    console.error("Invalid or undefined pageId:", pageId);
    return null; // or throw an error, depending on your requirements
  }

  const n2m = new NotionToMarkdown({ notionClient: notion });
  const mdblocks = await n2m.pageToMarkdown(pageId);
  const mdString = n2m.toMarkdownString(mdblocks);

  return mdString.parent;
};

function isValidUUID(uuid: string): boolean {
  return /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89aAbB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/.test(
    uuid
  );
}
