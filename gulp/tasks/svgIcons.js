import svgSprite from "gulp-svg-sprite";

export const svgIcons = () => {
  return app.gulp
    .src(`${app.path.src.svgicons}`)
    .pipe(
      svgSprite({
        mode: {
          stack: {
            sprite: `../icons/icons.svg`,
            example: true,
          },
        },
      })
    )
    .pipe(app.gulp.dest(`${app.path.build.svgicons}`));
};
