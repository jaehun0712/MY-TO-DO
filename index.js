// http://127.0.0.1:5500/index.html   LIVE SERVER : OPEN WITH LIVE SERVER 
const list_Selector = document.querySelector(".list-group");

let List , id , todoList; 

$.ajax({  
    method : "GET",
    url: "http://3.38.104.18:3000",  //전송  
    //url: "http://localhost:3000",  //전송
    dataType:"JSON", 
})
.done(function(data) {  
    console.log(data);     
    todoList = data; 
    initial();        
});

function initial() {
    console.log(todoList);

    if (todoList) {
        console.log("todoList",todoList);
        id = todoList.length;
        loadList(todoList);
    } else {
        todoList = [];
        id = 0;
    }
     
    console.log("here",todoList);
}

function loadList(array) {
    array.forEach(function (item) {
        addToDo(item.name, item.id, item.done)
    });
}

function addToDo(name, id, done) {
    
    const item = `<li class="list-group-item">
                   ${name}
                  </li>
                  `;
    const position = "beforeend";
    list_Selector.insertAdjacentHTML(position, item);
}

$('#button-addon2').click(function() {
    var addTask = $("#addTask").val();

    $ajax({
        method : "GET", 
        //url : 'http://localhost:3000/add?name${addTask}', 
        url : 'http://3.38.104.18:3000/add?name${addTask}', 
        dataType:"JSON", 
    })
    .done(function(data) {
        location.reload();
    })
    .always(function(xhr, status) {
        alert("요청이 완료되었습니다.");
    });
;

});