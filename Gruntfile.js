module.exports = function(grunt) {


	//Configuration
	grunt.initConfig({
		//pass options to plugins, references to files etc.

		sass: {
	        options: {
	            sourceMap: true
	        },
	        dist: {
	            files: {
	                'css/style.css': 'main.scss'
	            },
	        },
    	},

		watch: {
			scripts: {
				files: ['**/*.scss'],
				tasks: ['sass'],
				options: {
					spawn: false,
				},
			},
		},
	});

	// Load plugins
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');


	// Register Tasks
	grunt.registerTask('default', ['watch']);
};