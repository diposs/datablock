import { Center } from '@mantine/core';
import { useFocusTrap } from '@mantine/hooks';
import {SearchBar} from  '../inputs/searchbar';


export const SearchContainer = ({ ...rest }) =>  {
    const focusTrapRef = useFocusTrap();
    return (
        <Center ref={focusTrapRef} { ...rest }>
            <SearchBar/>
        </Center>
    );
}
