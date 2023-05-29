import { Center } from '@mantine/core';
import { useFocusTrap } from '@mantine/hooks';
import {SearchBar} from  '../inputs/searchbar';
import { useStore } from '../../stores/datastate'

export function SearchContainer() {
    const focusTrapRef = useFocusTrap();
    const openedburgerchecker = useStore((store) => store.mobilemenucontrol);
    return (
        <Center ref={focusTrapRef} h={openedburgerchecker ? '60vh' : '97vh'}>
            <SearchBar/>
        </Center>
    );
}
