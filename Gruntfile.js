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
        }
    })
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.registerTask('default', ['htmlmin','browserify']);
};
