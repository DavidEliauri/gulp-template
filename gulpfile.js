// Основной модуль
import gulp from "gulp";
// Импорт путей
import { path } from "./gulp/config/path.js";
// Импорт плагинов
import { plugins } from "./gulp/config/plugins.js";

// Передаем значения в глобальную переменную
global.app = {
  gulp: gulp,
  path: path,
  plugins: plugins,
};

// Импорт задач
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { images } from "./gulp/tasks/images.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { fonts } from "./gulp/tasks/fonts.js";
import { svgIcons } from "./gulp/tasks/svgIcons.js";
import { favicon } from "./gulp/tasks/favicon.js";

// Наблюдатель за изменениями в файлах
function watcher() {
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.images, images);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
}

const mainTasks = gulp.parallel(
  html,
  images,
  scss,
  js,
  fonts,
  svgIcons,
  favicon
);

// Построение сценариев выполнения задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

// Выполнение сценария по умолчанию
gulp.task("default", dev);
