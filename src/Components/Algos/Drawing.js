import * as Sorts from './Sorting';

function generateArray(){
    var size = 10;
    let n
    let q = document.querySelector("#array")
    q.value = ""
    for (let i = 0; i < size; i++) {
        n = Math.floor((Math.random() * 50) + 1);
        q.value += n
        if(i<size-1){
            q.value += ", "
        }
    }
}

var draw = (arr) => {
    // console.log(Sorts.q);
    // Sorts.q.innerHTML = "";
    var q = document.querySelector(".numbers");
    // console.log(arr.length);
    for (let i = 0; i < arr.length; i++) {
        const p = arr[i];
        q.innerHTML += Sorts.block;
        var j = document.getElementsByClassName("block")[i];
        // console.log(j);
        // console.log(i);
        for(let k=0; k<p; k++){
            j.innerHTML += Sorts.piles;
        }
    }
};

function sleep(milliseconds) {  
    return new Promise(resolve => setTimeout(resolve, milliseconds));  
}

export {generateArray, draw, sleep};