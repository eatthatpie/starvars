import React from 'react';
import * as S from './styles';

function Item() {
  return (
    <S.Item>
      Item
    </S.Item>
  );
}

function List() {
  return (
    <S.Context>
      <S.Grid>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </S.Grid>
    </S.Context>
  )
}

export default List;
