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
            destBase: "js",
            ext: '.js', // Give them a .min.js extension
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
			uno: {
				options: {
					import: 2
				},
				src: ['css/name.css']
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
        cssDir: 'css',
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
          basePath: "/"
          //debugInfo: true
        }
      },
      prod: {
        options: {
          outputStyle: 'compressed',
          environment: 'production'
        }
      }
    }//,
    // copy: {
    //   jsDev: {
    //     files: [{
    //     	expand: true,
    //     	flatten: true,
    //       cwd: 'js',
    //       src: ['src/**/*.js'],
    //       dest: 'js',
    //       filter: 'isFile'
    //     }]
    //   },
    //   jsQA: {
    //     files: [{
    //     	expand: true,
    //     	cwd: 'js',
    //     	src: ['body.js', 'dcjs.js', 'homepage.js'],
    //     	dest: 'k:/js/',
    //     	filter: 'isFile'
    //     }]
    //   },
    //   jsProd: {
    //     files: [{
    //       	expand: true,
    //       	cwd: 'js',
    //       	src: ['body.js', 'dcjs.js', 'homepage.js'],
    //       	dest: 'l:/js/',
    //       	filter: 'isFile'
    //       }]
    //   },
    //   cssQA: {
    //     files: [{
    //     	expand: true,
    //     	cwd: 'css',
    //     	src: ['style.css'],
    //     	dest: 'k:/css/',
    //     	filter: 'isFile'
    //     }]
    //   },
    //   cssProd: {
    //     files: [{
    //     	expand: true,
    //     	cwd: 'css',
    //     	src: ['style.css'],
    //     	dest: 'l:/css/',
    //     	filter: 'isFile'
    //     }]
    //   }
    // }
	});

	// Load the plugins
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-csslint');
  // grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-beep');

  grunt.registerTask('dev', 'Development build', function(args) {
     // grunt.log.write("my message");
    grunt.task.run([
      'compass:dev',
      'csslint',
      'jshint',
      //'copy:jsDev',
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

	// Default task (Force to development build)
	grunt.registerTask('default', 'dev');
};
