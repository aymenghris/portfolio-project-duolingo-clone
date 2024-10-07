import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                success: {
                    100: '#D7FFB8',
                    110: '#61e002',
                    120: '#58cc02',
                    130: '#61B800',
                    140: '#58a700',
                },

                warning: {
                    100: '##FFD333',
                    110: '##FFC800',
                },

                danger: {
                    100: '#FFDFE0',
                    110: '#FF4B4B',
                    120: '#EA2B2B',
                },
            },
        },
    },
    plugins: [],
}
export default config
