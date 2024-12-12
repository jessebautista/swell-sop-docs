import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import vercel from '@astrojs/vercel/static';

export default defineConfig({
	output: 'static',
	adapter: vercel(),
	integrations: [
		starlight({
			pagination: false,
			tableOfContents: false,
			favicon: './src/assets/Swell Wordmark Purple.svg',
			logo: {
				light: './src/assets/Swell Wordmark Purple.svg',
				dark: './src/assets/Swell Wordmark Yellow.svg',
				alt: 'Swell Wordmark Logo',
				replacesTitle: true,
			},
			title: 'My Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Home',
					link: '/home/home/'
				},
				{
					label: 'Onboarding',
					autogenerate: { directory: 'onboarding' },
				},
				{
					label: 'Operating Procedure',
					items: [
						{
							label: 'Bug ticket management',
							collapsed: true,
							items: [
							  'sop/bug-ticket-management/overview',
							  'sop/bug-ticket-management/handling-process',
							  'sop/bug-ticket-management/manual-follow-up',
							  'sop/bug-ticket-management/project-fields'
							],
						  },
						{
							label: 'User question management',
							collapsed: true,
							items: [
								'sop/user-question-management/overview',
								'sop/user-question-management/handling-process',
								'sop/user-question-management/asana-project-management',
							  ],
						},
						{
							label: 'Outage management',
							collapsed: true,
							items: [
								'sop/outage-management/overview',
							  ],
						},
						{
							label: 'User request management',
							collapsed: true,
							items: [
								'sop/user-request-management/overview',
								'sop/user-request-management/handling-process',
								'sop/user-request-management/submission-process',
								'sop/user-request-management/asana-project-management',
							  ],
						},
						{
							label: 'Statuspage.io operating procedure',
							collapsed: true,
							items: [
								'sop/statuspage-io/overview',
							  ],
						},
					],
				},
				{
					label: 'Daily tasks',
					items: [
						{ label: 'Normal operation', link: '/daily-tasks/overview/' },
						{ label: 'Side tasks', link: '/daily-tasks/special-projects/' },
					],
				},
			],
		}),
	],
});
