import React, { useState } from 'react';
import CategoryIcon from '@/components/CategoryIcon';
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

function Item(props): JSX.Element {
  const { name, imageUrl, linkUrl } = props;

  return (
    <S.Item>
      <S.FlexAnchor href={linkUrl}>
        <CategoryIcon imageUrl={imageUrl} height="40" />
        <div className="mt-10">
          {name}
        </div>
      </S.FlexAnchor>
    </S.Item>
  );
}

function Nav(): JSX.Element {
  const [isOpen, setIsOpen] = useState(true);
  const categories = useSelector(selectCategories());

  return (
    <S.Context isOpen={isOpen}>
      <S.Trigger onClick={e => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </S.Trigger>
      <S.Movable>
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
      </S.Movable>
    </S.Context>
  )
}

export default Nav;
