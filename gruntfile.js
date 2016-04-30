module.exports = function(grunt){
  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      sass: {
          dist:{
              options:{
                  style: 'compressed',
                  noCache: true
              },
              files:{
                  'public/style.min.css': 'style/style.scss'
              }
          }
      },
      watch: {
          sass:{
              files : ['style/*.scss'],
              tasks : ['sass'],
              options :{
                  spawn: false
              }
          }
      }
  });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['sass','watch']);
};