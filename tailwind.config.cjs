/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
			fontSize: {
				base: '1.3rem'
			},
			fontFamily: {
				sans:['DM Sans']
			}
		},
  },
  plugins: [],
}
