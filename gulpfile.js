// 引入 gulp 包
var gulp = require('gulp')

// 引入 gulp-webserver 包
var webserver = require('gulp-webserver')

// 引入 gulp-webpack 包
var webpack = require('gulp-webpack')
// 引入 文件名提取 包
var named = require('vinyl-named')

// 引入 gulp-sass 包
var sass = require('gulp-sass')

// 拷贝src下的html到build下
gulp.task('copyhtml', function () {
  gulp.src('./car/*.html')
    .pipe(gulp.dest('./build/'))
})
//拷贝js/lib下面的js到build下
gulp.task('copyjs', function () {
  gulp.src('./car/js/lib/zepto.min.js')
    .pipe(gulp.dest('./build/js'))
})

// 启动一个webserver服务
gulp.task('webserver', function () {
  gulp.src('./build')
    .pipe(
      webserver({
        host: 'localhost',
        port: 8040,
        directoryListing: {
          enable: true,
          path: './build'
        },
        livereload: true
      })
    )
})

// 打包js
gulp.task('packjs', function () {
  gulp.src(
    ['./car/js/*.js',
    './car/js/Me.js'
    ]
  )
    .pipe(named())
    .pipe(webpack({
      output: {
        filename: '[name].js'
      },
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'imports-loader',
            exclude: './node_modules'
          },
          {
            test: /\.string$/,
            loader: 'string-loader'
          }
        ]
      }
    }))
    .pipe(gulp.dest('./build/js'))
})

// 打包 scss
gulp.task('packcss', function () {
gulp.src([
    './car/css/*.scss',
    './car/css/Me.scss'
])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css'))
})

// copy images
gulp.task('copyimage', function () {
  	gulp.src('./car/imgs/**/*')
    .pipe(gulp.dest('./build/imgs'))
})

// copy libs
gulp.task('copylibs', function () {
  gulp.src('./car/css/lib/**/*')
    .pipe(gulp.dest('./build/css/libs'))
})
// copy usage
gulp.task('copyusage', function () {
  gulp.src('./car/css/usage/**/*')
    .pipe(gulp.dest('./build/css/usage'))
})
// copy fonts
gulp.task('copyfonts', function () {
  gulp.src('./car/css/fonts/*')
    .pipe(gulp.dest('./build/css/fonts'))
})

// 监测文件变化
gulp.task('watch', function () {
	gulp.watch('./car/*.html', ['copyhtml'])
	gulp.watch('./car/css/fonts/*', ['copyfonts'])
	gulp.watch('./car/js/lib/*.js', ['copyjs'])
  gulp.watch('./car/js/**/*.js', ['packjs'])
  gulp.watch('./car/js/**/*.string', ['packjs'])
  gulp.watch('./car/css/**/*.scss', ['packcss'])
	gulp.watch('./car/imgs/**/*', ['copyimage'])
	gulp.watch('./car/css/usage/**/*', ['copylibs'])
	gulp.watch('./car/css/libs/**/*', ['copyusage'])
})

// 定义默认任务
gulp.task('default', ['copyhtml','copyfonts','copylibs','copyjs','copyusage','copyimage' ,'watch', 'webserver'], function () {
  console.log('done.')
})

