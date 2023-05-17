import React from 'react';
import { Header} from '@mantine/core';
import { Props } from '../interfaces/genHeadInterface'
import  useStyles  from './genHead.style'

export const FirstHeader: React.FC<Props> = ({ logoSrc, backgroundImage }) => {
  const { classes } = useStyles();
  return (
<Header height='10vh' className={classes.styles22}
>
  
</Header>
  );
};  