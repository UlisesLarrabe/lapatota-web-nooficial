/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				"navbar": "#0D0D7F",
				"design":"#35a4d0",
				"digital":"#dcb3ec"
			},
			backgroundImage: {
        'header-gradient': 'linear-gradient(rgba(53, 164, 208, 0.9), rgba(53, 164, 208, 0.5))',
				"hero-gradient":"linear-gradient(#5F6CB3, #738EAB, #709DB8, #E49EA9, #FA9243)",
				"stars":"url('/stars.webp')",
				"city":"url('/city.webp')",
      },
		},
	},
	plugins: [
    require('daisyui'),
		animations
  ],
	daisyui:{
		themes: ["light"],
	}
}
