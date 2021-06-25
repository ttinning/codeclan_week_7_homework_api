import { useState, useEffect } from "react";

const SportContainer = () => {
    const [matches, setMatches] = useState([]);

    useEffect (() => {
        getMatches();
    }, []);

    const getMatches = function(){
        fetch('https://www.scorebat.com/video-api/v1/')
        .then(res => res.json())
        .then(matches => setMatches(matches))
    }
    console.log(matches.length)

    return(
        <div>
            "I Am The Matches"
            
        </div>
    )
}

export default SportContainer