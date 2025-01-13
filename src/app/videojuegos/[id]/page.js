"use client";
import React from "react";

const videojuegos = [
  { id: 1, titulo: "Final Fantasy VII", generos: ["RPG"], desarrollador: "Square Enix", imagen: "/rpg1.jpg", plataformas: [{ nombre: "PlayStation", link: "https://www.playstation.com/es-es/games/final-fantasy-vii/" }, { nombre: "PC", link: "https://store.steampowered.com/app/39150/FINAL_FANTASY_VII/" }, { nombre: "Xbox", link: "https://www.xbox.com/es-ES/games/store/final-fantasy-vii/BWKXQC5BL5R1" }] },
  { id: 2, titulo: "Albion Online", generos: ["RPG"], desarrollador: "Sandbox Interactive", imagen: "/rpg2.jpg", plataformas: [{ nombre: "PC", link: "https://albiononline.com/en/download" }] },
  { id: 3, titulo: "Diablo III", generos: ["RPG"], desarrollador: "Blizzard Entertainment", imagen: "/rpg3.jpg", plataformas: [{ nombre: "PlayStation", link: "https://store.playstation.com/es-es/search/diablo3" }, { nombre: "PC", link: "https://us.shop.battle.net/en-us/product/diablo-iii" }, { nombre: "Xbox", link: "https://www.xbox.com/es-ES/games/store/diablo-iii-reaper-of-souls-ultimate-evil-edition/C2R5R5P2DF3C/0001" }] },
  { id: 4, titulo: "Elden Ring", generos: ["Fantasy"], desarrollador: "FromSoftware", imagen: "/fantasy1.jpg", plataformas: [{ nombre: "PlayStation", link: "https://www.playstation.com/es-es/games/elden-ring/" }, { nombre: "Xbox", link: "https://www.xbox.com/es-es/games/elden-ring" }, { nombre: "PC", link: "https://store.steampowered.com/app/1245620/ELDEN_RING/" }] },
  { id: 5, titulo: "One Piece Odyssey", generos: ["Fantasy"], desarrollador: "Bandai Namco", imagen: "/fantasy2.jpg", plataformas: [{ nombre: "PlayStation", link: "https://www.playstation.com/es-es/games/one-piece-odyssey/" }, { nombre: "PC", link: "https://store.steampowered.com/app/814000/ONE_PIECE_ODYSSEY/" }, { nombre: "Xbox", link: "https://www.xbox.com/en-US/games/store/one-piece-odyssey/9PND6XZTCZWT/0010" }] },
  { id: 6, titulo: "Wild Hearts", generos: ["Fantasy"], desarrollador: "Electronic Arts", imagen: "/fantasy3.jpg", plataformas: [{ nombre: "PlayStation", link: "https://www.playstation.com/es-es/games/wild-hearts/" }, { nombre: "PC", link: "https://store.steampowered.com/app/1938010/WILD_HEARTS/" }, { nombre: "Xbox", link: "https://www.xbox.com/en-US/games/store/wild-hearts-standard-edition/9NTFPTBXDDT3/0010" }] },
  { id: 7, titulo: "Counter Strike", generos: ["Shooter"], desarrollador: "Valve", imagen: "/shooter1.jpg", plataformas: [{ nombre: "PC", link: "https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/" }] },
  { id: 8, titulo: "Black Ops 3", generos: ["Shooter"], desarrollador: "Activision", imagen: "/shooter2.jpg", plataformas: [{ nombre: "PlayStation", link: "https://www.playstation.com/es-es/games/call-of-duty-black-ops-iii/" }, { nombre: "PC", link: "https://store.steampowered.com/app/311210/Call_of_Duty_Black_Ops_III/" }] },
  { id: 9, titulo: "Overwatch 2", generos: ["Shooter"], desarrollador: "Blizzard Entertainment", imagen: "/shooter3.jpg", plataformas: [{ nombre: "PC", link: "https://us.shop.battle.net/en-us/family/overwatch" }, { nombre: "Xbox", link: "https://www.xbox.com/en-us/games/overwatch" }] },
];

export default function VideojuegoPage({ params }) {
  const { id } = React.use(params);
  const videojuego = videojuegos.find((juego) => juego.id === parseInt(id, 10));

  if (!videojuego) {
    return <p>Videojuego no encontrado</p>;
  }

  return (
    <div>
      <h1>{videojuego.titulo}</h1>
      <img src={videojuego.imagen} alt={videojuego.titulo} />
      <h3>Géneros:</h3>
      <ul>
        {videojuego.generos.map((genero, index) => (
          <li key={index}>{genero}</li>
        ))}
      </ul>
      <h3>Desarrollador:</h3>
      <p>{videojuego.desarrollador}</p>
      <h3>Plataformas:</h3>
      <ul>
        {videojuego.plataformas.map((plataforma, index) => (
          <li key={index}>
            <a href={plataforma.link} target="_blank" rel="noopener noreferrer">
              {plataforma.nombre}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
