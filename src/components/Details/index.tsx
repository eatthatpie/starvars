import React from 'react';
import Caption from '@/components/Caption';
import CategoryIcon from '@/components/CategoryIcon';
import ProfilePic from '@/components/ProfilePic';
import { Link, Space } from '@/styles/components';
import { useQuery, queryCharacter } from '@/gql';
import { RouterLink, useCurrentRoute } from 'best-react-router';
import * as S from './styles';

function Details() {
  const route = useCurrentRoute();
  const id = route.params.id;

  const response: any = useQuery(queryCharacter, { id });

  return (
    <S.Context>
      <div>
        <S.RelativeFlex>
          <ProfilePic
            imageUrl="https://ocs-pl.oktawave.com/v1/AUTH_2887234e-384a-4873-8bc5-405211db13a2/splay/2019/04/jar-jar-binks-gwiezdne-wojny-814x400.jpg"
            size="180"
            isRounded={true}
          />
          <S.BottomRight>
            <CategoryIcon
              imageUrl="/assets/group.svg"
              height="30"
            />
          </S.BottomRight>
        </S.RelativeFlex>
        <div>
          <header className="center">
            {response.data ? response.data.character.name : ''}
          </header>
        </div>
      </div>
      <div>
        <S.RelativeFlex column>
          <Caption label="Species">
          {response.data && response.data.character.species.map(item => (
              <span>
                {item.name}
              </span>
            ))}
            {response.data && !response.data.character.species.length && (
              <span>
                Human
              </span>
            )}
          </Caption>
          <Caption label="Planet">
            {response.data && (
              <Link>
                {response.data.character.planet.name}
              </Link>
            )}
          </Caption>
          <Caption label="Vehicles">
            {response.data && response.data.character.vehicles.map(vehicle => (
              <Link>
                {vehicle.name}
              </Link>
            ))}
            {response.data && !response.data.character.vehicles.length && (
              <div>
                -
              </div>
            )}
          </Caption>
        </S.RelativeFlex>
        <Space />
        <RouterLink to={{ path: '/' }}>
          &laquo; all Characters
        </RouterLink>
      </div>
    </S.Context>
  )
}

export default Details;
