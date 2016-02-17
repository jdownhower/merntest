var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');


gulp.task('bundle', function(){
    return browserify('src/App.js')
        .transform('babelify', {presets: ['react']})
        .bundle()
        //Pass desired output filename to vinyl-source-stream
        .pipe(source('bundle.js'))
        // Start piping stream to tasks!
        .pipe(gulp.dest("static/"));
});


gulp.task('watch', function(){
    var b = browserify({
        entries: ['src/App.js'],
        cache: {},
        packageCache: {},
        plugin: ['watchify']
    });
    
    function makeBundle() {
        b.transform('babelify', {presets: ['react']})
            .bundle()
            .on('error', function(err){
                // print the error (can replace with gulp-util)
                console.log(err.message);
                console.log(err.codeFrame);
                // end this stream
                this.emit('end');
            })
            //Pass desired output filename to vinyl-source-stream
            .pipe(source('bundle.js'))
            // Start piping stream to tasks!
            .pipe(gulp.dest("static/"));
        console.log("Bundle updated, success");
    }
    
    b.on('update', makeBundle);

    //we have to call bundle once to kick it off
    makeBundle();
        
    return b;
});

gulp.task('default', ['watch']);
