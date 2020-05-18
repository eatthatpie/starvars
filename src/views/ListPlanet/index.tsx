import React from 'react';
import CategoryIcon from '@/components/CategoryIcon';
import List from '@/components/List';
import { useQuery, queryAllPlanets } from '@/gql';
import * as S from './styles';

function ListPeople() {
  const response: any = useQuery(queryAllPlanets);

  return (
    <S.Context>
      <S.Caption>
        <CategoryIcon
          imageUrl="/assets/group.svg"
          height="60"
          isTransparent={true}
        />
      </S.Caption>
      {response.isLoading && <div>Loading...</div>}
      {response.data && <List type="planet" items={response.data.planets} />}
      <S.Button>
        More...
      </S.Button>
    </S.Context>
  );
}

export default ListPeople;
