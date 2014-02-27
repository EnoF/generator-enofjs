var EnofjsGenerator = (function EnofjsGeneratorScope() {
    'use strict';

    var util = require('util');
    var path = require('path');
    var yeoman = require('yeoman-generator');
    var questions = require('./questions.js');
    var resolver = require('./resolver.js');


    var EnofjsGenerator = module.exports = function EnofjsGenerator(args, options, config) {
        yeoman.generators.Base.apply(this, arguments);

        this.on('end', function () {
            this.installDependencies({ skipInstall: options['skip-install'] });
        });

        this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
    };

    util.inherits(EnofjsGenerator, yeoman.generators.Base);

    EnofjsGenerator.prototype.askFor = function askFor() {
        var cb = this.async();

        // have Yeoman greet the user.
        console.log(this.yeoman);

        var prompts = [
            questions.NAME,
            questions.MODULE_NAME,
            questions.DESCRIPTION,
            questions.FRONTEND
        ];

        this.prompt(prompts, function (props) {
            this.authorName = resolver.questionProperty(props, questions.NAME);
            this.moduleName = resolver.questionProperty(props, questions.MODULE_NAME) || 'test';
            this.description = resolver.questionProperty(props, questions.DESCRIPTION);
            this.appName = this.moduleName;
            this.frontend = resolver.questionProperty(props, questions.FRONTEND);
            cb();
        }.bind(this));
    };

    EnofjsGenerator.prototype.app = function app() {
        this.mkdir('app');
        this.mkdir('app/templates');

        this.copy('_package.json', 'package.json');
        if(this.frontend) this.template('_bowerFE', 'bower.json');
        else this.template('_bowerBE', 'bower.json');
    };

    EnofjsGenerator.prototype.projectfiles = function projectfiles() {
        this.copy('editorconfig', '.editorconfig');
        this.copy('jshintrc', '.jshintrc');
        this.copy('_gitignore', '.gitignore');
        if (this.frontend) {
            this.template('_GruntfileE2E', 'Gruntfile.js');
            this.copy('_karma-conf-angular', 'test/karma.conf.js');
            this.copy('_karma-conf-e2e', 'test/e2e-karma.conf.js');
            this.template('_index', 'app/index.html');
        } else {
            this.template('_Gruntfile', 'Gruntfile.js');
            this.copy('_karma-conf', 'test/karma.conf.js');
        }
    };
}());