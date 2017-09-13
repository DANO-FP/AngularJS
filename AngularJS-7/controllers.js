angular.module("ToDoList",["LocalStorageModule"])
.controller("ToDoController",["$scope","localStorageService",function(s,l)
{
	if(l.get("angular-todolist")){//Nombro local storage para retener informacion
		s.todo=l.get("angular-todolist")//me fijo si hay datos almacenados 
										//en mi local storage traigo los datos contenidos
	}
	else{//Si mi local storage esta vacio procedo con una lista vacia.
	s.todo=[];}
	/*
	{
		actividad :'terminar el curso angular'
		fecha: '03-03-15 2pm'
	}
	*/
	s.addActv=function(){//con variable scope declaro addActv que agrega 
						//una linea a mi "lista" contenida en mi local storage
		s.todo.push(s.newActv);	//Metodo push agrega el nuevo "objeto" o dato dentro de mi "lista"
								//contenida dentro del local storage Json
		s.newActv={};	// Vacio los datos contenidos en la caja de texto.
		l.set("angular-todolist",s.todo);	//guardo en el local storage
	}
	s.clean=function(){	//agrego funcion clean con scope para poder limpiar 
						//datos almacenados en el local storage
		s.todo=[];		//declaro una lista vacia.
		l.set("angular-todolist",s.todo); 	//se la asigno a mi espacio json
											// y la guardo vacia
	}										// de esta manera borro los datos en mi local storage
}]);										//mejor dicho lo sobreescribo con algo vacio. 