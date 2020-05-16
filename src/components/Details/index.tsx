import React from 'react';
import Caption from '@/components/Caption';
import CategoryIcon from '@/components/CategoryIcon';
import ProfilePic from '@/components/ProfilePic';
import { Link, Space } from '@/styles/components';
import * as S from './styles';

function Details() {
  return (
    <S.Context>
      <div>
        <S.RelativeFlex>
          <ProfilePic
            imageUrl="https://ocs-pl.oktawave.com/v1/AUTH_2887234e-384a-4873-8bc5-405211db13a2/splay/2019/04/jar-jar-binks-gwiezdne-wojny-814x400.jpg"
            size="180"
            isRounded={true}
          />
          <S.BottomRight>
            <CategoryIcon
              imageUrl="/assets/group.svg"
              height="30"
            />
          </S.BottomRight>
        </S.RelativeFlex>
        <div>
          <header className="center">
            Captain Jar Jar Binks
          </header>
        </div>
      </div>
      <div>
        <S.RelativeFlex column>
          <Caption label="Species">
            Gungan
          </Caption>
          <Caption label="Planets">
            <Link>Earth</Link>
            <Link>Other Planet</Link>
            <Link>Naboo</Link>
          </Caption>
          <Caption label="Vehicles">
            <Link>Aston Martin</Link>
            <Link>Ford Mustang</Link>
          </Caption>
        </S.RelativeFlex>
        <Space />
        <Link>
          &laquo; all Characters
        </Link>
      </div>
    </S.Context>
  )
}

export default Details;
