import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			favicon: './src/assets/Swell Wordmark Purple.svg',
			logo: {
				light: './src/assets/Swell Wordmark Purple.svg',
				dark: './src/assets/Swell Wordmark Yellow.svg',
				alt: 'Swell Wordmark Logo', // Optional: Add alt text for accessibility
				replacesTitle: true, // Optional: Set this to true if you want the logo to replace the site title
			  },
			title: 'My Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Onboarding',
					autogenerate: { directory: 'onboarding' },
				},
				{
					label: 'Tools',
					items: [
						{ label: 'Intercom', link: '/tools/intercom/' },
						{ label: 'Asana', link: '/tools/asana/' },
						{ label: 'Work Email (Google Suite)', link: '/tools/work-email/' },
						{ label: 'Slack', link: '/tools/slack/' },
						{ label: 'Status Page', link: '/tools/status-page/' },
						{ label: 'Datadog', link: '/tools/datadog/' },
					],
				},
				{
					label: 'Daily Tasks',
					items: [
						{ label: 'Overview', link: '/daily-tasks/overview/' },
						{ label: 'Intercom', link: '/daily-tasks/intercom/' },
						{ label: 'Asana', link: '/daily-tasks/asana/' },
						{ label: 'Work Email', link: '/daily-tasks/work-email/' },
						{ label: 'Slack', link: '/daily-tasks/slack/' },
						{ label: 'Research Guide', link: '/daily-tasks/research/' },
					],
				},
				{
					label: 'Standard Operating Procedures',
					items: [
						{
							label: 'Bug Ticket Management',
							link: '/sop/bug-ticket-management/overview/',
						},
						{
							label: 'User Question Management',
							link: '/sop/user-question-management/overview/',
						},
						{
							label: 'User Request Management',
							link: '/sop/user-request-management/overview/',
						},
					],
				},
			],
		}),
	],
});
