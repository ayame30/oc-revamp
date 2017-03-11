var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');

gulp.task('watch', function () {
	gulp.watch('./scss/**/*.scss', ['sass']);
});

gulp.task('sass', function(){
	gulp.src('./resource/scss/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./public/css/'));
});

gulp.task('default', ['sass', 'watch']);
