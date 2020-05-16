import React from 'react';
import CategoryIcon from '@/components/CategoryIcon';
import List from '@/components/List';
import { useQuery, queryAllCharacters } from '@/gql';
import * as S from './styles';

function ListPeople() {
  const response: any = useQuery(queryAllCharacters);

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
      {response.data && <List items={response.data.characters} />}
      <S.Button>
        More...
      </S.Button>
    </S.Context>
  );
}

export default ListPeople;
