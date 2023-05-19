import { Center } from '@mantine/core';
import {SearchBar} from  '../inputs/searchbar';


export function SearchContainer() {
    return (
        <>
        <Center h="97vh"       
          sx={(theme) => ({
            backgroundImage: theme.fn.gradient({ from: 'red', to: 'orange', deg: 45 }),
            color: theme.white,
          })}>
            <SearchBar/>
        </Center>
        </>
    );
}