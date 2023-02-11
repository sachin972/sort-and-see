import * as sorts from './Algorithms';
import * as draws from './Drawing';

// var arr = [34, 23];
var block = '<div class="block"></div>';
var piles = '<div class="pile"></div>';


var drawUnique = (i, j) => {
    var q1 = document.getElementsByClassName("block")[i]
    var q2 = document.getElementsByClassName("block")[j]

    for (let k = 0; k < q1.childNodes.length; k++) {
        q1.childNodes[k].className = "un1";
    }
    for (let k = 0; k < q2.childNodes.length; k++) {
        q2.childNodes[k].className = "un2";
    }
}

var drawSame = (i, j) => {
    var q1 = document.getElementsByClassName("block")[i]
    var q2 = document.getElementsByClassName("block")[j]

    for (let i = 0; i < q1.childNodes.length; i++) {
        q1.childNodes[i].className = "pile";
    }
    for (let i = 0; i < q2.childNodes.length; i++) {
        q2.childNodes[i].className = "pile";
    }
}

var swap = (i1, i2) => {
    var q1 = document.getElementsByClassName("block")[i1]
    var q2 = document.getElementsByClassName("block")[i2]

    var temp = q1.innerHTML
    q1.innerHTML = q2.innerHTML
    q2.innerHTML = temp
}



const validate = () => {
    var nums = document.querySelector("#array")
    var alertMsg = ""
    var num = nums.value.split(" ").map(x => parseInt(x)); 
    for (let i = 0; i < num.length; i++) {
        if(isNaN(num[i])){
            alertMsg = "Invalid Input"
            break
        }
    }
    if(alertMsg!=""){
        alert(alertMsg)
    }
    else{
        
        simulate(num)
    }
}

let simulate = (num) => {
    var q = document.querySelector('.numbers');
    q.innerHTML = "";
    // console.log(num);
    
    draws.draw(num)


    
    var x = document.querySelector("#sortingAlgo")
    let algo = x.value
    console.log(algo);
    if(algo=="insertion"){
        sorts.insertionSort(num)
        
    }
    else if(algo == "selection")
        sorts.selectionSort(num)
    else if(algo == "bubble")
        sorts.bubbleSort(num)   
    else if(algo == "quick")
        sorts.quickSort(num)
    else if(algo == "merge")
        sorts.mergeSort(num)
}

export {validate};
export {piles, block};
export {drawSame, drawUnique, swap};