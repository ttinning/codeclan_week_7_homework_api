const MatchDetail = ({match}) => {


    return(
        <div id="match-details">
            <h1>Match</h1>
            <h2>{match.competition.name}</h2>
            <p><a href={match.side1.url}>{match.side1.name}</a> VS <a href={match.side2.url}>{match.side2.name}</a></p>
            <a href={match.url} target="_blank">Website</a>   
            <div id="score-bat">
                <iframe width="800" height="1000" src={match.url}></iframe>
            </div>
            {/* <h3>{match.side1.name} vs {match.side2.name}</h3> */}
                
        </div>
    )
}

export default MatchDetail