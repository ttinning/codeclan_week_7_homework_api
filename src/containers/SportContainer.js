import { useState, useEffect } from "react";
import MatchSelector from "../components/MatchSelector";

const SportContainer = () => {
    const [matches, setMatches] = useState([]);
    const[selectedMatches, setSelectedMatches] = useState([]);

    useEffect (() => {
        getMatches();
    }, []);

    const getMatches = function(){
        fetch('https://www.scorebat.com/video-api/v1/')
        .then(res => res.json())
        .then(matches => setMatches(matches.slice(0, 30)))
    }
    console.log(matches.length)
    const onSelectedMatches = function(match) {
        setSelectedMatches(match);
    }
    
    return (
        <div>
            <h2>I am the matches</h2>
            <MatchSelector matches={matches} onSelectedMatches={onSelectedMatches}/>
        </div>
    )
}

export default SportContainer