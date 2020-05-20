import React, { useState, useEffect } from 'react';
import Details from '@/components/Details';
import { useQuery, queryCharacter } from '@/gql';
import { RouterLink, useCurrentRoute } from 'best-react-router';
import { Link } from '@/styles/components';
import * as S from './styles';

function DetailsPeople() {
  const route = useCurrentRoute();
  const id = route.params.id;

  const response: any = useQuery(queryCharacter, { id });
  
  const [captions, setCaptions]: any = useState([]);

  useEffect(() => {
    if (response.data) {
      setCaptions([
        {
          caption: 'Species',
          children: (
            <>
              {response.data && response.data.character.species.map(item => (
                <span key={item.name}>
                  {item.name}
                </span>
              ))}
              {response.data && !response.data.character.species.length && (
                <span>
                  Human
                </span>
              )}
            </>
          )
        },
        {
          caption: 'Planet',
          children: (
            <Link>
              <RouterLink to={{ path: '/planet/' + response.data.character.planet.id }}>
                {response.data.character.planet.name}
              </RouterLink>
            </Link>
          )
        },
        {
          caption: 'Vehicles',
          children: (
            <>
              {response.data && response.data.character.vehicles.map(vehicle => (
                <Link>
                  <RouterLink to={{ path: '/vehicle/' + vehicle.id }}>
                    {vehicle.name}
                  </RouterLink>
                </Link>
              ))}
              {response.data && !response.data.character.vehicles.length && (
                <div>
                  -
                </div>
              )}
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
          name={response.data ? response.data.character.name : null}
          imageUrl={response.data ? response.data.character.imageUrl : null}
          captions={captions}
          categorySlug="characters"
        />
      </S.Flex>
    </S.Context>
  );
}

export default DetailsPeople;
