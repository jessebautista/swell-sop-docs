import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Onboarding',
					items: [
						{ label: 'Your First Day', link: 'onboarding/first-day' },
						{ label: 'Our Tools', link: 'onboarding/our-tools' },
					],
				},
				{
					label: 'Standard Operating Procedures',
					items: [
						{
							label: 'Bug Ticket Management',
							items: [
								{ label: 'Overview', link: 'sop/bug-ticket-management/overview' },
								{ label: 'Project Fields', link: 'sop/bug-ticket-management/project-fields' },
								{ label: 'Handling Process', link: 'sop/bug-ticket-management/handling-process' },
								{ label: 'Manual Follow-Up', link: 'sop/bug-ticket-management/manual-follow-up' },
							],
						},
					],
				},
			],
		}),
	],
});
