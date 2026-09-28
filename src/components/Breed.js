import { useParams } from "react-router-dom";
import breeds from '../data/breeds.json';

function Breed(){
    const { name } = useParams();

    // Stats come from src/data/breeds.json, a snapshot of the API Ninjas dogs API
    // (see scripts/fetch-breeds.mjs). Serving them statically keeps the deployed
    // site free of an API key and free of a network round-trip per page view.
    const result = breeds.find((breed) => breed.slug === name);

    if(!result){
        return (
            <main id='breed'>
                <div className='wrap'>
                    <h2>Breed not found</h2>
                    <p>We don't have a page for "{name.replaceAll("-"," ")}" yet.</p>
                </div>
            </main>
        )
    }

    const childrenRate = result.good_with_children;
    const socializeRate = result.good_with_other_dogs;
    const trainability = result.trainability;
    const minHeightF = result.min_height_female;
    const minWeightF = result.min_weight_female;

    // Guard the average so a gap in the snapshot shows a dash instead of NaN.
    const hasLifeSpan = result.min_life_expectancy != null && result.max_life_expectancy != null;
    const lifeSpan = hasLifeSpan
        ? (result.max_life_expectancy + result.min_life_expectancy)/2
        : null;

    function visualizeDot(num){
        let filled = parseInt(num) || 0;
        let remain = 5-filled;
        let arr=[];
        for(let i = 0; i <filled; i++){
            
            arr.push(<div className='fill points' key={`star-${i}`}></div>);
        }
        for(let i = 0; i <remain; i++){
            arr.push(<div className='points' key={`nostar-${i}`}></div>);
        }
        return(arr);
    }
    var numOfBar=0
    function visualizeBar(num){
        let level = parseInt(num) || 0;
        numOfBar++;
        return(<span className={`w-${level}`} key={`bar-${numOfBar}`}></span>);
    }
    return (
        <main id='breed'>
        
            <div className='imgBox'>
                <img src={process.env.PUBLIC_URL + "/images/" + name + ".png"} width={300} alt={result.name}/>
            </div>
            <div className='wrap'>
                <h2>{result.name}</h2>
                {/* labels */}
                <div className='row'>
                
                {childrenRate>3 ? <mark>Good with children</mark> : ""}
                {socializeRate>3 ? <mark>Good with other dogs</mark> : ""}
                {trainability>3 ? <mark>Easy to train</mark> : ""}
                
                    
                </div>
                {/* ratings */}
                <div className='row'>
                    <h3>Shedding</h3>
                    {/* return rating dots */}
                    <div className='group'>{visualizeDot(result.shedding)}</div>
                </div>
                <div className='row'>
                    <h3>Grooming</h3>
                    {/* return rating dots */}
                    <div className='group'>{visualizeDot(result.grooming)}</div>
                </div>
                <div className='row'>
                    <h3>Barking</h3>
                    {/* return rating dots */}
                    <div className='group'>{visualizeDot(result.barking)}</div>
                </div>

                {/* Bars */}
                <div className='row'>
                    <h3>Protectiveness</h3>
                    {/* return rating bars */}
                    <div className='bar'>{visualizeBar(result.protectiveness)}</div>
                </div>
                <div className='row'>
                    <h3>Energy Level</h3>
                    {/* return rating bars */}
                    <div className='bar'>{visualizeBar(result.energy)}</div>
                </div>

                {/* Life span */}
                <div className='row'>
                    <h3>Life span</h3>
                    {/* return num */}
                    <p><span className='display__num'>{hasLifeSpan ? lifeSpan : "—"}</span> years</p>
                </div>

                <div className='flex'>
                    <div className='row data-block'>
                        <h5>Min Height</h5>
                        {/* return num */}
                        <p><span className='display__num'>{minHeightF ?? "—"}</span> in</p>
                    </div>
                    <div className='row data-block'>
                        <h5>Min Weight</h5>
                        {/* return num */}
                        <p><span className='display__num'>{minWeightF ?? "—"}</span> lbs</p>
                    </div>
                </div>

            </div>

        </main>
    )
}
export default Breed;
