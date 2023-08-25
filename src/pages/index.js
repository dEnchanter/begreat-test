import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/login');
  }, []);

  return null; // or a loading spinner if you want
};

export default Home;