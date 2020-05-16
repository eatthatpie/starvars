import React from 'react';
import ProfilePic from '@/components/ProfilePic';
import * as S from './styles';

function Item() {
  return (
    <S.Item>
      <ProfilePic
        imageUrl="https://zpruszkowa.pl/wp-content/uploads/2019/12/luke-skywalker-790x445.jpg"
        size="180"
        isRounded={true}
      />
      <header className="center small">
        Luke Skywalker
      </header>
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
      </S.Grid>
    </S.Context>
  )
}

export default List;
