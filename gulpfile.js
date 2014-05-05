var	gulp = require('gulp');
var compass = require('gulp-compass');
var cssmin = require('gulp-minify-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

//
// Configuration
//

var paths = {
    sass: {
		root: 'src/sass',
        files: ['src/sass/*.scss']
    },
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

gulp.task('compass', function() {
    gulp.src(paths.sass.files)
        .pipe(compass({
            css: paths.dest + 'temp',
            sass: paths.sass.root,
            image: paths.dest + 'images'
        }))
        .pipe(cssmin())
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

gulp.task('default', ['compass', 'js'], function(){ });

//
// Watch task: Watches for changes in files that may be edited
//

gulp.task('watch', function () {
  gulp.watch(['src/sass/*'], ['compass']);
});
