export async function getData(endpoint: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}${endpoint}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
  }
  const data = await res.json();
  return data;
}
