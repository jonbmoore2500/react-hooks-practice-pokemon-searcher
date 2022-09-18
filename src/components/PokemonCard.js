import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  const {id, name, hp, sprites} = pokemon
  const [showFront, setShowFront] = useState(true)
  return (
    <Card>
      <div>
        <div className="image" onClick={() => setShowFront(!showFront)}>
          {showFront ? 
          <img alt={name} src={sprites.front}/> :
          <img alt={name} src={sprites.back}/>
          }
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
