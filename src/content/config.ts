import { defineCollection, z } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({
		schema: docsSchema({
			extend: z.object({
				order: z.number().optional(),
			}),
		}),
	}),
};

export const sidebar = [
	{
		label: 'Guides',
		items: [
			{ label: 'Example Guide', link: '/guides/example/' },
		],
	},
	{
		label: 'Reference',
		items: [
			{ label: 'Example Reference', link: '/reference/example/' },
		],
	},
	{
		label: 'Onboarding',
		items: [
			{ label: 'Your First Day', link: '/onboarding/first-day/' },
			{ label: 'Our Tools', link: '/onboarding/our-tools/' },
		],
	},
	{
		label: 'Standard Operating Procedures',
		items: [
			// SOP items will be added here in the future
		],
	},
];
