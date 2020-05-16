import React from 'react';
import * as S from './styles';

function CategoryIcon(props) {
  const { alt, imageUrl, height, isTransparent } = props;

  return (
    <S.Context isTransparent={isTransparent}>
      <S.Img
        src={imageUrl}
        alt={alt}
        height={height}
      />
    </S.Context>
  );
}

export default CategoryIcon;
