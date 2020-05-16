import React from 'react';
import * as S from './styles';

function CategoryIcon(props) {
  const { alt, imageUrl, height } = props;

  return (
    <S.Context>
      <S.Img
        src={imageUrl}
        alt={alt}
        height={height}
      />
    </S.Context>
  );
}

export default CategoryIcon;
