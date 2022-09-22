const Character = ({image, name, status, species, setSelect}) => {
    return(
        <>
        <button
            className='color-square'
            onClick={() => setSelect([image,name,status,species])}
            >
            <img src={image} width="200" height="150"/>
            <h2>{name}</h2>
            <h2>{status}</h2>
            <h2>{species}</h2>
        </button>
        </>
    )
}

export default Character;