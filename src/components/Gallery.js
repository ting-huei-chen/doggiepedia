import { Link } from "react-router-dom";
import breeds from '../data/breeds.json';

function Gallery(){
    // A function to prepare a breed card.
    // The label stays lowercase on purpose - main.scss capitalizes it.
    const createCard = (breed,key)=>{
        let name = breed.slug.replaceAll("-"," ");
        let filename = process.env.PUBLIC_URL + "/images/" + breed.slug + ".png";
        return(
            <Link to={`/breed/${breed.slug}`} className='breed' key={key}>
                <img src={filename} width="100" height={100} loading="lazy" alt={name}/>
                <li ><span>{name}</span></li>
            </Link>
        )
    }

    return (
        <main id='gallery'>
            <p>We believe that adopting a dog is one of the most fulfilling and rewarding experiences you can have, and we encourage everyone to consider adoption over buying.</p>
            <div className='grid'>{breeds.map(createCard)}</div>
            
        </main>
    )
}
export default Gallery;
