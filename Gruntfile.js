module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        handlebars: {
            compile: {
                options: {
                },
                files: {
                    "js/templates.js": ["templates/*.hbs"]
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-handlebars');

    // Default task(s).
    grunt.registerTask('default', ['handlebars']);

};
