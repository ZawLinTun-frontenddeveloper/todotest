let input = document.getElementbyId("inputField");
let list = document.getElementbyId("list");
let minNum = 3;

function textFilter(x) {
    if (x) {
        if (x.length >= minNum) {
            return x;
        } else {
            alert('input wrong');
            return false;
        }
    } else {
        alert('input invalid')
        return false;
    }
}

function addList() {
    let inputText = textFilter(input.value);

    if (inputText) {
        _
        list.innerHTML += `<li>${inputText}</li>`;
        input.value = "";
    }
}