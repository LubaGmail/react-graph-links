import React from 'react';

const Mission = ({mission}) => {
    // console.log('mission', mission)
    return (
        <>
            <div>
                { mission.title } | { mission. year }
            </div>
        </>
    )
}

export default Mission