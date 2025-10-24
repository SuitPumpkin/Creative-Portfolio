import React from "react";

export default function Home() {
  return (
    <div className="container page">
      <h1 className="title">Bienvenido a mi Portafolio de Creatividad Narrativa</h1>
      <img
          src="https://media2.giphy.com/media/v1.Y2lkPTZjMDliOTUycG1qbnU1N2drdXBicGZ2amwxenpjcmJxYzhpM29rd3l5NnB2OGJqYiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/wzJ67MJMk6UMM/giphy.gif"
          alt="Bienvenido"
          className="welcome-img"
        />
      <p className="intro">
        Aquí encontrarás mis trabajos realizados en los tres módulos de la materia de creatividad narrativa.
        Utiliza los enlaces de navegación para explorar cada módulo y descubrir las actividades y proyectos que he desarrollado.
      </p>
    </div>
  );
}
