/*global module: false */
module.exports = function(grunt) {

  var globule = require('globule'); // Declare globule for use in the Gruntfile

	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				//mangle: false, // Don't change variable and function names
				banner: '/*! <%= pkg.title %> - v<%= pkg.version %> - ' +
						'<%= grunt.template.today("yyyy-mm-dd") %>  - ' +
						'Copyright <%= pkg.author %> */\n'
			},
			js: {
        files:
          globule.findMapping(
          [
            '*.js', // Source files to find
          ],
          {
            srcBase: "src/js",
            destBase: "build/js",
            ext: '.min.js', // Give them a .min.js extension
            extDot: 'last'  // Fixes the issue of finding multiple dots in a filename
          })
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
				src: ['build/css/listnav.css']
			},
		},
    compass: {
      options: {
        require: [
          'breakpoint',
          //'sass-media_query_combiner',
          //'toolkit'
        ],
        //basePath: "/",
        cssDir: 'build/css',
        sassDir: 'src/scss',
        environment: 'development',
        imagesDir: 'images',
        javascriptsDir: 'js',
        outputStyle: 'expanded', //nested, expanded, compact, compressed
        //noLineComments: true,
        relativeAssets: true,
        //sourcemap: true,
        force: true
      },
      dev: {
        options: {
          //basePath: "/"
          //debugInfo: true
        }
      },
      prod: {
        options: {
          outputStyle: 'compressed',
          environment: 'production'
        }
      }
    },
    copy: {
      jsBuild: {
        files: [{
        	expand: true,
        	flatten: true,
          cwd: 'src',
          src: ['js/**/*.js'],
          dest: 'build/js',
          filter: 'isFile'
        }]
      },
      demoBuild: {
        files: [{
        	expand: true,
        	cwd: 'src',
        	src: ['demo/**/*'],
        	dest: 'build',
        	filter: 'isFile'
        }]
      }
    },
    'gh-pages': {
      options: {
        base: 'build',
        clone: 'gh-pages',
        user: {
          name: 'Eric Steinborn',
          email: 'esteinborn@gmail.com'
        }
      },
      // These files will get pushed to the `gh-pages` branch (the default).
      src: ['**/*']
    },
	});

	// Load the plugins
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-beep');
  grunt.loadNpmTasks('grunt-gh-pages');

  grunt.registerTask('dev', 'Development build', function(args) {
     // grunt.log.write("my message");
    grunt.task.run([
      'compass:dev',
      'csslint',
      'jshint',
      'copy:jsBuild',
      'beep:3'
    ]);
  });

  grunt.registerTask('prod', 'Production build', function(args) {
    grunt.task.run([
      'compass:prod',
      'uglify',
      'beep:3'
    ]);
  });

  grunt.registerTask('prodCSS', 'Production build', function(args) {
    grunt.task.run([
      'compass:prod',
      // 'copy:cssQA',
      // 'copy:cssProd',
      'beep:3'
    ]);
  });

  grunt.registerTask('prodJS', 'Production build', function(args) {
    grunt.task.run([
      'uglify',
      // 'copy:jsQA',
      // 'copy:jsProd',
      'beep:3'
    ]);
  });

  grunt.registerTask('pages', 'Production build', function(args) {
    grunt.task.run([
      'gh-pages'
    ]);
  });

	// Default task (Force to development build)
	grunt.registerTask('default', 'dev');
};
