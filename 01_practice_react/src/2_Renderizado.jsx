function Item({ name, isPacked, important }) {
   // EJEMPLO DE LOS 3 METODOS DE RENDERIZADO
   // METODO CON IF
   // let itemContent = name;
   // if (isPacked) {
   //    itemContent = <del>{name + ' ✅'}</del>;
   // }
   // EJEMPLO DE LOS ULTIMOS 2 ITEMS 
   let part, cont, age;
   if (name === 'té') {
      part= 'hoja';
      cont= '15–70 mg/taza';
      age= '4,000+ años';
   } else if (name === 'café') {
      part= 'grano';
      cont= '80–185 mg/taza';
      age= '1,000+ años';
   } 
   return(
   // EJEMPLO DE LOS 3 METODOS DE RENDERIZADO
   // METODO CON TERNARIO
      // <li className="item">
      //    {isPacked 
      //    ? (<del>{name +' ✅' }</del>)
      //    : (name + ' ❌ ')
      //    } 
      // </li>
   // METODO CON AND
      // <li className="item">
      //    {isPacked && ' ✅'}
      //    {name} 
      //    {important > 0 &&
      //       <i> (Importancia: {important})</i>}
      // </li>
   // METODO CON IF
   //    <li className="item">
   //       {itemContent}
   //    </li>
   // EJEMPLO DE LOS ULTIMOS 2 ITEMS
      <section>
         <h1>{name}</h1>
         <dl>
            <dt>Parte de la planta</dt>
            <dd>{part}</dd>
            <dt>Contenido del cafeina</dt>
            <dd>{cont}</dd>
            <dt>Antigüedad</dt>
            <dd>{age}</dd>
         </dl>
      </section>
   );
 }
 
 export default function PackingList() {
   return (
     <section>
       <h1>Lista de equipaje de Sally Ride</h1>
       <ul>
         {/* <Item 
           isPacked={true} 
           name="Traje de vuelo" 
           important = {9}
         />
         <Item 
           isPacked={true} 
           name="Casco con dorado a la hoja" 
           important = {0}
         />
         <Item 
           isPacked={false} 
           name="Fotografía de Tam" 
           important = {6}
         /> */}
         <Item name="té" />
         <Item name="café" />
       </ul>
     </section>
   );
 }
 