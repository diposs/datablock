import { useState, useEffect } from 'react';
import { Container,Modal,Button,Stack,Burger,Drawer} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import  useStyles  from '../style/container.style'
import { HeadGroup } from '../inputs/HeaderGroup';
import { MenuGroup } from '../inputs/MenuGroup';
import { GsButton } from '../buttons/GSButton';
import { useAuth, usePolybase, useIsAuthenticated} from "@polybase/react";
import { useBoundStore } from '../../stores/datastate'
import useStore from '../../stores/hooks/useStore'

export function HeaderContainer()  {
  const { classes } = useStyles();
  const { auth } = useAuth();
  const [opened, { open, close }] = useDisclosure(false);
  const openedburger = useBoundStore((state) => state.mobilemenucontrol);
  const update = useBoundStore((state) => state.update);
  const toggled = (() => {update(!openedburger)})
  const [value, setValue] = useState<string | null | undefined>('');
  const [isLoggedIn] = useIsAuthenticated();
  const content = Array(12)
    .fill(0)
    .map((_, index) => <p key={index}>Drawer with scroll</p>);
  const polybase = usePolybase();
  const signInUser =  async() => {
    const res = await auth.signIn();
    let publicKey: any  = res!.publicKey;
    };
  useEffect(() => {
    auth!.onAuthUpdate((authState) => {
      console.log(authState | 'dud', 'dipotest');
      if (authState!) {
        setValue(authState.publicKey);
      } else {
        setValue('');
      }
    })
  })
  return (
  <Container className={classes.inner} fluid>
    <HeadGroup/>
    <MenuGroup/>
    {isLoggedIn ? (<>{opened ? <>jj</> :<>dd</>}</>) : ( <GsButton onClick={signInUser} /> )}
    <Burger opened={openedburger} onClick={toggled} className={classes.burgerCss} />
    <Modal opened={opened} onClose={close} size="auto" centered withCloseButton={false} closeOnClickOutside={false}>
      <Stack align="stretch" spacing="xs">
        <Button color="blue" size="lg">Sign Up Without Username</Button>
        <Button color="violet" size="lg">Sign Up</Button>
        <Button color="red" size="lg">Close</Button>
      </Stack>
    </Modal>
    <Drawer opened={openedburger} onClose={toggled} classNames={{root: classes.burgerCss, content: classes.controldd,}} position="bottom" size='60vh' title="  " withCloseButton={false}>
      {content}
    </Drawer>
  </Container>
  );
}; 
