import React from 'react';
import * as S from './styles';

function ProfilePic(props) {
  const { alt, imageUrl, size, isRounded } = props;

  return (
    <S.Context isRounded={isRounded}>
      <S.Img size={size}>
        <img
          src={imageUrl}
          alt={alt}
          height={size}
        />
      </S.Img>
    </S.Context>
  )
}

export default ProfilePic;
