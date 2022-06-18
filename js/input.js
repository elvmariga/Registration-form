
let btn = document.querySelector('.post');

// let fname = document.querySelector('#fname');

function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
} 