import React from 'react';

import CodepenIcon from './codepen';
import GithubIcon from './github';
import InstagramIcon from './instagram';
import LinkedInIcon from './linkedin';
import TwitterIcon from './twitter';

export interface FormattedIconProps {
  name: string;
}

const FormattedIcon: React.FC = ({ name }: FormattedIconProps) => {
  switch (name) {
    case 'Github':
      return <GithubIcon />;
    case 'Linkedin':
      return <LinkedInIcon />;
    case 'Codepen':
      return <CodepenIcon />;
    case 'Instagram':
      return <InstagramIcon />;
    case 'Twitter':
      return <TwitterIcon />;
    default:
      return <GithubIcon />;
  }
};

export default FormattedIcon;
