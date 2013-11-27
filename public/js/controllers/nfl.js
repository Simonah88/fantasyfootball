/**
 * Created by Simon on 11/27/13.
 */

window.angular.module('ngff.controllers.nfl', [])
    .controller('NFLController', ['$scope', '$routeParams', 'Global', 'NFL',
    function($scope,$routeParams, Global, NFL){
        $scope.global = Global;
        $scope.nflteams = NFL.teams;
        $scope.nflteam = NFL.teams[$routeParams['nflTeamId']];
    }]);

