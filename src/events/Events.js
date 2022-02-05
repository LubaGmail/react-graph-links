import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Comments from './comments';

const GET_EVENTS = gql`
    {
        events {
            id
            name
            date
            comments {
                id
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
    // console.log('data', data.events[0].comments[0].title)

    return (
        <>
            <h4>Events</h4>
            <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Date</th>
                    <th>Image</th>
                    <th>Comments</th>
                </tr>
            </thead>
            <tbody>
            {
                // data.events[0].name
                data.events.map( (el, i) => (
                    <tr key={el.id}>
                        <td>{el.name} </td>
                        <td>
                            {
                                // Date.parse(el.date)
                                new Date(el.date).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) 
                            }
                        </td>
                        
                        <td>
                          <img src={el.imgSrc} alt='`Day ${i}`'  width="300"  
                            />
                        </td>
                        <td>
                            <Comments comments={el.comments}
                            />
                        </td>   
                                   
                    </tr>
                ))
            }
            </tbody>
            </table>
        </>
    )
}


export default Events;