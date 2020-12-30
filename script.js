updateList();

// localStorage.task=JSON.stringify([]);


function addEvent()
{
    //take input from input box
let input = document.getElementById("Task_input");

    // take tasks from localstorage and store task (array)
let tasks_array = JSON.parse(localStorage.task);


    // push(new element) into task array
tasks_array.push(input.value);

    //update that array to local storage
localStorage.task=JSON.stringify(tasks_array);

    //empty the input box

input.value = "";
 
//update lis 

updateList();


}

function updateList()
{
    // get refrence ul (tasks)
    
    var ul = document.getElementById("task");

    //get tasks from local storage 
    
    let tasks_array=JSON.parse(localStorage.task);
    let length1 = tasks_array.length-1;
    let html="";
    for(let i=length1;i>=0;i--)
    {   
        //console.log(tasks_array[i]);
         html+= '<li class="list-group-item"' + i + '">'  + tasks_array[i] +  ' <span class="btn btn-danger btn-sm float-right remove_btn" onclick="removeItem(this)"> Remove </span> </li>';

    }


    ul.innerHTML=html;



}




function removeItem(span_tag)
{ 
    //console.log(obj);

 let index_id = span_tag.parentElement.id;
 
 //get array task
 let tasks_array = JSON.parse(localStorage.task);

//update task array (remove item)

tasks_array.splice(index_id,1);

 //update localstorage new array

localStorage.task=JSON.stringify(tasks_array);

updateList();

}












