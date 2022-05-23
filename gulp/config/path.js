// Получаем имя папки проекта
import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = "./dist";
const srcFolder = "./src";

export const path = {
  build: {
    html: `${buildFolder}/`,
    css: `${buildFolder}/css/`,
    js: `${buildFolder}/js/`,
    images: `${buildFolder}/assets/images/`,
    svgicons: `${buildFolder}/assets/`,
    favicon: `${buildFolder}/assets/favicon`,
    fonts: `${buildFolder}/assets/fonts/`,
  },
  src: {
    html: `${srcFolder}/*.html`,
    scss: `${srcFolder}/scss/style.scss`,
    js: `${srcFolder}/js/app.js`,
    images: `${srcFolder}/assets/images/**/*`,
    svgicons: `${srcFolder}/assets/svgicons/*.svg`,
    favicon: `${srcFolder}/assets/favicon/*`,
    fonts: `${srcFolder}/assets/fonts/**/*`,
  },
  watch: {
    html: `${srcFolder}/**/*.html`,
    scss: `${srcFolder}/scss/**/*.scss`,
    js: `${srcFolder}/js/**/*.js`,
    images: `${srcFolder}/assets/images/**/*`,
  },
  clean: [`${buildFolder}/*.*`, `${buildFolder}/css/*`, `${buildFolder}/js/*`],
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: "",
};
