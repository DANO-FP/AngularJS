angular.module("ToDoList",["LocalStorageModule"])
.controller("ToDoController",["$scope","localStorageService",function(s,l)
{
	if(l.get("angular-todolist")){
		s.todo=l.get("angular-todolist")
	}
	else{
	s.todo=[];}
	/*
	{
		actividad :'terminar el curso angular'
		fecha: '03-03-15 2pm'
	}
	*/
	s.addActv=function(){
		s.todo.push(s.newActv);
		s.newActv={};
		l.set("angular-todolist",s.todo);
	}
	s.clean=function(){
		s.todo=[];
		l.set("angular-todolist",s.todo);
	}
}]);