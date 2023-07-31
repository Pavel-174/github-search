async function fetchResults(login) {
  try {
    const response = await fetch(`https://api.github.com/search/users?q=${login}`);
    const json = await response.json();
    return json.items || [];
  } catch (e) {
    throw new Error(e);
  }
}

export default fetchResults;