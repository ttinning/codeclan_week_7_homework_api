const MatchSelector = ({matches, onSelectedMatches}) => {
    
    const handleChange = function(evt) {
        const chosenMatch = matches[evt.target.value];
        onSelectedMatches(chosenMatch)
    }

    const matchOptions = matches.map((match, index) => {
        return <option value={index} key={index}>{match.title}</option>
    })

    return (
        <select defaultValue="" onChange={handleChange}>
            <option value="" selected>Choose Match</option>
            {matchOptions}
        </select>
    )
}

export default MatchSelector