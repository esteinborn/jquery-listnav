/*global module: false */
module.exports = function(grunt) {

  // Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/*! <%= pkg.title %> - v<%= pkg.version %> - ' +
						'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
						'Copyright <%= pkg.author %> - ' +
            '<%= pkg.repository.url %> */\n'
			},
			js: {
        files: {
          'dist/js/jquery-listnav-<%= pkg.version %>.min.js': 'src/js/jquery-listnav.js'
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
        'src/js/*.js'
      ]
		},
		watch: {
			sass: {
        files: [
          'src/scss/**/*.scss'
        ],
        tasks: [
          'compass:dev',
          'csslint',
          'beep:3'
        ]
      },
      scripts: {
        options: {
          interrupt: true
        },
        files: [
          'src/js/*.js'
        ],
        tasks: [
          'jshint',
          'copy:jsDev',
          'beep:3'
        ]
			}
		},
		csslint: {
			css: {
				options: {
					import: 2
				},
				src: ['dist/css/listnav.css']
			},
		},
    sass: {
      dev: {
        options: {
          outputStyle: 'nested'
        },
        files: {
          'dist/css/listnav.css': 'src/scss/listnav.scss',
          'dist/demo/css/stylesheet.css': 'src/demo/scss/stylesheet.scss'
        }
      },
      prod: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'dist/css/listnav.css': 'src/scss/listnav.scss',
          'dist/demo/css/stylesheet.css': 'src/demo/scss/stylesheet.scss'
        }
      }
    },
    copy: {
      jsBuild: {
        files: {
          'dist/js/jquery-listnav-<%= pkg.version %>.js': 'src/js/jquery-listnav.js'
        }
      },
      demoBuild: {
        files: [{
          expand: true,
          cwd: 'src',
          src: ['index.html', 'demo/**/*', '!demo/scss/**/*'],
          dest: 'dist',
          filter: 'isFile'
        }]
      }
    }
	});

	// Load the plugins
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  grunt.registerTask('dev', 'Development build', function(args) {
     // grunt.log.write("my message");
    grunt.task.run([
      'sass:dev',
      'csslint',
      'jshint',
      'copy:jsBuild',
      'beep:3'
    ]);
  });

  grunt.registerTask('prod', 'Production build', function(args) {
    grunt.task.run([
      'sass:prod',
      'uglify',
      'copy',
      'beep:3'
    ]);
  });

  grunt.registerTask('prodCSS', 'Production build', function(args) {
    grunt.task.run([
      'sass:prod',
      'beep:3'
    ]);
  });

  grunt.registerTask('prodJS', 'Production build', function(args) {
    grunt.task.run([
      'uglify',
      'beep:3'
    ]);
  });

	// Default task (Force to development build)
	grunt.registerTask('default', 'dev');
};
