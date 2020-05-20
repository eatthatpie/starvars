import React, { useState, useEffect } from 'react';
import Details from '@/components/Details';
import { useQuery, queryVehicle } from '@/gql';
import { RouterLink, useCurrentRoute } from 'best-react-router';
import { Link } from '@/styles/components';
import * as S from './styles';

function DetailsPeople() {
  const route = useCurrentRoute();
  const id = route.params.id;

  const response: any = useQuery(queryVehicle, { id });
  
  const [captions, setCaptions]: any = useState([]);

  useEffect(() => {
    if (response.data) {
      setCaptions([
        {
          caption: 'Model',
          children: (
            <>
              {response.data.vehicle.model}
            </>
          )
        },
        {
          caption: 'Characters',
          children: (
            <>
              {response.data && response.data.vehicle.characters.map(character => (
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
          name={response.data ? response.data.vehicle.name : null}
          imageUrl={response.data ? response.data.vehicle.imageUrl : null}
          captions={captions}
          categorySlug="vehicles"
        />
      </S.Flex>
    </S.Context>
  );
}

export default DetailsPeople;
