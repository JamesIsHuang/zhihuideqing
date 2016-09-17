/**
 * Created by hw on 2016/9/16.
 */
var gulp = require('gulp');
var less = require('gulp-less');
var fileinclude  = require('gulp-file-include');

gulp.task('fileinclude',function(){
    gulp.src('src/**.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('dist'));
});
gulp.task('lessToCss',function(){
    gulp.src(['src/less/*.less','!src/less/**/{reset,test}.less'])
        .pipe(less())
        .pipe(gulp.dest('dist/css'))
});
gulp.task('image',function(){
    gulp.src(['src/images/*'])
        .pipe(gulp.dest('dist/images'))
});
gulp.task('js',function(){
    gulp.src(['src/js/*.js'])
        .pipe(gulp.dest('dist/js'))
});
gulp.task('default', function(){
    gulp.run('fileinclude','lessToCss','image','js');
});
