import React from 'react';
import { Header} from '@mantine/core';
import { Props } from '../interfaces/interface'
import  useStyles  from './header.style'

export const FirstHeader: React.FC<Props> = ({ logoSrc, backgroundImage }) => {
  const { classes } = useStyles();
  return (
<Header height='10vh' className={classes.styles21}
>
  
</Header>
  );
};  