import React,  { useState } from "react";
import axios from 'axios';
import Results from "./Results";
import { Button } from '@material-ui/core';
import { Input } from '@material-ui/core';

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState('')
    const [repos, setRepos] = useState([]);
    
    const handleChange = (e) => {
        setSearchInput(e.target.value);
    };

    const handleClick = async () => {
        console.log(searchInput)

        try{
        const result = await axios (
            `https://api.github.com/users/${searchInput}/repos`
        );

        setRepos(result);
        } catch (err) {
            console.log(err);
        }
    };

    
    return (
        <>
        <div>
            <Input placeholder="Search" inputProps={{ 'aria-label': 'description' }} value={searchInput} onChange={handleChange} />
            <Button variant="contained" color="primary" onClick={handleClick}>Search</Button>
        </div>
        <Results repos={repos}/>
        </>
    );
};

export default SearchBar;