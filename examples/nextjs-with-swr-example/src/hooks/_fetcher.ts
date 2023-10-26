/**
 * Fetch data from the server using the GET method and returns the response as JSON
 * @param url string
 * @returns (url: string) => Promise<any>
 */
export const fetcher = async (url: string) => {
  const res = await fetch(url, {
    headers: {
      "Common-header": "this is an example"
    },
  });
  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    // Attach extra info to the error object.
    throw new Error(res.statusText, { cause: await res.json() })
  }
  return res.json();
};
