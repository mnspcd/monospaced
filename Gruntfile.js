module.exports = function(grunt) {

  var app = 'static_monospaced';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    rsync: {
      dev: {
        options: {
          args: ['--exclude-from=.rsyncignore',],
          deleteAll: true,
          host: 'mnspcd',
          dest: '~/webapps/' + app,
          recursive: true,
          src: './',
          ssh: true,
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-rsync');

  grunt.registerTask('deploy', [
    'rsync',
  ]);
};
