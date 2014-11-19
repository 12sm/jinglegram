'use strict';

module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // ---------------------------------------------------------------------- //
    watch: {
      jshint: {
        files: ['Gruntfile.js', 'app/app.js', 'app/static/js/source/*.js', '!app/static/js/vendor/*.js'],
        tasks: ['jshint:all']
      }
    },
    // ---------------------------------------------------------------------- //
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        'app/app.js',
        'app/models/jinglegram.js',
        'app/routes/jinglegrams.js',
        'app/static/js/source/*.js',
        'app/static/css/**/*.css',
        'app/views/**/*.ejs',
        'app/views/*.ejs'
      ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['jshint:all']);
  grunt.registerTask('default', ['build', 'watch']);
};
