import React from 'react';
import { Header} from '@mantine/core';
import { Props } from '../interfaces/interface'
import  useStyles  from './header.style'

export const FirstHeader: React.FC<Props> = ({ logoSrc, backgroundImage }) => {
  const { classes } = useStyles();
  return (
<Header height='3vh' className={classes.styles21} pos="relative" sx={(theme) => ({
            backgroundImage: theme.fn.gradient({ from: '#5805C1', to: '#041c7152', deg: 180 }),
            color: theme.white,
          })}>
</Header>
  );
};  