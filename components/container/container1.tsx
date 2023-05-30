import { Center } from '@mantine/core';
import { useFocusTrap } from '@mantine/hooks';
import {SearchBar} from  '../inputs/searchbar';
import { useBoundStore} from '../../stores/datastate'
import useStore from '../../stores/hooks/useStore'

export function SearchContainer() {
    const focusTrapRef = useFocusTrap();
    const openedburgerchecker = useStore(useBoundStore,(state) => state.mobilemenucontrol);
    return (
        <Center ref={focusTrapRef} h={openedburgerchecker ? '46vh' : '97vh'}>
            <SearchBar/>
        </Center>
    );
}
