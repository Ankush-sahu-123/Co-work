import React, { useState } from 'react'
import "./Search.css"
import Meeting from '../Meeting/Meeting';
import Cowork from '../Cowork/Cowork';
import Study from '../Study/Study';

const Search = () => {

    const [category, setCategory] = useState("");



    return (
        <div>
        <div className='options'>
            <button onClick={() => setCategory("meeting")} className={category === "meeting" ? "meeting select" : "meeting"}>Meeting</button>
            <button onClick={() => setCategory("cowork")} className={category === "cowork" ? "cowork select" : "cowork"}>Cowork</button>
            <button onClick={() => setCategory("study")} className={category === "study" ? "study select" : "study"}>Study</button>
        </div>
        <div className={category === "meeting" ? "" : "make-disappear"}><Meeting/></div>
        <div className={category === "cowork" ? "" : "make-disappear"}><Cowork/></div>
        <div className={category === "study" ? "" : "make-disappear"}><Study/></div>
        </div>
    )
}

export default Search