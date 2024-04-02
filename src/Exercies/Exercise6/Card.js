
export default Card ({name,children}){
    return(
        <div className="card">
            <h2>{name}</h2>
            <p>{children}</p>
        </div>
    )
}