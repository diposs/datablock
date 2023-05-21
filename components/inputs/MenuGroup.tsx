import {Group} from '@mantine/core';
import useStyles from '../style/GreaterThanSmall.style'

export function MenuGroup() {
const { classes } = useStyles();
return (
    <Group spacing="xs" className={classes.links} >
      Get Started
    </Group>
);
}

