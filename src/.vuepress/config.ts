import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "Utopia",
  description: "stay hungry, stay foolish",
  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
