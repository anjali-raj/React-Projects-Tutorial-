import React from 'react';

const MyParagraph = (props) => {
    console.log("MyParagrapg is Running!");
    return(
        <p>{props.children}</p>
    );
};

export default MyParagraph;