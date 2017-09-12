var app = angular.module("MyFirstApp",[]);
app.controller("FirstController",function($scope)
{
	$scope.nombre="Danilo";
	$scope.comentarios=[
	{
		comentario:"Bien ahi",
		username: "dasdadasdas"
	},
	{
		comentario:"Bastante util",
		username:"nanarder"
	}
	];
	$scope.agregarComentario=function(){
		$scope.comentarios.push($scope.nuevoComentario);
		$scope.nuevoComentario={};
	}
});