import React from "react";
import bubble from './textures/bubble.jpg';
import insertion from './textures/insertion.jpg';
import selection from './textures/selection.jpg';

function LastSec(){


    // const h1Style = {
    //     fontFamily: ['Russo One', 'sans-serif'],
    //     textAlign: 'center',
    //     color: 'aliceblue'
    // }

    return (
        <section className="s1">
            <div className="main-container"><br />
                <div data-aos="zoom-in" data-aos-duration="1500" className="post-wrapper">
                    <div className="post">
                        <img className="thumbnail" src={bubble} />
                        <div className="post-preview">
                            <h6 className="post-title">Description</h6><br />
                            <p className="post-intro"> Bubble Sort is an iterative sorting algorithm that imitates the movement of bubbles in sparkling water..<br /><br />
                                Complexity:
                                <br />
                                <b>Average Complexity:</b>&nbsp;&nbsp;&nbsp;O(n<sup>2</sup>)<br />
                                <b>Best Case:</b>&nbsp;&nbsp;&nbsp;O(n)<br />
                                <b>Worst Case:</b>&nbsp;&nbsp;&nbsp;O(n<sup>2</sup>)<br />
                                <b>Space Complexity:&nbsp;&nbsp;&nbsp;</b>O(1)<br /><br /><br />
                            </p>
                        </div>
                    </div>
    
                    <div className="post">
                        <img className="thumbnail" src={selection} />
                        <div className="post-preview">
                            <h6 className="post-title"><b>Description</b></h6><br />
                            <p className="post-intro">The selection sort algorithm sorts an array by repeatedly finding the minimum element from unsorted part and putting it at the beginning.                            <br /><br />
                                Complexity:<br />
                                <b>Average Complexity:</b>&nbsp;&nbsp;&nbsp;O(n<sup>2</sup>)<br />
                                <b>Best Case:</b>&nbsp;&nbsp;&nbsp;O(n<sup>2</sup>)<br />
                                <b>Worst Case:</b>&nbsp;&nbsp;&nbsp;O(n<sup>2</sup>)<br />
                                <b>Space Complexity:&nbsp;&nbsp;&nbsp;</b>O(1)<br />    
                            </p>
                        </div>
                    </div>
    
                    <div className="post">
                        <img className="thumbnail" src={insertion} />
                        <div className="post-preview">
                            <h6 className="post-title">Description</h6><br />
                            <p className="post-intro">The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.<br /><br />
                                Complexity:<br />
                                <b>Average Complexity:</b>&nbsp;&nbsp;&nbsp;O(n<sup>2</sup>)<br />
                                <b>Best Case:</b>&nbsp;&nbsp;&nbsp;O(n)<br />
                                <b>Worst Case:</b>&nbsp;&nbsp;&nbsp;O(n<sup>2</sup>)<br />
                                <b>Space Complexity:&nbsp;&nbsp;&nbsp;</b>O(1)<br />
                            </p>
                        </div>
                    </div>
    
    
                </div>

                {/* <h1 style={h1Style}>And, For No Reason!</h1> */}
            </div>
            
        </section>
    );
}

export default LastSec;