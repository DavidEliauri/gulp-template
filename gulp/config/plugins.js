import replace from "gulp-replace"; // Поиск и замена
import newer from "gulp-newer"; // Передавать только новые файлы
import browserSync from "browser-sync"; // Локальный сервер
import gulpRename from "gulp-rename"; // Переименование файлов

// Эскпортируем плагины
export const plugins = {
  replace: replace,
  newer: newer,
  browserSync: browserSync,
  rename: gulpRename,
};
