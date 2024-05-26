"use client";

import { useRouter } from 'next/router';

const FirstPage = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push({
      pathname: '/second-page',
      query: { param1: 'value1', param2: 'value2' },
    });
  };

  return (
    <div>
      <button onClick={handleNavigation}>Go to Second Page</button>
    </div>
  );
};

export default FirstPage;
