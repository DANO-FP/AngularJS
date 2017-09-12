angular.module("MyFirstApp",[])
.controller("FirstController",function($scope,$http){
	$scope.posts=[];
	$scope.newpost={};
	//$HTTP LINQUEA UN ARCHIVO JSON DE UNA WEB PARA IMPORTAR SUS DATOS
	//$SCOPE SE USA PARA AGREGAR UNO POR UNO 
	$http.get("https://jsonplaceholder.typicode.com/posts")
		.success(function(data){
			console.log(data);
			$scope.posts=data;
		})//SI ES CORRECTO HAGO EL SUCCESS
		.error(function(err){

		});//SI NO ES CORRECTO USO EL METODO ERROR
	//$http POST
	$scope.newPost = function(){
		$http.post("https://jsonplaceholder.typicode.com/posts",{
			title: $scope.newpost.title,
			body: $scope.newpost.body,
			userId: 1
		})
		.success(function(data,status,headers,config){
			$scope.posts.push($scope.newpost);//o data es lo mismo
			$scope.newpost={};
		})
		.error(function(error,status,headers,config){
			console.log(error);
		});
	}
});