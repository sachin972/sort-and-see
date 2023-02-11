import React from "react";


function AboutSort(){

    const headStyle = {
        fontFamily: ['Russo One', 'sans-serif']
    }

    const uStyle = {
        fontSize: '35px'
    }


    return (
        <>
            <div data-aos="fade-left" data-aos-duration="1500" className="skills">
                <div  className="programming"><br />
                    <h1 style={headStyle}>Sort Algorithm</h1><br /><br />
                    <p>Sorting Algorithms are used to sort a data structure according to a specific order relationship, such as numerical order or lexicographical order.<br /><br />
                        
                        This operation is one of the most important and widespread in computer science. For a long time, new methods have been developed to make this procedure faster and faster.<br /><br />
                        
                        There are currently hundreds of different sorting algorithms, each with its own specific characteristics. They are classified according to two metrics: space complexity and time complexity.<br /><br />
                        
                        Those two kinds of complexity are represented with asymptotic notations, mainly with the symbols O, Θ, Ω, representing respectively the upper bound, the tight bound, and the lower bound of the algorithm's complexity, specifying in brackets an expression in terms of n, the number of the elements of the data structure.<br /><br />
                        
                        Most of them fall into two categories:<br /><br />
                        
                        <u style={uStyle}>Logarithmic</u><br />
                        The complexity is proportional to the binary logarithm (i.e to the base 2) of n.
                        An example of a logarithmic sorting algorithm is Quick sort, with space and time complexity O(n × log n).<br /><br />
                        -&nbsp; Quick Sort<br />
                        -&nbsp; Merge Sort<br />
                        -&nbsp; Heap Sort<br /><br />
                        
                        
                        <u style={uStyle}>Quadratic</u><br />
                        The complexity is proportional to the square of n.
                        An example of a quadratic sorting algorithm is Bubble sort, with a time complexity of O(n2).
                        Space and time complexity can also be further subdivided into 3 different cases: best case, average case and worst case.<br /><br />
                        -&nbsp; Bubble Sort<br />
                        -&nbsp; Selection Sort<br />
                        -&nbsp; Insertion Sort<br />
                        -&nbsp; Gnome Sort<br />
                        -&nbsp; Shaker Sort<br />
                        -&nbsp; OddEven Sort<br />
                        -&nbsp; Pancake Sort<br /><br />

                        Have Fun!</p><br /><br />
                </div>
            </div>
        </>
    );
}

export default AboutSort;