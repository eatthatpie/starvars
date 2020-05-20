import React from 'react';
import ProfilePic from '@/components/ProfilePic';
import { RouterLink } from 'best-react-router';
import * as S from './styles';

function Item(props) {
  const { id, name, imageUrl, type } = props;

  return (
    <S.Item>
      <S.Border>
        <div />
        <div />
      </S.Border>
      <RouterLink to={{ path: `/${type}/${id}` }}>
        <ProfilePic
          imageUrl={imageUrl}
          size="180"
          isRounded={true}
        />
        <header className="center small">
          {name}
        </header>
      </RouterLink>
    </S.Item>
  );
}

function List(props) {
  const { items, type, isLoading } = props;

  return (
    <S.Context isLoading={isLoading}>
      <S.Grid>
        {isLoading && new Array(8).fill(0).map((item, i) => <Item key={i} />)}
        {!isLoading && items.map(item => (
          <Item
            key={item.id}
            type={type}
            id={item.id}
            name={item.name}
            imageUrl={item.imageUrl}
          />
        ))}
      </S.Grid>
    </S.Context>
  )
}

export default List;
