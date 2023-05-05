import { SetStateAction, useState } from 'react';
import { Input } from '@mantine/core';

export function SearchBar() {
  const [query, setQuery] = useState('');

  function handleQueryChange(event: { target: { value: SetStateAction<string>; }; }) {
    setQuery(event.target.value);
  }

  return (
    <Input
      placeholder="Search"
      value={query}
      onChange={handleQueryChange}
      variant="filled"
    />
  );
}