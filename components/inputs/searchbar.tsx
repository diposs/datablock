import { SetStateAction, useState } from 'react';
import { IconSearch } from '@tabler/icons-react';
import { Input } from '@mantine/core';
import { Searchiconright } from '../icons/searchIcon'
export function SearchBar() {
  const [query, setQuery] = useState('');

  function handleQueryChange(event: { target: { value: SetStateAction<string>; }; }) {
    setQuery(event.target.value);
  }

  return (
    <Input
      icon={< IconSearch size="2.125rem" />}
      rightSection={< Searchiconright /> }
      miw="60vw"
      placeholder="Search"
      value={query}
      onChange={handleQueryChange}
      variant="filled"
      radius="xl"
      size="xl"
    />
  );
}
