import { useState, useEffect } from "react";
import MatchSelector from "../components/MatchSelector";
import MatchDetail from "../components/MatchDetail";
import LeagueSelector from "../components/LeagueSelector";

const SportContainer = () => {
    const [matches, setMatches] = useState([]);
    const [leagues, setLeagues] = useState([]);
    const [filteredMatches, setFilteredMatches] = useState([]);
    const[selectedMatch, setSelectedMatch] = useState(null);
    const [selectedLeague, setSelectedLeague] = useState(null);

    useEffect (() => {
        getMatches();
    }, []);

    useEffect(() => {
        const leagueOptions = matches.map((match, index) => {
            return match.competition.name
        })
        
        const unique = (value, index, self) => {
            return self.indexOf(value) === index
        }

        const uniqueLeagues = leagueOptions.filter(unique)
        setLeagues(uniqueLeagues)
    }, [matches]);  

    const getMatches = function(){
        fetch('https://www.scorebat.com/video-api/v1/')
        .then(res => res.json())
        .then(matches => 
            setMatches(matches.slice(0, 40)))
            setFilteredMatches(matches)
    }

    const onSelectedMatch = function(matches) {
        setSelectedMatch(matches);
    }

    const onLeagueSelected = function(league){
        if (!league) {
            setFilteredMatches(matches)
        } else {
            const matchesWithSelectedLeagues = matches.filter((match) => {
                return match.competition.name === league
            })
            setFilteredMatches(matchesWithSelectedLeagues)
        }
        setSelectedLeague(league)
    }

    return (
        <div>
            <LeagueSelector leagues={leagues} onLeagueSelected={onLeagueSelected}/>
            <MatchSelector matches={filteredMatches} onSelectedMatch={onSelectedMatch}/>
            {selectedMatch ?<MatchDetail match={selectedMatch}/>: null}
        </div>
    )
}

export default SportContainer