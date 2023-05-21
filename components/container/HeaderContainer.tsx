import React from 'react';
import { Container} from '@mantine/core';
import  useStyles  from '../style/container.style'
import { HeadGroup } from '../inputs/HeaderGroup';
import { MenuGroup } from '../inputs/MenuGroup';
import { GsButton } from '../buttons/GSButton';
import { Burgy } from '../inputs/burger';

export function HeaderContainer()  {
  const { classes } = useStyles();
  return (
  <Container className={classes.inner} fluid>
    <HeadGroup/>
    <MenuGroup/>
    <GsButton/>
    <Burgy/>
  </Container>
  );
};  