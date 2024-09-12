module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    // flowbite.content() is not needed if you specify paths manually
  ],
  plugins: [require("flowbite/plugin")],
};
