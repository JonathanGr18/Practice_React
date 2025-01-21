// Ejerisio 1
// export default function Clock({ time }) {
//   const validTime = time instanceof Date && !isNaN(time.getTime()) ? time : new Date();

//   let hours = validTime.getHours();
//   let className;
//   if (hours >= 0 && hours <= 6) {
//     className = 'night';
//   } else {
//     className = 'day';
//   }
//   return (
//     <h1 className={className}>
//       {validTime.toLocaleTimeString()}
//     </h1>
//   );
// }

// EJERCISIO 2
// import Profile from './Profile.js';

// export default function App() {
//   return (
//     <>
//       <Profile person={{
//         imageId: 'lrWQx8l',
//         name: 'Subrahmanyan Chandrasekhar',
//       }} />
//       <Profile person={{
//         imageId: 'MK3eW3A',
//         name: 'Creola Katherine Johnson',
//       }} />
//     </>
//   )
// }

// EJERCISIO 3
import { useState, useEffect } from 'react';
import StoryTray from './StoryTray.js';

let initialStories = [
  {id: 0, label: "Historia de Ankit" },
  {id: 1, label: "Historia de Taylor" },
];

export default function App() {
  let [stories, setStories] = useState([...initialStories])
  let time = useTime();

  // PISTA: Evita que la memoria crezca por siempre mientras lees documentos.
  // Estamos rompiendo nuestras propias reglas aquí.
  if (stories.length > 100) {
    stories.length = 100;
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        textAlign: 'center',
      }}
    >
      <h2>Son las {time.toLocaleTimeString()} ahora.</h2>
      <StoryTray stories={stories} />
    </div>
  );
}

function useTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date()); }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}
