import { Center,rem } from '@mantine/core';
import {SearchBar} from  '../inputs/searchbar';


export function SearchContainer() {
    return (
        <>
        <Center h={rem('97%')} >
            <SearchBar/>
        </Center>
        </>
    );
}
