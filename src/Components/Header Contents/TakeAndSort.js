import React from "react";
import * as Algo from '../Algos/Sorting';

function GetAndSort() {


    return (
        <>
            <div className="input-group mb-3">
                <input type="text" id="array" placeholder="Enter Space Separated Array" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
            </div>

            <button onClick={Algo.generateArray} className="btn btn-outline-primary">Generate random array</button>

            <button onClick={Algo.validate} type="button" className="btn btn-dark">Start Sorting</button>
        </>
    );
}

export default GetAndSort;