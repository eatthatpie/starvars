import React from 'react';
import CategoryIcon from '@/components/CategoryIcon';
import * as S from './styles';

function Details() {
  return (
    <S.Context>
      <div>
        <div>
          <CategoryIcon imageUrl="/assets/group.svg" height="50" />
        </div>
        <div>name</div>
      </div>
      <div>
        details
      </div>
    </S.Context>
  )
}

export default Details;
