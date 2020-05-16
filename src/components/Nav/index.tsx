import React from 'react';
import { useSelector } from 'react-redux';
import * as S from './style';
import { selectCategories } from '@/store/selectors';

function mapCategories(input) {
  return input.map(item => ({
    name: item.name,
    imageUrl: item.imageUrl,
    linkUrl: item.linkUrl
  }));
}

function Item(props) {
  const { name, imageUrl, linkUrl } = props;

  return (
    <li>
      <a href={linkUrl}>
        <img src={imageUrl} />
        {name}
      </a>
    </li>
  );
}

function Nav() {
  const categories = useSelector(selectCategories());

  return (
    <S.Context>
      <ul>
        {mapCategories(categories).map(item => (
          <Item
            key={item.name}
            name={item.name}
            imageUrl={item.imageUrl}
            linkUrl={item.linkUrl}
          />
        ))}
      </ul>
    </S.Context>
  )
}

export default Nav;
