import React from 'react';
import CategoryIcon from '@/components/CategoryIcon';
import List from '@/components/List';
import * as S from './styles';

function ListPeople() {
  return (
    <S.Context>
      <S.Caption>
        <CategoryIcon
          imageUrl="/assets/group.svg"
          height="60"
          isTransparent={true}
        />
      </S.Caption>
      <List />
      <S.Button>
        More...
      </S.Button>
    </S.Context>
  );
}

export default ListPeople;
