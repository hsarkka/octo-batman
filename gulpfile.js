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
    js: {
    	files: [
            'bower_components/jquery/dist/jquery.js',
            'bower_components/modernizr/modernizr.js',
            'bower_components/fastclick/lib/fastclick.js',
            'bower_components/foundation/js/foundation/foundation.js',
            'bower_components/foundation/js/foundation/foundation.topbar.js'
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
            image: paths.dest + 'images',
            import_path: "bower_components/foundation/scss"
        }))
        .pipe(concat('site.min.css'))
        .pipe(cssmin())
        .pipe(gulp.dest(paths.dest + 'css'));
});

gulp.task('js', function() {
    return gulp.src(paths.js.files)
        .pipe(concat('site.min.js'))
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
  gulp.watch(paths.sass.files, ['compass']);
});
