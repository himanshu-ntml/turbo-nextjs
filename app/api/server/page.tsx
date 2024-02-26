export default async function Page() {
  const res = await fetch('http://localhost:3001/api/time');
  let data = await res.json();
  const appVersion = process.env.NEXT_PUBLIC_APP_VERSION;

  return (
    <>
      <div>{JSON.stringify(data)}</div>
      <div className='flex'>version {appVersion}</div>
    </>
  );
}
