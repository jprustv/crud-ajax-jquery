console.log('xx');
angular.module("cadastrarModulo",[]);
angular.module("cadastrarModulo").controller("cadastrarController", function ($scope, $http){
    $scope.app = "cadastrarModulo";
    $scope.noticias = [];
    var carregarLista = function () {
        $http.get("pegar_noticias.php").success(function(data){
            $scope.noticias = data;
        }).error(function(data){
            $scope.message = "Erro: " + data;
        });
    };

    $scope.adicionarNoticia = function(noticia){
        $http.post("salvar_noticias.php", {id:noticia.id, assunto:noticia.assunto, corpoMsg:noticia.corpoMsg, dataPublicacao:noticia.dataPublicacao})
        .success(function(data) {
            delete $scope.noticia;
            carregarLista();
        }).error(function(data){
            $scope.message = "Erro: " + data;
        });
    };

    carregarLista();
});