'use client';

import { useEffect, useState } from 'react';

export default function Time() {
  const [time, setTime] = useState(null);
  useEffect(() => {
    fetch('/api/time')
      .then((res) => res.json())
      .then((json) => setTime(json.time));
  }, []);
  return <div>{time}</div>;
}
