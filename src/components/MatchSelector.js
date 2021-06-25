const MatchSelector = ({matches, onSelectedMatch}) => {
    
    const handleChange = function(evt) {
        const chosenMatch = matches[evt.target.value];
        onSelectedMatch(chosenMatch)
    }

    const matchOptions = matches.map((match, index) => {
        return <option value={index} key={index}>{match.title}</option>
    })

    return (
        <select defaultValue="" onChange={handleChange}>
            <option defaultValue="">Choose Match</option>
            {matchOptions}
        </select>
    )
}

export default MatchSelector