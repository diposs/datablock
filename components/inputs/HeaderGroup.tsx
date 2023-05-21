import {Group} from '@mantine/core';
import { HeaderLogo } from '../images/logo';
import { Texto } from '../Text/HeaderText';

export function HeadGroup() {
return (
    <Group spacing="xs">
        <HeaderLogo/>
        <Texto/>
    </Group>
);
}

