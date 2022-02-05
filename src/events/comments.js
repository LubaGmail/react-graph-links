import React from 'react';

const Comments = ({comments}) => {
    // console.log('comments', comments)

    return (
        <>
            {
                comments.map( (el, i) => (
                    <li key={el.id}>
                        {el.title} | {el.text} <br /><br />
                    </li>
                ))
            }
        </>
    )
}


export default Comments