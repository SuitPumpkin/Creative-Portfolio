export default function Modulo3() {
  return (
    <div className="page">
      <h2 className="title">MÓDULO 3: Experimentación con Formatos y Pilares Narrativos</h2>
      <p className="intro">
        En este módulo exploré la creatividad narrativa a través de historias satíricas, análisis musical
        y dilemas interactivos. Cada actividad permitió experimentar con distintos formatos y
        profundizar en la manera de involucrar al público.
      </p>

      {/* --- ACTIVIDAD 1 --- */}
      <section className="activity">
        <h3>Actividad 1: Huevos de Pascua</h3>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8KJN3c73QoiEgOWL6ixSk8cbLjvpA8gSQ0w&s"
          alt="Huevos de Pascua narrativos"
          className="activity-img"
        />
        <p>
          En esta actividad hice la creación de una historia satírica, titulada <b>'El hombre que rompió Game Pass'</b>,
          basándome en una noticia relacionada con el aumento de precio de Xbox Game Pass. El protagonista es
          <b> Ray (RayButterfly)</b>, un "gamer profesional del ahorro extremo", cuya idea fue aprovechar la
          promoción de un mes gratis creando una cuenta nueva cada vez que se acababa el mes.
        </p>
        <p>
          Para ganar dinero, Ray vendía estas cuentas a sus amigos por 50 pesos, lo que lo obligó a crear 123
          correos nuevos cada mes, saturando los servidores de Xbox y causando miles de dólares en pérdidas.
          Phil Spencer y su equipo lograron identificarlo gracias a la secuencia de correos (RaymundoPerez001, 002…).
          La empresa concluyó subiendo el precio de Game Pass a $29.99 y retirando permanentemente la promoción,
          dejando un mensaje directo a Ray por el uso inapropiado de la oferta.
        </p>
      </section>

      {/* --- ACTIVIDAD 2 --- */}
      <section className="activity">
        <h3>Actividad 2: Los pilares narrativos en la música</h3>
        <img
          src="https://colectivosonoro.com/wp-content/uploads/2023/10/maneskin-rarezas-960x640.jpg"
          alt="Análisis musical"
          className="activity-img"
        />
        <p>
          En esta actividad hice el análisis del <b>Pilar Emocional</b> de la canción <b>'Baby Said'</b> de Måneskin.
          La canción transmite una intensa carga emocional de deseo, frustración y desconexión emocional, evidenciando
          un desequilibrio relacional.
        </p>
        <p>
          El "yo" lírico intenta iniciar una conversación íntima haciendo preguntas sobre la madre, color favorito,
          sueños o ambiciones, pero la otra persona responde con rechazo y exigencias sexuales, evitando conectarse
          emocionalmente. Los versos clave que reflejan esta dinámica incluyen: 
          <i>“Baby said: ‘When you're talking, I go dead / Shut your mouth, give me your head’”</i> y 
          <i>“I was crying and loving crying and loving while you were Just coming and howling at the moon”</i>.
        </p>
      </section>

      {/* --- ACTIVIDAD 3 --- */}
      <section className="activity">
        <h3>Actividad 3: Contraposición Interactiva</h3>
        <img
          src="https://media.vogue.mx/photos/66945e61e14c9f3df9d2251f/16:9/w_2560%2Cc_limit/arrancame-la-vida-donde-ver.jpg"
          alt="Dilema interactivo"
          className="activity-img"
        />
        <p>
          En esta actividad hice el diseño de una sinopsis narrativa ambientada en los años 60, donde la
          protagonista <b>Charlotte López</b> enfrenta un dilema vital. Fue unida a Chris por un matrimonio
          arreglado, pero el padre de Chris, hombre adinerado y respetado, trama un plan para alejarla de
          sus dos hijos.
        </p>
        <p>
          El dilema interactivo se centra en dos opciones principales con consecuencias distintas:
        </p>
        <ul>
          <li>
            <b>Opción A - Guardar silencio y aceptar las reglas familiares (Control)</b>: Charlotte calla y su
            comunidad la apoya en apariencia, aunque la aísla. Vive con la esperanza de que Chris regrese, ve a
            sus hijos una vez al año y mantiene su lugar en la comunidad, pero pierde libertad y rol de madre.
          </li>
          <li>
            <b>Opción B - Denunciar la desaparición y buscar ayuda (Libertad)</b>: Charlotte denuncia, pero nadie
            le cree; contrata un investigador privado y enfrenta rechazo familiar. Si inicia un proceso legal
            internacional y viaja a París, recupera a sus hijos (aunque pierde la aceptación familiar). Si lo
            rechaza demasiado tarde, la pérdida es irreversible.
          </li>
        </ul>
        <p>
          Esta actividad mostró cómo las decisiones valientes tienen un precio y cómo el amor y la libertad
          exigen elegir conscientemente entre distintas opciones.
        </p>
      </section>

      <p className="footer-link">
        📁 Ver todos los archivos del módulo:{' '}
        <a
          href="https://drive.google.com/drive/folders/1YzEGHQFvOUkREOoiXyZYmhfKeE7dCDuO?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Abrir carpeta de Módulo 3
        </a>
      </p>
    </div>
  );
}
