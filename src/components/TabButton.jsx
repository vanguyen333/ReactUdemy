export default function TabButton({children,onSelect,isSelected}){
console.log("Tab button component rendering")
 
    
    return(
        <li>
            <button className={isSelected ? 'active' : undefined}  onClick={onSelect}>{children}</button>
        </li>
    )
}