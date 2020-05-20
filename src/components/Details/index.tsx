import React from 'react';
import Caption from '@/components/Caption';
import CategoryIcon from '@/components/CategoryIcon';
import ProfilePic from '@/components/ProfilePic';
import { useSelector } from 'react-redux';
import { Link, Space } from '@/styles/components';
import { RouterLink } from 'best-react-router';
import { selectCategoryBySlug } from '@/store/selectors';
import * as S from './styles';

function Details(props) {
  const { name, imageUrl, captions, categorySlug, isLoading } = props;

  const category = useSelector(selectCategoryBySlug(categorySlug));

  return (
    <S.Context isLoading={isLoading}>
      <div>
        <S.RelativeFlex>
          <ProfilePic
            imageUrl={imageUrl}
            size="180"
            isRounded={true}
          />
          <S.BottomRight>
            <CategoryIcon
              imageUrl={category.imageUrl}
              height="30"
            />
          </S.BottomRight>
        </S.RelativeFlex>
        <div>
          <header className="center">
            {name}
          </header>
        </div>
      </div>
      <div>
        <S.RelativeFlex column>
          {captions.map(item => (
            <Caption label={item.caption} key={item.caption}>
              {item.children}
            </Caption>
          ))}
        </S.RelativeFlex>
        <Space />
        <Link>
          <RouterLink to={{ path: category.linkUrl }}>
            &laquo; all {category.name}
          </RouterLink>
        </Link>
      </div>
    </S.Context>
  )
}

export default Details;
