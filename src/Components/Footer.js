import React from "react";


function Footer(){

    const styling = {
        textAlign: 'center',
        color: '#ccd6f6',
        fontFamily: ['Roboto Mono', 'monospace'],
        fontSize: 'large'
    }

    return (
        <p style={styling}>
            Design with ❤️  by 
            <a href="http://github.com/sachin972">Sachin Tripathi </a>
            <br/> All Rights Reserved
        </p>
    );
}

export default Footer;