export default async function fetchData(url) {
  const result = await fetch(url).then(response => response.json());

  return result;
}
