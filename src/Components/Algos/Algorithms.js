import * as Sorts from './Sorting';
import * as Draws from './Drawing';
// import {q, }

async function selectionSort(arr) {
    let n = arr.length;
        
    for(let i = 0; i < n; i++) {
        let min = i;
        for(let j = i+1; j < n; j++){
            if(arr[j] < arr[min]) {
                min=j; 
            }
         }
         if (min != i) {
            Sorts.drawUnique(i, min)
            let tmp = arr[i]; 
            arr[i] = arr[min];
            arr[min] = tmp;
            await Draws.sleep(200)
            Sorts.swap(i, min)
            await Draws.sleep(100)
            Sorts.drawSame(i, min)      
        }
    }
}

async function bubbleSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {


                Sorts.drawUnique(j, j+1)

                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp

                await Draws.sleep(200)
                Sorts.swap(j, j+1)
                await Draws.sleep(100)
                Sorts.drawSame(j, j+1)  
            }
        }
    }
}

async function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1;
        let temp = arr[i];
        while (j >= 0 && arr[j] > temp) {
            Sorts.drawUnique(j, j+1)
            arr[j + 1] = arr[j];
            await Draws.sleep(200)
            Sorts.swap(j, j+1)
            await Draws.sleep(100)
            Sorts.drawSame(j, j+1) 
            j--;
        }
        arr[j + 1] = temp;
    }
}

async function quickSort(arr) {
    let l = 0
    let h = arr.length-1;
    let n = arr.length
    let stack = new Array(h - l + 1);
    stack.fill(0);
    let top = -1;
    stack[++top] = l;
    stack[++top] = h;
    while (top >= 0) {
        h = stack[top--];
        l = stack[top--];
        let temp;
        let pivot = arr[h];
        let i = (l - 1);
        for (let j = l; j <= h - 1; j++) {
            if (arr[j] <= pivot) {
                i++;

                Sorts.drawUnique(i, j)


                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;

                await Draws.sleep(200)
                Sorts.swap(i, j)
                await Draws.sleep(100)
                Sorts.drawSame(i, j)    
            }
        }

        Sorts.drawUnique(i+1, h)

        temp = arr[i + 1];
        arr[i + 1] = arr[h];
        arr[h] = temp;

        await Draws.sleep(200)
        Sorts.swap(i+1, h)
        await Draws.sleep(100)
        Sorts.drawSame(i+1, h)

        let p = i + 1;;
        if (p - 1 > l) {
            stack[++top] = l;
            stack[++top] = p - 1;
        }
        if (p + 1 < h) {
            stack[++top] = p + 1;
            stack[++top] = h;
        }
    }
}

async function mergeSort(arr) {
    let n = arr.length;
    let temp = new Array(n);
    for (let i = 0; i < n; i++) {
        temp[i] = arr[i];
    }
    let l = 0;
    let h = n - 1;
    let m = Math.floor((l + h) / 2);
    let i = 0;
    let j = m + 1;
    while (i <= m && j <= h) {
        if (temp[i] <= temp[j]) {
            Sorts.drawUnique(i, j)
            arr[i] = temp[i];
            i++;
        } else {
            Sorts.drawUnique(i, j)
            arr[j] = temp[j];
            j++;
        }
        await Draws.sleep(200)
        Sorts.swap(i, j)
        await Draws.sleep(100)
        Sorts.drawSame(i, j)
    }
    while (i <= m) {
        Sorts.drawUnique(i, j)
        arr[j] = temp[i];
        j++;
        i++;
        await Draws.sleep(200)
        Sorts.swap(i, j)
        await Draws.sleep(100)
        Sorts.drawSame(i, j)
    }
    while (j <= h) {
        Sorts.drawUnique(i, j)
        arr[j] = temp[j];
        j++;
        await Draws.sleep(200)
        Sorts.swap(i, j)
        await Draws.sleep(100)
        Sorts.drawSame(i, j)
    }
}

export {bubbleSort, insertionSort, selectionSort, mergeSort, quickSort};