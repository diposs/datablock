import {FirstHeader} from '../components/header/header1';
import {SearchBar} from '../components/inputs/searchbar'
import {AppShell} from '@mantine/core';


export default function Home() {
  return (
    <>
    <AppShell header= {
      <>

      <FirstHeader logoSrc='' backgroundImage='' />
      <SearchBar />

      </>
    }>
    </AppShell>
    </>
  );
}