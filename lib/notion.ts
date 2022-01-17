import IProject from "../interfaces";
const { Client } = require('@notionhq/client');

const notionClient = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getProjects = async (): Promise<IProject[]> => {
  const db = await notionClient.databases.query({
    database_id: process.env.NOTION_DB_TOKEN,
    filter: {
      property: 'Status',
      select: {
        equals: 'Display',
      },
    },
  });

  let projects = db.results.map((project) => {
    const { Tags, en_Description, pt_Description, Name, Github, Link, Client, Feature } = project.properties;
    const { type } = project.cover;

    const tagnames = Tags.multi_select.map((tag: { name: any; }) => tag.name);

    let url = '';
    if (type === 'file') {
      url = project.cover.file.url;
    } else {
      url = project.cover.external.url;
    }

    return {
      title: Name.title[0].plain_text,
      en_Description: en_Description.rich_text[0].plain_text,
      pt_Description: pt_Description.rich_text[0].plain_text,
      tags: tagnames,
      thumbnail: url,
      github: Github.rich_text[0]?.plain_text ?? null,
      website: Link.rich_text[0]?.plain_text ?? null,
      client: Client.checkbox,
      feature: Feature.checkbox
    };
  });

  return projects;
};
