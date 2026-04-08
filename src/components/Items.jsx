// export default function Items({name,isPacked}){
//     return(
//         <li>
//             {isPacked? 
//                 <del>
//                     {name + "☑️"}
//                 </del>
//                 : name
//             }
//         </li>
//     )
// }

export default function Items({name,isPacked}){
    let itemContent = name;
    if(isPacked){
        itemContent = <del>{name +"☑️"}</del>;
    }
    return (
        <li>{itemContent}
        </li>
    )
}