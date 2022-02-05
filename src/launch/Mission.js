import React from 'react';

const Mission = ({mission}) => {
    // console.log('mission', mission)
    return (
        <>
            <p key={mission.id}>
                { mission.title } | { mission. year }
            </p>
        </>
    )
}

export default Mission