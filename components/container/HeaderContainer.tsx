import { Container,Modal,TextInput,Button,Stack, Loader} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import  useStyles  from '../style/container.style'
import { HeadGroup } from '../inputs/HeaderGroup';
import { MenuGroup } from '../inputs/MenuGroup';
import { GsButton } from '../buttons/GSButton';
import { Burgy } from '../inputs/burger';
import { useAuth, usePolybase, useIsAuthenticated } from "@polybase/react";

export function HeaderContainer()  {
  const { classes } = useStyles();
  const { auth } = useAuth();
  const [opened, { open, close }] = useDisclosure(false);
  const [isLoggedIn] = useIsAuthenticated();
  const polybase = usePolybase(); 
  const signInUser =  async() => {
    const res = await auth.signIn();
    let publicKey: any  = res!.publicKey;
        try {
            const user = await polybase.collection('User').record(publicKey).get();
        } catch (e) {
          console.log(e);
        }
    }


  return (
  <Container className={classes.inner} fluid>
    <HeadGroup/>
    <MenuGroup/>
    {isLoggedIn ? (<>{opened ? <Loader color="violet" variant="bars"/> : <MenuGroup/> }</>) : ( <GsButton onClick={signInUser} /> )}
    <Burgy/>
    <Modal opened={opened} onClose={close} size="auto" centered
    withCloseButton={false} closeOnClickOutside={false}   >
    <TextInput 
        placeholder="Your name"
        label="Fullname"
        pb="1vh"
        />

        <Stack align="stretch" spacing="xs">
        <Button color="blue" size="lg">Sign Up Without Username</Button>
        <Button color="violet" size="lg">Sign Up</Button>
        <Button color="red" size="lg">Close</Button>
      </Stack>
      </Modal>
  </Container>
  );
}; 