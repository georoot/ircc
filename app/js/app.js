'use strict';
 
var angular = require('angular');
var ngRoute = require('angular-route');
var app = angular.module('ircc', [ngRoute]);

require('./routes')(app);
