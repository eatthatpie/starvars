import React, { useState } from 'react';
import * as S from './styles';

function ProfilePic(props) {
  const { alt, imageUrl, size, isRounded } = props;

  const [isLoaded, setIsLoaded] = useState(!imageUrl);
  const [isReady, setIsReady] = useState(!imageUrl);

  const img = new Image();
  img.onload = () => {
    setIsLoaded(true);

    setTimeout(() => {
      setIsReady(true);
    }, 0);
  }

  setTimeout(() => {
    img.src = imageUrl;
  }, 0);

  return (
    <S.Context isRounded={isRounded} isLoaded={isLoaded} isReady={isReady}>
      {!isLoaded && <S.Loader size={size} />}
      <S.Img
        size={size}
        alt={alt}
        style={isLoaded ? { backgroundImage: `url(${imageUrl})` } : {}}
      />
    </S.Context>
  )
}

export default ProfilePic;
