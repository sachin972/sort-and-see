import React from "react";
import TakeAndSort from './Header Contents/TakeAndSort'

function Header(){

    const styles ={
        fontFamily : ['Russo One', 'sans-serrif'],
        color: '#DBDBDB'
    }
    const style1={
        width: '400px'
    }
    const style2={
        color: 'aliceblue',
        fontFamily: ['Poppins', 'sans-serif'],
        padding: '15px'
    }

    return (
        <div className="container">
            <br />
            <h1 className="heading text-center" style={styles}>
                Sorting Algorithm Visualizer<br /><br />
                <i>
                    <p className="text-center">"An Algorithm must be seen to be believed"<br />
                    </p>
                    <p className="text-center">- Donald Knuth</p> 
                </i>
            </h1>
            <br />
            <div className=" display-inline box" style={style2}>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <select className="form-select" style={style1} name="algo" id="sortingAlgo">
                    <option value="insertion">Select Sorting Algorithm to Visualize!</option>
                    <option value="insertion">Insertion Sort</option>
                    <option value="selection">Selection Sort</option>
                    <option value="bubble">Bubble Sort</option>
                    <option value="bubble">Quick Sort</option>
                    <option value="bubble">Merge Sort</option>
                </select>
            </div>
            <TakeAndSort />
        </div>
    );
}
export default Header;