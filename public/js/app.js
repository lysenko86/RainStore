"use strict";

var rainApp = angular.module('rainApp', ['ngRoute', 'LocalStorageModule']);

rainApp.config(function($routeProvider, localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('TrackMoney');

	$routeProvider
	.when('/home', {
		templateUrl: 'templates/home.html',
		controller: 'homeCtrl'
	})
    .when('/signin', {
		templateUrl: 'templates/signin.html',
		controller: 'signinCtrl'
	})
    .when('/signup', {
		templateUrl: 'templates/signup.html',
		controller: 'signupCtrl'
	})
    .when('/agree', {
		templateUrl: 'templates/agree.html'
	})
    .when('/help', {
		templateUrl: 'templates/help.html'
	})
    .when('/confirm/:confirm', {
		templateUrl: 'templates/confirm.html',
		controller: 'confirmCtrl'
	})
    .when('/password', {
		templateUrl: 'templates/password.html',
		controller: 'passwordCtrl'
	})
    .when('/reset/:password', {
		templateUrl: 'templates/reset.html',
		controller: 'resetCtrl'
	})
    .when('/profile', {
		templateUrl: 'templates/profile.html',
		controller: 'profileCtrl'
	})
    .when('/actions', {
		templateUrl: 'templates/actions.html',
		controller: 'actionsCtrl'
	})
	.when('/categories', {
		templateUrl: 'templates/categories.html',
		controller: 'categoriesCtrl'
	})
	.when('/accounts', {
		templateUrl: 'templates/accounts.html',
		controller: 'accountsCtrl'
	})
    .when('/budgets', {
		templateUrl: 'templates/budgets.html',
		controller: 'budgetsCtrl'
	})
    .when('/properties', {
		templateUrl: 'templates/properties.html',
		controller: 'propertiesCtrl'
	})
    .when('/analytics', {
		templateUrl: 'templates/analytics.html',
		controller: 'analyticsCtrl'
	})
    .when('/forum', {
		templateUrl: 'templates/forum.html',
		controller: 'forumCtrl'
	})
    .when('/forum/:post', {
		templateUrl: 'templates/post.html',
		controller: 'forumCtrl'
	})
    .when('/logout', {
		templateUrl: 'templates/logout.html',
		controller: 'logoutCtrl'
	})
	.otherwise({
		redirectTo: '/home'
	});
});
