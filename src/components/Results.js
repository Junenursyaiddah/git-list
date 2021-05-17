import React from "react";

const Results = (props) => {
    const { repos } =  props;
    console.log("Repo is:", repos);
    return (
        <ul>
           <li>Repo satu</li> 
        </ul>

    );
};

export default Results;