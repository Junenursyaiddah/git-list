import React from "react";

const Results = (props) => {
    const { repos } =  props;
    console.log("Repo is:", repos.data);

    const listRepos = repos.length !== 0 ? (
        repos.data.map((item) => <li key={item.id}><a href={item.html_url}>{item.name}</a></li>)
    ) : (
         <li>No Repos Found</li> 
    );
    
    return <ul className="result">{listRepos}</ul>;

};

export default Results;