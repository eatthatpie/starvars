import React from 'react';
import CategoryIcon from '@/components/CategoryIcon';
import List from '@/components/List';
import { useQuery, queryAllVehicles } from '@/gql';
import { useSelector } from 'react-redux';
import { selectCategoryBySlug } from '@/store/selectors';
import * as S from './styles';

function ListPeople() {
  const response: any = useQuery(queryAllVehicles);

  const category = useSelector(selectCategoryBySlug('vehicles'));

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
        type="vehicle"
        items={response.data ? response.data.vehicles : []}
      />
    </S.Context>
  );
}

export default ListPeople;
