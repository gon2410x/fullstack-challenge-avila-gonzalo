import { useEffect, useState } from "react"
import Character from "./Character"
import { getCharacters } from "../service"

const CharacterPicker = () => {
  const [characterList, setCharacterList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [select, setSelect] = useState([]);

    useEffect(() => {
      setIsLoading(true);
      getCharacters()
        .then((data) => setCharacterList(data.results))
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false))
    }, []);

    return (
        <>
        <Character image={select[0]} name={select[1]} status={select[2]} species={select[3]} setSelect={setSelect}></Character>

        <div className='page'>
        {isLoading && <span className="loading-text">Loading</span>}
            {
                characterList.map(character => (
                    <Character key={character.id} image={character.image} name={character.name} status={character.status} species={character.species} setSelect={setSelect}/>
                ))
            }
        </div>
        </>
    )
}

export default CharacterPicker;