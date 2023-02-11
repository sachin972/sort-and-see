import React from "react";
// import * as Algo from '../Algos/Sorting';
import {validate} from '../Algos/Sorting';
import { generateArray } from "../Algos/Drawing";

function GetAndSort() {


    return (
        <>
            <div className="input-group mb-3">
                <input type="text" id="array" placeholder="Enter Space Separated Array" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
            </div>

            <button onClick={generateArray} className="btn btn-outline-primary">Generate random array</button>

            <button onClick={validate} type="button" className="btn btn-dark">Start Sorting</button>
        </>
    );
}

export default GetAndSort;