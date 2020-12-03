let input = document.getElementById('inputField');
let listItem = document.getElementById('list');
let minNum = 3;

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

function addList() {

    let inputText = textFilter(input.value);

    if (inputText) {
        listItem.innerHTML += `<li>${inputText}</li>`;
        input.value = "";
    }else{
    	input.value = "";
    }
}