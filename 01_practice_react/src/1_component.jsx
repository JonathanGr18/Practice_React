import { getImageUrl } from './utils.js';

function Profile({
    id,
    name,
    profession,
    awards,
    discovery,
    size}) {
  let sizeImg= 's';
  if (size > 90) {
    sizeImg = 'b';
  }
  return (
  <section>
    <h2>{name}</h2>
    <img
      className="avatar"
      src={getImageUrl(id, sizeImg)}
      alt={"Foto de " + name}
      width={size}
      height={size}
    />
    <ul>
      <li><b>Profesión: </b> {profession}</li>
      <li><b>Premios: {awards.length} </b>({awards.join(", ")})</li>
      <li><b>Descubrió: </b> {discovery}</li>
    </ul>
  </section>
    
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Científicos Notables</h1>
      <Profile
      // PROPS FOR Profile COMPONENT
        id="szV5sdG"
        name="Maria Skłodowska-Curie"
        profession="física y química"
        awards={[
          'Premio Nobel de Física',
          'Premio Nobel de Química',
          'Medalla Davy',
          'Medalla Matteucci'
        ]}
        discovery="polonio (elemento químico)"
        size={40}
      />
      <Profile
        id='YfeOqp2'
        name='Katsuko Saruhashi'
        profession='geoquímico'
        discovery="un método para medir el dióxido de carbono en el agua de mar"
        awards={[
          'Premio Miyake de geoquímica',
          'Premio Tanaka'
        ]}
        size={120}
      />
    </div>
  );
}
