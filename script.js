let input = document.getElementById('input');
let list = document.getElementById('list');
let minNum = 3;
let i = 1;

function textFilter(x){

    if (x){
    if(x.length >= minNum){
        return x;
    }
    else{
    alert ('input invalid');
    return false;
    }
  }else{
  alert('input invalid');
  return false;
  }

}

function showList(text){
    list.innerHTML += `
  <li id="listdiv${i}">
  <span id="listText${i}">${text}</span>
  <button id="delete" class="btn delete-btn" onclick="deleteList(${i})">Delete</button>
  <button id="edit" class="btn edit-btn" onclick="editList(${i})">Edit</button>
  </li>`;
  i++;
}

function deleteList(listId){
    let currentText = document.getElementById(`listText${listId}`).innerHTML;
    let current = document.getElementById(`listdiv${listId}`);
    let deleteConfirm = confirm(`Are you sure to delete "${currentText}"`);

    if (deleteConfirm){
    list.removeChild(current);
    }else {
        console.log ('Delete Cancelled')
    }
}


function editList(listId){
    let current = document.getElementById(`listText${listId}`);
    let newText = prompt("Edit Here", current.innerHTML);

    if (textFilter(newText)){
    current.innerHTML = newText;
    } ;
}


function addList(){
    
  let inputText = textFilter(input.value);
  
  if (inputText){
  showList(inputText);
  input.value = "";
  }
  
}