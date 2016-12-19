module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
            'build/app.min.js': ['app/js/app.js']
        },
        htmlmin: {                                     // Task
          dist: {                                      // Target
            files: {
              'build/index.html': 'app/index.html'
            }
          }
        },
        sass: {                              // Task
          dist: {                            // Target
            files: {
              'build/app.min.css': 'app/style/main.scss'
            }
          }
        }
    })
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('default', ['htmlmin','sass','browserify']);
};
