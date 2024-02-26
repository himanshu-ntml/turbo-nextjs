import { Suspense } from 'react';
import Time from '../components/Time';

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Time />
    </Suspense>
  );
};

export default page;
