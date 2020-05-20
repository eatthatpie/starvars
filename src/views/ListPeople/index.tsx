import React from 'react';
import CategoryIcon from '@/components/CategoryIcon';
import List from '@/components/List';
import { useQuery, queryAllCharacters } from '@/gql';
import { useSelector } from 'react-redux';
import { selectCategoryBySlug } from '@/store/selectors';
import * as S from './styles';

function ListPeople() {
  const response: any = useQuery(queryAllCharacters);

  const category = useSelector(selectCategoryBySlug('characters'));

  return (
    <S.Context>
      <S.Caption>
        <CategoryIcon
          imageUrl={category.imageUrl}
          height="60"
          isTransparent={true}
        />
      </S.Caption>
      <List
        isLoading={response.isLoading}
        type="people"
        items={response.data ? response.data.characters : []}
      />
    </S.Context>
  );
}

export default ListPeople;
