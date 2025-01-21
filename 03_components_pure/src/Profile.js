import Panel from './Panel.js';
import { getImageUrl } from './utils.js';

export default function Profile({ person }) {
  return (
   // Manetener un componente puro con props inmutables
    <Panel>
      {/* PROPS con person = { person } */}
      <Header person={person}/> 
      <Avatar person={person}/>
    </Panel>
  )
}

// Recibe un objeto person con una propiedad name por una props
function Header({ person }) {
  return <h1>{person.name}</h1>;
}

function Avatar({ person }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={50}
      height={50}
    />
  );
}
