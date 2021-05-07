import React from 'react';
import { Instagram } from './Svg';
import { Youtube } from './Svg';
import { Twitter } from './Svg';

const IconWrapper = ({ children }) => {
  return <div className="w-8 bg-white rounded p-1">{children}</div>;
};

export const FooterIcons = () => {
  return (
    <div className="flex gap-4">
      {/* <div class="material-icons md-48">twitter</div> */}
      <IconWrapper>
        <Twitter />
      </IconWrapper>
      <IconWrapper>
        <Youtube />
      </IconWrapper>
      <IconWrapper>
        <Instagram />
      </IconWrapper>
    </div>
  );
};
