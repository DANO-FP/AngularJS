var app = angular.module("MyFirstApp",[]);
app.controller("FirstController",["$scope",function(m)
{
	m.nombre="Danilo";
	m.comentarios=[
	{
		comentario:"Bien ahi",
		username: "dasdadasdas"
	},
	{
		comentario:"Bastante util",
		username:"nanarder"
	}
	];
	m.agregarComentario=function(){
		m.comentarios.push(m.nuevoComentario);
		m.nuevoComentario={};
	}
}]);
//ACHICAR LOS EL ARCHIVO JS
//ELIMINAR ESPACIOS Y TABULACIONES
//CAMBIAR NOMBRES DE VARIABLES
//CAMBIAMOS EL APP.CONTROLLER
/*
app.controller("FirstController",["$scope",function(m)
{
	PONIENDO ["$scope",function(m)]
	m pasa a ser $scope, y ya no es necesario escribir
	$scope
	solo basta con poner m.

hay otras dependencias como $http
pero siempre es bueno que la primera 
sea $scope
app.controller("Application",["$scope",$http,function(s,h)])
*/