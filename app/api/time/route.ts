export async function GET(request: Request) {
  // Helper function to create a delay
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  // Wait for 5 seconds before proceeding
  await delay(5000);

  return new Response(JSON.stringify({ time: new Date().toDateString() }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
