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
							link: '/sop/bug-ticket-management/overview/',
						},
						{
							label: 'User question management',
							link: '/sop/user-question-management/overview/',
						},
						{
							label: 'Outage management',
							link: '/sop/outage-management/overview/',
						},
						{
							label: 'User request management',
							link: '/sop/user-request-management/overview/',
						},
						{
							label: 'Statuspage.io operating procedure',
							link: '/sop/statuspage-io/overview/',
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
