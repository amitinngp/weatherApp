var gulp=require('gulp');
var less=require('gulp-less');
gulp.task('less',CompileLess);
gulp.task('default',['less'],RunDefault);
function CompileLess(){
    gulp.src('./app/assets/css/*.less')
    .pipe(less())
    .pipe(gulp.dest(DestinationSrc));
}

function DestinationSrc(des){    
return des.base;
}



function RunDefault(){
    gulp.watch('./app/assets/css/*.less',['less']);
}