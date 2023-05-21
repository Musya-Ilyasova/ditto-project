import pkg from 'gulp';
import { pug, sass, scriptsLibs, scripts, img, imgUpload, svg, copy, clear, clearCache } from './gulp/config/allTasks.js'
import browserSync from 'browser-sync';
import ghPages from 'gulp-gh-pages';

const { src, dest, watch, series, parallel } = pkg;

const reload = browserSync.reload;

global.app = {
  isBuild: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build'),
  src, dest, watch, series, parallel, reload,
};


/////////////////////////////////////////////////
//--------------------WATCH--------------------//
/////////////////////////////////////////////////

export const observe = () => {
  watch("src/pug/**/*.pug", series(pug));
  watch(["src/sass/**/*.scss", "src/pug/**/*.scss"], series(sass));
  watch("src/js/**/*.js", series(scripts));
  watch("src/img/**/*", series(img));
  watch("src/upload/**/*", series(imgUpload));
  watch("src/svg/**/*.svg", series(svg));
}

/////////////////////////////////////////////////
//--------------------SERVE--------------------//
/////////////////////////////////////////////////

export const serve = () => {
  browserSync.init({
    server: {
      baseDir: "./dist",
    },
  });
}

/////////////////////////////////////////////////
//-------------------DEPLOY-------------------//
/////////////////////////////////////////////////

export const deploy = () => {
  return app.src('./dist/**/*')
    .pipe(ghPages());
}

/////////////////////////////////////////////////
//-------------------DEFAULT-------------------//
/////////////////////////////////////////////////

export default series(
  parallel(copy, img, imgUpload, svg),
  parallel(pug, scriptsLibs, scripts, sass),
  parallel(observe, serve)
);

/////////////////////////////////////////////////
//--------------------BUILD--------------------//
/////////////////////////////////////////////////

export const build = series(
  clear, clearCache,
  parallel(copy, img, imgUpload, svg),
  parallel(pug, scriptsLibs, scripts, sass),
  parallel(deploy)
);
