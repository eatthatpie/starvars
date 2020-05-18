import React from 'react';
import * as S from './styles';

function ProfilePic(props) {
  const { alt, imageUrl, size, isRounded } = props;

  return (
    <S.Context isRounded={isRounded}>
      <S.Img
        size={size}
        alt={alt}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
    </S.Context>
  )
}

export default ProfilePic;
