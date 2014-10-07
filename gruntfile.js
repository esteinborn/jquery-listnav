/*global module: false */
module.exports = function(grunt) {

  // Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			js: {
        options: {
          banner: '/*! <%= pkg.title %> - v<%= pkg.version %> - ' +
              '<%= grunt.template.today("yyyy-mm") %>\n' +
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
			sass: {
        files: [
          'scss/**/*.scss'
        ],
        tasks: [
          'sass:listnav',
          'csslint'
        ]
      },
      scripts: {
        options: {
          interrupt: true
        },
        files: [
          'jquery-listnav.js'
        ],
        tasks: [
          'jshint',
          'copy'
        ]
			}
		},
		csslint: {
			css: {
				options: {
					import: 2
				},
				src: ['css/listnav.css']
			},
		},
    sass: {
      listnav: {
        options: {
          outputStyle: 'compressed',
          sourceComments: 'map'
        },
        files: {
          'css/listnav.css': 'scss/listnav.scss',
          'demo/css/listnav.css': 'scss/listnav.scss'
        }
      },
      demo: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'demo/css/demo.css': 'demo/scss/stylesheet.scss'
        }
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
      'sass:listnav',
      'csslint',
      'jshint',
      'copy',
      'watch'
    ]);
  });

  grunt.registerTask('build', 'Production build', function(args) {
    grunt.task.run([
      'sass',
      'uglify',
      'copy'
    ]);
  });

	// Default task (Force to development build)
	grunt.registerTask('default', 'dev');
};
