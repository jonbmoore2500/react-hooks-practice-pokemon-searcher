import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({addNewPokemon}) {
  const [formDataObj, setFormDataObj] = useState({
    name: '',
    hp: 0,
  })
  const [spritesObj, setSpritesObj] = useState({
    front: '',
    back: ''
  })
  function updateNameHp(e) {
    e.target.name === "name" 
    ?
      setFormDataObj({
        ...formDataObj,
          name: e.target.value
      }) 
    :
      setFormDataObj({
        ...formDataObj,
          hp: e.target.value
      })
  }
  function updateSprites(e) {
    e.target.name === "frontUrl" 
    ?
      setSpritesObj({
        ...spritesObj,
          front: e.target.value
      }) 
    :
      setSpritesObj({
        ...spritesObj,
          back: e.target.value
      })
  }
  
  function handleSubmit() {
    const newPokemonObj = {...formDataObj, sprites: {...spritesObj}}
    addNewPokemon(newPokemonObj)
  }


  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={updateNameHp}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={updateNameHp}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={updateSprites}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={updateSprites}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
