export const favicon = () => {
  return app.gulp
    .src(app.path.src.favicon)
    .pipe(app.plugins.newer(app.path.build.favicon))
    .pipe(app.gulp.dest(app.path.build.favicon));
};
