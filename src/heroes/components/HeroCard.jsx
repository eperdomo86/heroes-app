import { Link } from "react-router-dom";

const CharacterByHero = ({alter_ego, characters}) => {
    if (alter_ego === characters) return ('');
    return (<p>{characters}</p>)
}

export const HeroCard = ({id, superhero, publisher, alter_ego, first_appearance, characters}) => {

    const heroImageUrl = `/assets/heroes/${id}.jpg`;

    return (
        <div className="col">
            <div className="card">
                <div className="row no-glutters">
                    <div className="col-4 animate__animated animate__fadeIn">
                        <img src={heroImageUrl} className="card-img" alt={id} />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title"> {superhero} </h5>
                            <p className="card-text"> { alter_ego }</p>
                            
                            <CharacterByHero characters={characters} alter_ego={alter_ego} />
                            {/* <p> { characters }</p> */}

                            <p className="card-text">
                                <small className="text-muted">{ first_appearance }</small>
                            </p>

                            <Link to={`/hero/${id}`}>
                                Mas...
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
