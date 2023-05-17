import React from 'react';
import { Header} from '@mantine/core';
import { Props } from '../interfaces/interface'
import  useStyles  from './header.style'
import {NavyBar} from '../navigation/navbar'

export const FirstHeader: React.FC<Props> = ({ logoSrc, backgroundImage }) => {
  const { classes } = useStyles();
  return (
<Header height='25vh' className={classes.styles21} pos="relative">
<NavyBar/>
</Header>
  );
};  