import {Burger} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import useStyles from '../style/SmallerThanSmall.style'



export function Burgy() {
    const [opened, { toggle }] = useDisclosure(false);
    const { classes } = useStyles();
return  (
    <Burger opened={opened}
    onClick={toggle}
    className={classes.burgerCss}
    />
);
}