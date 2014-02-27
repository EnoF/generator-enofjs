/*
 * Copyright (c) 2014.
 *
 * @author EnoF
 */
(function questionsScope() {
    'use strict';

    var MODULES = {
        ANGULAR: 'angular',
        ENOF_JS: 'enofjs',
        LESS: 'less',
        HTTP_INVOKE: 'httpInvoke'
    };

    module.exports = {
        MODULES: MODULES,
        NAME: {
            type: 'input',
            name: 'authorName',
            message: 'What is your name?',
            defaults: 'Please enter you username...'
        },
        MODULE_NAME: {
            type: 'input',
            name: 'moduleName',
            message: 'Please provide a name for your module',
            defaults: 'Hello EnoFJS'
        },
        DESCRIPTION: {
            type: 'input',
            name: 'description',
            message: 'Please provide a short description of your project',
            defaults: 'A project using EnoFJS'
        },
        FRONTEND: {
            type: 'confirm',
            name: 'frontend',
            message: 'Is this a frontend project?',
            defaults: true
        }
    };
}());