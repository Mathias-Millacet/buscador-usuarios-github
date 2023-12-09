export const searchByUserAndRepository = async (searchWord: string) => {
  // Preparar ambas promesas
  const usersPromise = fetch(
    `https://api.github.com/search/users?q=${searchWord}`
  ).then((r) => r.json());
  const repositoriesPromise = fetch(
    `https://api.github.com/search/repositories?q=${searchWord}`
  ).then((r) => r.json());

  // Ejecutar promesas simultáneamente
  const [users, repositories] = await Promise.all([
    usersPromise,
    repositoriesPromise,
  ]);

  return { users: users?.items, repositories: repositories?.items };
};

export const getUserInformation = async (userName?: string) => {
  const data = await fetch(`https://api.github.com/users/${userName}`).then(
    (res) => res.json()
  );

  return data;
};

export const getRepositoryInformation = async (repoUrl: string | null) => {
  const data = await fetch(String(repoUrl)).then((res) => res.json());
  return data;
};

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  _id: "6567bb778f55cc4f1f80ed34",
  searchTerm: "Ejemplo 6565626",
  results: [
    {
      title: "Hola mundo",
      description: "Descripción 54654",
      avatar_url: "",
      login: "Hola",
      location: "Montevideo",
      followers: "306",
      following: "504",
    },
  ],
  timestamp: "2023-11-02T14:30:00.000Z",
  __v: 0,
});

const requestOptions: RequestInit = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow" as RequestRedirect, // Convertir el valor a RequestRedirect
};

const apiUrl = "http://localhost:4001/api/search"; // Ajusta el protocolo según tu configuración

fetch(apiUrl, requestOptions)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }
    return response.text() as Promise<string>; // Especifica el tipo de la respuesta
  })
  .then((result) => console.log(result))
  .catch((error) => console.error("Error:", error));

const searchTerm = "userName"; // Reemplaza con tu término de búsqueda
const userSearchResult = await searchByUserAndRepository(searchTerm);

// Supongamos que quieres guardar el primer usuario y el primer repositorio encontrados
const firstUser = userSearchResult.users?.[0];
const firstRepository = userSearchResult.repositories?.[0];

if (firstUser && firstRepository) {
  // Obtiene información detallada del usuario y el repositorio
  const userInfo = await getUserInformation(firstUser.login);
  const repoInfo = await getRepositoryInformation(firstRepository.html_url);

  // Crea un objeto para enviar al servidor
  const dataToSave = {
    searchTerm: searchTerm,
    results: [
      {
        user: userInfo,
        repository: repoInfo,
      },
    ],
  };

  // Convierte el objeto en JSON
  const jsonData = JSON.stringify(dataToSave);

  // ... Resto del código para enviar al servidor

  // Reemplaza la llamada a fetch con el código para enviar al servidor
  // ...

  console.log("Datos guardados:", jsonData);
} else {
  console.log("No se encontraron resultados para la búsqueda.");
}
