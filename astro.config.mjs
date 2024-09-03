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
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Onboarding',
					autogenerate: { directory: 'onboarding' },
				},
				{
					label: 'Standard Operating Procedures',
					items: [
						{
							label: 'Bug Ticket Management',
							items: [
								{ label: 'Overview', link: '/sop/bug-ticket-management/overview/' },
								{ label: 'Handling Process', link: '/sop/bug-ticket-management/handling-process/' },
								{ label: 'Manual Follow Up', link: '/sop/bug-ticket-management/manual-follow-up/' },
								{ label: 'Project Fields', link: '/sop/bug-ticket-management/project-fields/' },
							],
						},
						{
							label: 'User Question Management',
							items: [
								{ label: 'Overview', link: '/sop/user-question-management/overview/' },
								{ label: 'Submission Process', link: '/sop/user-question-management/submission-process/' },
								{ label: 'Handling Process', link: '/sop/user-question-management/handling-process/' },
								{ label: 'Asana Project Management', link: '/sop/user-question-management/asana-project-management/' },
							],
						},
						{
							label: 'User Request Management',
							items: [
								{ label: 'Overview', link: '/sop/user-request-management/overview/' },
								{ label: 'Submission Process', link: '/sop/user-request-management/submission-process/' },
								{ label: 'Handling Process', link: '/sop/user-request-management/handling-process/' },
								{ label: 'Asana Project Management', link: '/sop/user-request-management/asana-project-management/' },
							],
						},
					],
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
					label: 'Integrations',
					items: [
						{ label: 'Overview', link: '/integrations/overview/' },
						{ label: 'Asana Integration', link: '/integrations/asana/' },
						{ label: 'Slack Integration', link: '/integrations/slack/' },
						{ label: 'Google Suite Integration', link: '/integrations/google-suite/' },
						{ label: 'Datadog Integration', link: '/integrations/datadog/' },
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
					],
				},
			],
		}),
	],
});
