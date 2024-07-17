export async function getData(endpoint: string) {
  try {
    const res = await fetch(`https://dimed.vn.ua/api${endpoint}`);

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
