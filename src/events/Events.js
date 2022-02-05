import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_EVENTS = gql`
    {
        events {
            id
            name
            date
            comments {
                title
                text
            }
            imgSrc
        }
    }
`

const Events = () => {
    const {loading, error,  data } = useQuery(GET_EVENTS, {
        fetchPolicy: "network-only",        // Used for first execution
        nextFetchPolicy: "cache-first"      // Used for subsequent executions
    });
    if (loading) return <p>Loading...</p>
    if (error) return <p>error.message</p>
    // console.log('data', data.events[0].imgSrc)

    return (
        <>
            <h4>Events</h4>
            {
                // data.events[0].name
                data.events.map( (el, i) => (
                    <div key={el.id}>
                        {el.name} | &nbsp;
                        {
                            // Date.parse(el.date)
                            new Date(el.date).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) 
                        } | &nbsp;
                        
                        {el.imgSrc}
                        <img src={el.imgSrc} alt='`Day ${i}`'  width="300"  
                        />
                                   
                    </div>
                ))
            }
        </>
    )
}


export default Events;