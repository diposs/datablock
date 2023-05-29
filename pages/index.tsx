import { GetStaticProps } from 'next'
import { initializeStore } from '../stores/datastate'
import {SearchContainer} from '../components/container/container1'
export default function Home() {
  return (
      <SearchContainer />
  );
}

export const getStaticProps: GetStaticProps = () => {
  const zustandStore = initializeStore()
  return {
    props: {
      // the "stringify and then parse again" piece is required as next.js
      // isn't able to serialize it to JSON properly
      initialZustandState: JSON.parse(JSON.stringify(zustandStore.getState())),
    },
  }
}
