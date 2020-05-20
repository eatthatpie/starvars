import React from 'react';
import * as S from './styles';

function Caption(props) {
  const { label, children } = props;

  return (
    <S.Context>
      <S.Label>
        {label}
      </S.Label>
      <S.Children>
        {children}
      </S.Children>
    </S.Context>
  )
}

export default Caption;
