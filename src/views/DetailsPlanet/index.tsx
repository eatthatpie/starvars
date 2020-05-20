import React, { useState, useEffect } from 'react';
import Details from '@/components/Details';
import { useQuery, queryPlanet } from '@/gql';
import { RouterLink, useCurrentRoute } from 'best-react-router';
import { Link } from '@/styles/components';
import * as S from './styles';

function DetailsPeople() {
  const route = useCurrentRoute();
  const id = route.params.id;

  const response: any = useQuery(queryPlanet, { id });
  
  const [captions, setCaptions]: any = useState([]);

  useEffect(() => {
    if (response.data) {
      setCaptions([
        {
          caption: 'Population',
          children: (
            <>
              {response.data.planet.popuplation}
            </>
          )
        },
        {
          caption: 'Characters',
          children: (
            <>
              {response.data && response.data.planet.characters.map(character => (
                <Link>
                  <RouterLink to={{ path: '/people/' + character.id }}>
                    {character.name}
                  </RouterLink>
                </Link>
              ))}
            </>
          )
        }
      ]);
    }
  }, [response.data]);

  return (
    <S.Context>
      <S.Flex>
        <Details
          isLoading={response.isLoading}
          name={response.data ? response.data.planet.name : null}
          imageUrl={response.data ? response.data.planet.imageUrl : null}
          captions={captions}
          categorySlug="planets"
        />
      </S.Flex>
    </S.Context>
  );
}

export default DetailsPeople;
