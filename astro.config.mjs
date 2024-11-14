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
					label: 'Daily Tasks',
					items: [
						{ label: 'Normal Operation', link: '/daily-tasks/overview/' },
						{ label: 'Special Projects', link: '/daily-tasks/special-projects/' },
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
