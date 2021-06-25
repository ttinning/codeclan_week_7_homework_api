const MatchDetail = ({match}) => {

    return(
        <div>
            <h1>Match</h1>
            <h2>{match.competition.name}</h2>
            <h2>{match.title}</h2>
            <p>{match.date}</p>
            {/* <h3>{match.side1.name} vs {match.side2.name}</h3> */}
            <img src={match.thumbnail} witdth="500" height="600"></img>
            <a href={match.url} target="_blank">Watch The Game</a>                   
        </div>
    )
}

export default MatchDetail