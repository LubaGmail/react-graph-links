import React from 'react';

const Link = ({link}) => {

    return(
        <>
            <div>
                {link.id} |  ({link.url})
            </div>
        </>
    )

}

export default Link;