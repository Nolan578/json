const body = document.querySelector('body');
async function logMovies() {
  const response = await fetch("http://localhost:4004/main");
  const movies = await response.json();
  return movies;
}

const data = async () => {
  const movies = await logMovies();
  movies.map(item => body.innerHTML += `
<h1 class="mt-5">siz idiz ${item.id}</h1>
<h1>${item.hello} user</h1>

  `)
}

data();