import Statistics from "./Statistics";


export default function StatsList({ items, title} ) {
   return( <section >
    {title && <h2 >{title}</h2>}
    <ul class="stat-list">
        {items.map (item =>(
           
               <Statistics
               key ={item.id}
               label ={item.label}
               percentage = {item.percentage}
           />
         
        ))}
   
  </ul>
  </section>
   );
}
   

