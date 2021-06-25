import { useState, useEffect } from "react";
import MatchSelector from "../components/MatchSelector";
import MatchDetail from "../components/MatchDetail";

const SportContainer = () => {
    const [matches, setMatches] = useState([]);
    const[selectedMatch, setSelectedMatch] = useState(null);

    useEffect (() => {
        getMatches();
    }, []);

    const getMatches = function(){
        fetch('https://www.scorebat.com/video-api/v1/')
        .then(res => res.json())
        .then(matches => setMatches(matches.slice(0, 30)))
    }
    console.log(matches.length)
    const onSelectedMatch = function(matches) {
        setSelectedMatch(matches);
    }
    
    return (
        <div>
            <h2>I am the matches</h2>
            <MatchSelector matches={matches} onSelectedMatch={onSelectedMatch}/>
            {selectedMatch ?<MatchDetail match={selectedMatch}/>: null}
        </div>
    )
}

export default SportContainer