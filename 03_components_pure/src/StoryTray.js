export default function StoryTray({ stories }) {
   // Otra opcion es copiar el array sin afectar el array original
   let copyStories = stories.slice();
   copyStories.push({
      id: 'create',
      label: 'Crear historia',
   })
   return (
     <ul>
       {copyStories.map(story => (
         <li key={story.id}>
           {story.label}
         </li>
       ))}
       {/* renderizar dentro del storyTray */}
       {/* <li>Crear historias</li> */}
     </ul>
   );
 }
 