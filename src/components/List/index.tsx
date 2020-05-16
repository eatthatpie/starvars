import React from 'react';
import ProfilePic from '@/components/ProfilePic';
import { RouterLink } from 'best-react-router';
import * as S from './styles';

function Item(props) {
  const { id, name } = props;

  return (
    <S.Item>
      <ProfilePic
        imageUrl="https://zpruszkowa.pl/wp-content/uploads/2019/12/luke-skywalker-790x445.jpg"
        size="180"
        isRounded={true}
      />
      <header className="center small">
        <RouterLink to={{ path: `/people/${id}` }}>
          {name}
        </RouterLink>
      </header>
    </S.Item>
  );
}

function List(props) {
  const { items } = props;

  return (
    <S.Context>
      <S.Grid>
        {items.map(item => <Item key={item.id} id={item.id} name={item.name} />)}
      </S.Grid>
    </S.Context>
  )
}

export default List;
