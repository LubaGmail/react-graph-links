import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Mission from './Mission'
// import launches from './testData';

const GET_LAUNCHES = gql`
  {
    launches {
        id
        site
        mission {
            id
            title
            year
        }
        rocket
        isBooked
    }
  }
`;

const Launch = () => {
    const {loading, error,  data } = useQuery(GET_LAUNCHES, {
        fetchPolicy: "network-only",        // Used for first execution
        nextFetchPolicy: "cache-first"      // Used for subsequent executions
    });
    if (loading) return <p>Loading...</p>
    if (error) return <p>error.message</p>
    // console.log('data', data.launches[0].mission)
 
    return (
        <>
            <div>
                <h4>Launch</h4>
                {
                    data?.launches && (
                        data.launches.map( (el) => (
                            <li key={el.id}>
                                {el.id} | {el.site} | {el.rocket} <br/>
                                <Mission mission={el.mission[0]} 
                                />
                            </li>
                        ))
                    )
                }

            </div>
        </>
    )
}

export default Launch;