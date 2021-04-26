/*global module: false */
module.exports = function(grunt) {

  // Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			js: {
        options: {
          banner: '/*! <%= pkg.title %> - v<%= pkg.version %> - ' +
              '<%= pkg.date %>\n' +
              'Copyright <%= pkg.author %> - ' +
              '<%= pkg.repository.url %> */\n'
        },
        files: {
          'jquery-listnav.min.js': 'jquery-listnav.js'
        }
			},
      vendor: {
        files: {
          'demo/js/vendor.js':
            ['demo/js/jquery-cookie.js',
            'demo/js/main.js',
            'demo/js/rainbow-custom.min.js']
        }
      }
		},
		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				eqnull: true,
				browser: true,
				globals: {
					jQuery: true
				}
			},
      files: [
        'jquery-listnav.js'
      ]
		},
		watch: {
      scripts: {
        options: {
          interrupt: true
        },
        files: [
          'jquery-listnav.js'
        ],
        tasks: [
          'jshint',
          'uglify',
          'copy'
        ]
			}
		},
    copy: {
      demo: {
        files: {
          'demo/js/jquery-listnav.js': 'jquery-listnav.js',
          'demo/': 'scss/**/*'
        }
      }
    }
	});

	// Load the plugins
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  grunt.registerTask('dev', 'Development build', function(args) {
    grunt.task.run([
      'jshint',
      'uglify',
      'copy',
      'watch'
    ]);
  });

  grunt.registerTask('build', 'Production build', function(args) {
    grunt.task.run([
      'uglify',
      'copy'
    ]);
  });

	// Default task (Force to development build)
	grunt.registerTask('default', 'dev');
};
