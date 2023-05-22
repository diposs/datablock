import { Container} from '@mantine/core';
import  useStyles  from '../style/container.style'
import { HeadGroup } from '../inputs/HeaderGroup';
import { MenuGroup } from '../inputs/MenuGroup';
import { GsButton } from '../buttons/GSButton';
import { Burgy } from '../inputs/burger';
import { useAuth } from "@polybase/react";
import { useIsAuthenticated } from "@polybase/react";

export function HeaderContainer()  {
  const { classes } = useStyles();
  const { auth } = useAuth();
  const [isLoggedIn] = useIsAuthenticated();
  return (
  <Container className={classes.inner} fluid>
    <HeadGroup/>
    <MenuGroup/>
    {isLoggedIn ? <MenuGroup/> : <GsButton onClick={() => auth.signIn()} />}
    <Burgy/>
  </Container>
  );
}; 