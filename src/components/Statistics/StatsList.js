import Statistics from "./Statistics";
import propTypes from "prop-types";
import s from '../Statistics/Statistics.module.css';


export default function StatsList({ items, title} ) {
   return( 
   <section className={s.statistics} >
    {title && <h2 className={s.title}>{title}</h2>}
    <ul className={s.statsList}>
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
   
//========================== propTypes ===================
Statistics.propTypes = {
   title: propTypes.string,
   items: propTypes.arrayOf(
     propTypes.shape({
       id: propTypes.string.isRequired,
     }),
   ),
 };
