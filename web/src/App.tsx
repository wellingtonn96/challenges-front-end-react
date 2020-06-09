import React from "react";

import Form from "./src/pages/Form";
export default function App() {
  return <Form />;
}

// import React, { useState, useEffect } from "react";

// interface repositorie {
//   id: string;
//   name: string;
//   favorite: boolean;
// }

// function App() {
//   const [repositories, setRepositories] = useState<repositorie[]>([]);
//   const [countFavorites, setCountFavorities] = useState(0);

//   async function handleApiGitHub() {
//     const response = await fetch(
//       "http://api.github.com/users/wellingtonn96/repos"
//     );
//     const data = await response.json();

//     return data;
//   }

//   function handlefaforite(id: string) {
//     const newRepositories = repositories.map((repo) => {
//       return repo.id === id ? { ...repo, favorite: !repo.favorite } : repo;
//     });

//     setRepositories(newRepositories);
//   }

//   useEffect(() => {
//     const reposFavorites = repositories.filter((repo) => repo.favorite);

//     setCountFavorities(reposFavorites.length);
//   }, [repositories]);

//   useEffect(() => {
//     handleApiGitHub().then((response) => {
//       setRepositories(response);
//     });
//   }, []);

//   return (
//     <div>
//       <p>
//         {countFavorites > 0
//           ? `você tem ${countFavorites} repositorios favorito(s)`
//           : "você não tem nenhum repositorio favorito"}
//       </p>
//       <ul>
//         {repositories.map((item) => (
//           <li key={item.id}>
//             {item.name} =>
//             {item.favorite && <span style={{ color: "green" }}>Favorito</span>}
//             <button type="button" onClick={() => handlefaforite(item.id)}>
//               favoritar
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
