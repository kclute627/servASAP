import React from 'react'

const JobPage = ({match, history}) => {
    return (
        <div>
            Job Page {match.params.jobnumber}
        </div>
    )
}

export default JobPage
