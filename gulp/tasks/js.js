import webpackStream from "webpack-stream";

export const js = () => {
  return app.gulp
    .src(app.path.src.js)
    .pipe(
      webpackStream({
        mode: "production",
        devtool: "source-map",
        output: { filename: "app.min.js" },
      })
    )
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browserSync.stream());
};
