import React from 'react';
import Details from '@/components/Details';
import * as S from './styles';

function DetailsPeople() {
  return (
    <S.Context>
      <S.Flex>
        <Details />
      </S.Flex>
    </S.Context>
  );
}

export default DetailsPeople;
