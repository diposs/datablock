import { useState, useEffect } from 'react';
import { Container,Modal,Button,Stack,Burger,Drawer,ScrollArea} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import  useStyles  from '../style/container.style'
import { HeadGroup } from '../inputs/HeaderGroup';
import { MenuGroup } from '../inputs/MenuGroup';
import { GsButton } from '../buttons/GSButton';
import { useAuth, usePolybase, useIsAuthenticated } from "@polybase/react";

export function HeaderContainer()  {
  const { classes } = useStyles();
  const { auth } = useAuth();
  const [opened, { open, close }] = useDisclosure(false);
  const [openedburger, { toggle }] = useDisclosure(false);
  const [value, setValue] = useState<string | null | undefined>('');
  const [isLoggedIn] = useIsAuthenticated();
  const content = Array(100)
    .fill(0)
    .map((_, index) => <p key={index}>Drawer with scroll</p>);
  const polybase = usePolybase(); 
  const signInUser =  async() => {
    const res = await auth.signIn();
    let publicKey: any  = res!.publicKey;
      try {
          const user = await polybase.collection('User').record(publicKey).get();
      } catch (e) {
        console.log(e);
      }
      toggle();
    }
  useEffect(() => {
    auth!.onAuthUpdate((authState) => {
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
    {isLoggedIn ? (<>{opened ? <>jj</> :<>{value}</>}</>) : ( <GsButton onClick={signInUser} /> )}
    <Burger opened={openedburger} onClick={toggle} className={classes.burgerCss} />
    <Modal opened={opened} onClose={close} size="auto" centered withCloseButton={false} closeOnClickOutside={false}>
      <Stack align="stretch" spacing="xs">
        <Button color="blue" size="lg">Sign Up Without Username</Button>
        <Button color="violet" size="lg">Sign Up</Button>
        <Button color="red" size="lg">Close</Button>
      </Stack>
    </Modal>
    <Drawer opened={openedburger} onClose={toggle} position="bottom" size='60vh' withCloseButton={false} scrollAreaComponent={ScrollArea.Autosize}>
      {content}
    </Drawer>
  </Container>
  );
}; 
