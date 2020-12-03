let input = document.getElementById('inputField');
let listItem = document.getElementById('list');
let minNum = 3;
let i = 1;

function textFilter(x) {
    if (x) {
        if (x.length >= minNum) {
            return x;
        } else {
            alert('Min NUm is false')
            return false;
        }
    } else {
        alert('put something')
        return false;
    }
}

function fullList(text){
	listItem.innerHTML += `<li class="eachList${i}">
	<span class="listText${i}">${text}</span>
	<button id="delete">Delete</button>
	<button id="edit">Edit</button>
	</li>`;
	i++;
}

function addList() {

    let inputText = textFilter(input.value);

    if (inputText) {
        fullList(inputText);
        input.value = "";
    }else{
    	input.value = "";
    }
}