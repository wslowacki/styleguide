//to run the styleguide enter "gulp styleguide" in the terminal

var gulp = require('gulp');

var styleguide = require('sc5-styleguide');
var sass = require('gulp-sass');

var paths = {
    src: [
        //enter any vednro 
        'styleguide/styleguide_helper_elements.css',
        'src/*.scss',
        'src/**/*.scss'
    ],
    mainStyleFile: 'styleguide/styleguide-app.css',
    dest: 'styleguide'
};

gulp.task('styleguide:generate', function() {
  return gulp.src(paths.src)
    .pipe(styleguide.generate({
        title: 'Zuhlke Engineering Style Guide',
        server: true,
        rootPath: paths.dest,
        overviewPath: 'README.md'
      }))
    .pipe(gulp.dest(paths.dest));
});

gulp.task('styleguide:applystyles', function() {
  return gulp.src(paths.src)
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(styleguide.applyStyles())
    .pipe(gulp.dest(paths.dest));
});

//loads the styleguide at http://localhost:3000/
gulp.task('styleguide', ['styleguide:generate', 'styleguide:applystyles'], function(){
    gulp.watch(paths.src, ['styleguide:generate', 'styleguide:applystyles']);
});