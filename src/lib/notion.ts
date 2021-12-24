import IProject from "../shared/NotionAPI";

const { Client } = require('@notionhq/client');

// Initializing a client
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

	let projects = db.results.map((project: { properties: { Tags: any; Description: any; Name: any; Github: any; Link: any; Client: any; }; cover: { file?: any; external?: any; type?: any; }; }) => {
		const { Tags, Description, Name, Github, Link, Client } = project.properties;
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
			description: Description.rich_text[0].plain_text,
			tags: tagnames,
			thumbnail: url,
			github: Github.rich_text[0]?.plain_text ?? "",
			website: Link.rich_text[0]?.plain_text ?? "",
			client: Client.checkbox
		};
	});

	return projects;
};

export const getAbout = async (): Promise<string> => {
	const res = await notionClient.blocks.retrieve({
		block_id: process.env.NOTION_ABOUT_TOKEN,
	});
	return res.paragraph.text[0].plain_text;
};
