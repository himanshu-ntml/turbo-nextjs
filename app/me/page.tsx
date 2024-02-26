const page = async () => {
  let date = new Date();
  let res = {};
  await fetch('https://dummyjson.com/products/1')
    .then((res) => res.json())
    .then((json) => (res = json));

  return (
    <div>
      {date.toISOString()}
      <br/>
      {JSON.stringify(res)}
    </div>
  );
};

export default page;
