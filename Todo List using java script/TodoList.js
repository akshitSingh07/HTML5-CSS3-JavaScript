var aud = document.getElementById('audio');
function playAudio(){
  aud.play();
}
/*
var todos = {
	"list" : [          --->>>> this object of array
	] 
}*/
var todos = [];
var i, z = 0;
var box = document.getElementById('container');
box.style.height = "auto"
function addTodo(){
	/*if(box.style.height > window.innerWidth - 2000  ){
		box.style.height = "1000px";
	}*/
	z = 0;
	playAudio();
	var t = document.getElementById('input').value;
	todos.push({value:t,flag:"false"});   // -->> this is array of objects
	displayTodo();
}

function strikeThrough(el){
	el.style.textDecoration = "line-through";
	el.style.listStyleType = "none";
	var a = el.getAttribute('id');
	todos[a].flag = "true";
	z++;
}

								//-----------IMPORTANT----------------//
								//						              //
								//  <li id = "' + i + '" >  </li>     //
								//                                    //
								//  this is done inorder to get value //
								//  of i and we can access this value // 
								//  by using li.getAttribute('id')    //
								//                                    //
								//------------------------------------//
									

function displayTodo(){
	z = 0;
	var todo = '';
	for(i = 0; i < todos.length; i++){
		todo += '<li id = "' + i + '"  onclick = "strikeThrough(this)">' + todos[i].value + '</li>';  // here this refers to li
	}
	document.getElementById('mytodos').innerHTML = todo; // whenever we click ADDTODO ul gets new input + previous list  
}

function removeTodo(){
	playAudio();
	var j;
	for(j=0;j < todos.length;j++){
      if(todos[j].flag == "true"){  
			todos.splice(j,z);   /// to remove this element from array 
		}
	}
	//z = 0;
	displayTodo();
}
