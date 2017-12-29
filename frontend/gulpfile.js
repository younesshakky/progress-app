const gulp = require('gulp')
const connect = require('gulp-connect')
const sass = require('gulp-sass')

gulp.task('serve', () => {
  connect.server({
    port: 3000,
    host: 'localhost'
  })
})

const srcSass = 'assets/sass/**/*.scss'

gulp.task('sass', () => {
  return gulp.src(srcSass)
  .pipe( sass.sync({outputStyle: 'expanded'}).on('error', sass.logError) )
  .pipe(gulp.dest('assets/css'))
})

gulp.task('sass:watch', () => {
  gulp.watch(srcSass, ['sass'])
})

gulp.task('build', ['sass', 'sass:watch'])


gulp.task('default', ['serve', 'build'])
