import { Button } from "@mantine/core";
import useStyles from '../style/GreaterThanSmall.style'

export function GsButton() {
    const { classes } = useStyles();
    return (
        <Button radius="xl" h={30}  className={classes.links}>GetStarted</Button>
    );
}