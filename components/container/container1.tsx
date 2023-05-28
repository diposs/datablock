import { Center } from '@mantine/core';
import {SearchBar} from  '../inputs/searchbar';


export const SearchContainer = ({ ...rest }) =>  {
    return (
        <>
        <Center { ...rest }>
            <SearchBar/>
        </Center>
        </>
    );
}
