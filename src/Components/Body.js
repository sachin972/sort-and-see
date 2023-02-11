import React from "react";
import ToVisualise from "./Body_Contents/ToVisualise";
import AboutSort from './Body_Contents/AboutSorting';
import LastSec from './Body_Contents/LastSec';

function MainBody(){
    return (
        <>
            <br />
            <br />
            <ToVisualise />
            <AboutSort />
            <LastSec />
        </>
    );
}

export default MainBody;