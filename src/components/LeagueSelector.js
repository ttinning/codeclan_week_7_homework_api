const LeagueSelector = ({leagues, onLeagueSelected}) => {

    const handleChangeLeague = function(evt) {
        const chosenLeague = leagues[evt.target.value];
        onLeagueSelected(chosenLeague);
    }

    const leagueOptions = leagues.map((league, index) => {
        return <option value={index} key={index}>{league}</option>
    })

    return (
        <div id="select">
            <select defaultValue="" onChange={handleChangeLeague}>
                <option value="">Choose League</option>
                {leagueOptions}
            </select>
        </div>
    )
}

export default LeagueSelector;