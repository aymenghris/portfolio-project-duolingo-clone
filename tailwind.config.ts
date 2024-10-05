import type { Config } from "tailwindcss"

const config: Config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
				/* 
					Light XX0
					Dark  XX5

					Background X00
					Hover X10
					Border X20

					Buttons 1XX
				*/
                success: {
                    100: "#58cc02",
                    110: "#61e002",
                    120: "#58a700",
                },

                danger: {
                    100: "#ff4b4b",
                    110: "#ff5251",
                    120: "#ea2b2b",
                },
            },
        },
    },
    plugins: [],
}
export default config
