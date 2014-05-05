var	gulp = require('gulp');
var concat = require('gulp-concat');
var cssmin = require('gulp-minify-css');
var uglify = require('gulp-uglify');

//
// Configuration
//

var paths = {
    css: {
        files: ['src/css/*.css'],
        root: 'src/css'
    },
    js: {
    	files: [
    		'bower_components/jquery/dist/jquery.js'
    	]
    },
    dest: './public/'
};

//
// Task definitions
//

gulp.task('css', function() {
    return gulp.src(paths.css.files)
        .pipe(cssmin({root:paths.css.root}))
        .pipe(gulp.dest(paths.dest + 'css'));
});

gulp.task('js', function() {
    return gulp.src(paths.js.files)
        .pipe(concat('site.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.dest + 'js'));
});

//
// Default task: Processes all files
//

gulp.task('default', ['css', 'js'], function(){ });

//
// Watch task: Watches for changes in files that may be edited
//

gulp.task('watch', function () {
  gulp.watch(['src/css/*'], ['css']);
});
