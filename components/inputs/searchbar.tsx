import { SetStateAction, useState } from 'react';
import { Input } from '@mantine/core';

export function SearchBar() {
  const [query, setQuery] = useState('');

  function handleQueryChange(event: { target: { value: SetStateAction<string>; }; }) {
    setQuery(event.target.value);
  }

  return (
    <Input
      miw="60vw"
      placeholder="Search"
      value={query}
      onChange={handleQueryChange}
      variant="filled"
      radius="xl"
      size="lg"
    />
  );
}