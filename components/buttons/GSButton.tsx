import { Button } from "@mantine/core";
import useStyles from '../style/GreaterThanSmall.style'

export const GsButton = ({ ...rest }) =>  {
    const { classes } = useStyles();
    return (
        <Button radius="xl" h={30}  className={classes.links} { ...rest }>GetStarted</Button>
    );
}