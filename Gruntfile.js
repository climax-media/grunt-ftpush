// Generated by CoffeeScript 1.9.1
module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-release');
  return grunt.initConfig({
    release: {
      options: {
        bump: false,
        add: false,
        commit: false,
        push: false
      }
    }
  });
};
