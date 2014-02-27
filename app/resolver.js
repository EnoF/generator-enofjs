/*
 * Copyright (c) 2014. 
 *
 * @author EnoF
 */
(function () {
    'use strict';

    module.exports = {
        questionProperty: function (result, question) {
            return result[question.name];
        },
        contains: function (result, dependency) {
            return result.indexOf(dependency) !== -1;
        }
    };
}());