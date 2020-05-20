import React, { useState } from 'react';
import CategoryIcon from '@/components/CategoryIcon';
import { useSelector } from 'react-redux';
import * as S from './style';
import { selectCategories } from '@/store/selectors';
import { RouterLink, useRouteWatcher } from 'best-react-router';
import { getWindowWidth } from '@/helpers';

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
      <S.FlexAnchor>
        <RouterLink to={{ path: linkUrl }}>
          <CategoryIcon
            imageUrl={imageUrl}
            height="40"
            isTransparent={true}
          />
          <div className="mt-10">
            {name}
          </div>
        </RouterLink>
      </S.FlexAnchor>
    </S.Item>
  );
}

function Nav(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const categories = useSelector(selectCategories());

  // Hide nav on route change if the viewport width is less than 768px.
  useRouteWatcher(() => {
    if (getWindowWidth() <= 768) {
      setIsOpen(false);
    }
  })

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
