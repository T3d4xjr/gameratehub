// app/generos/page.js
"use client";
import React from "react";
import Link from "next/link";

const generos = {
  RPG: [
    { id: 1, titulo: "Final Fantasy VII", imagen: "/rpg1.jpg" },
    { id: 2, titulo: "Albion Online", imagen: "/rpg2.jpg" },
    { id: 3, titulo: "Diablo III", imagen: "/rpg3.jpg" },
  ],
  Fantasy: [
    { id: 4, titulo: "Elden ring", imagen: "/fantasy1.jpg" },
    { id: 5, titulo: "One Piece Odyssey", imagen: "/fantasy2.jpg" },
    { id: 6, titulo: "Wild Hearts", imagen: "/fantasy3.jpg" },
  ],
  Shooter: [
    { id: 7, titulo: "Counter Strike", imagen: "/shooter1.jpg" },
    { id: 8, titulo: "Black Ops 3", imagen: "/shooter2.jpg" },
    { id: 9, titulo: "Overwatch 2", imagen: "/shooter3.jpg" },
  ],
};

export default function GenerosPage() {
  return (
    <div>
      <h1>Géneros</h1>
      {Object.keys(generos).map((genero) => (
        <div key={genero}>
          <h2><b>{genero}</b></h2>
          <div>
            {generos[genero].map((juego) => (
              <Link 
                key={juego.id} 
                href={`/videojuegos/${juego.id}`}
              >
                <img
                  src={juego.imagen}
                  alt={juego.titulo}
                  title={juego.titulo}
                />
                <span><b>{juego.titulo}</b></span>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
