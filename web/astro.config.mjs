// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import react from '@astrojs/react';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: 'AH-PWA-H25',
        social: {
            github: 'https://github.com/ceduni/cah-pwa',
            discord: 'https://discord.gg/eNqwjeDhP6',
        },
        favicon: '/favicon.ico',
        lastUpdated: true,
        pagefind: false,
        sidebar: [
            {
                label: 'Phase 1: App. web avec cadriciel',
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: 'Semaine 1', slug: 'notes/week1' },
                    { label: 'Semaine 2', slug: 'notes/week2' },
                    { label: 'Semaine 3', slug: 'notes/week3' },
                    // { label: 'Semaine 4', slug: 'notes/week4' },
                ],
            },
            // {
            //     label: 'Phase 2: Transformation en PWA',
            //     items: [
            //         // Each item here is one entry in the navigation menu.
            //         { label: 'Semaine 5', slug: 'notes/week5' },
            //         { label: 'Semaine 6', slug: 'notes/week6' },
            //         { label: 'Semaine 7', slug: 'notes/week7' },
            //         { label: 'Semaine 8', slug: 'notes/week8' },
            //     ],
            // },
            // {
            //     label: 'Phase 3: Optimisation PWA',
            //     items: [
            //         // Each item here is one entry in the navigation menu.
            //         { label: 'Semaine 9', slug: 'notes/week9' },
            //         { label: 'Semaine 10', slug: 'notes/week10' },
            //         { label: 'Semaine 11', slug: 'notes/week11' },
            //         { label: 'Semaine 12', slug: 'notes/week12' },
            //     ],
            // },
            
            {
            	label: 'Exercices',
            	autogenerate: { directory: 'practice' },
            },
            {
            	label: 'Reference',
            	autogenerate: { directory: 'reference' },
            },
        ],
        locales: {
            root: {
                label: 'Français',
                lang: 'fr'
            },
        },
    }), react()],

    adapter: netlify(),
});