'use client';
// import Button from './components/Button';
// import Time from './components/Time';

export default function Page() {
  // Access the version number from environment variables
  const appVersion = process.env.NEXT_PUBLIC_APP_VERSION;

  return (
    <>
      {/* <Button onClick={() => alert('Clicked!')} className='my-button'>
        Click Me!!!!
      </Button> */}
      <div className='flex'>version {appVersion}</div>
      {/* <Time/> */}
    </>
  );
}
