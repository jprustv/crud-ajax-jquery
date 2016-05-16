var cadastrarModulo = angular.module('cadastrarModulo', []);

cadastrarModulo.directive('cadastrarForm', function(){
    return{
        restrict: 'E',
        replace: true,
        templateUrl: 'static/html/formCadastrarNoticia.html'
    };
});