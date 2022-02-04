import React from 'react';
import Link from './Link';
import { useQuery, gql } from '@apollo/client';

// const linksToRender = [
//     {
//         id: 'link-id-1',
//         description:
//             'Prisma gives you a powerful database toolkit 😎',
//         url: 'https://prisma.io'
//     },
//     {
//         id: 'link-id-2',
//         description: 'The best GraphQL client',
//         url: 'https://www.apollographql.com/docs/react/'
//     }
// ]

const LINK_QUERY = gql`
  {
    getLinks {
      id
      url
    }
  }
`;

const LinkList = () => {
    const {loading, error,  data } = useQuery(LINK_QUERY);
    if (loading) return <p>Loading</p>
    if (error) return <p>error.message</p>

    // console.log('data', data)
    
    return (
        <>
            <div>
                {data && (
                    <>
                        {data.getLinks.map((link) => (
                            <Link key={link.id} link={link} />
                        ))}
                    </>
                )}
            </div>
        </>
    )

}

export default LinkList