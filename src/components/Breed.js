import React, { useEffect, useState } from 'react';
import { useNavigate,Link,useParams } from "react-router-dom";

function Breed(){
    const { name } = useParams();
    const [ result,setResult ] = useState({});
    let strip = name.replaceAll("-"," ");
    // console.log({"name":strip});


    useEffect(() => {
        // data fetching here
    var myHeaders = new Headers();
    myHeaders.append("X-Api-Key", "YOUR_API_KEY");

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };
    
    fetch(`https://api.api-ninjas.com/v1/dogs?name=${strip}`, requestOptions)
    .then(response => response.text())
    .then(data => {
        // match entire string

        const arr= JSON.parse(data);
        if(arr.length>1){   
            const regex = new RegExp(`\\b^${strip}\\b`, 'gi')
            arr.forEach(element => {
            if(element.name.match(regex)){
                setResult(element);
            }
        });
        }else{
            setResult(arr[0]);
        }
        
        
        
    })
    .catch(error => console.log('error', error));
    // console.log({"result":result});
    
}, []);
    const childrenRate = result.good_with_children;
    const socializeRate = result.good_with_other_dogs;
    const trainability = result.trainability;
    const lifeSpan  =(result.max_life_expectancy+result.min_life_expectancy)/2;
    const minHeightF = result.min_height_female;
    const minWeightF = result.min_weight_female;

    function visualizeDot(num){
        let remain = 5-parseInt(num);
        let arr=[];
        for(let i = 0; i <num; i++){
            
            arr.push(<div className='fill points' key={`star-${i}`}></div>);
        }
        for(let i = 0; i <remain; i++){
            arr.push(<div className='points' key={`nostar-${i}`}></div>);
        }
        return(arr);
    }
    var numOfBar=0
    function visualizeBar(num){
        let level = parseInt(num);
        numOfBar++;
        return(<span className={`w-${level}`} key={`bar-${numOfBar}`}></span>);
    }
    const shed = visualizeDot(result.shedding);
    return (
        <main id='breed'>
        
            <div className='imgBox'>
                <img src={"../images/"+name+".png"} width={300}/>
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
                    <p><span className='display__num'>{lifeSpan}</span> years</p>
                </div>

                <div className='flex'>
                    <div className='row data-block'>
                        <h5>Min Height</h5>
                        {/* return num */}
                        <p><span className='display__num'>{minHeightF}</span> in</p>
                    </div>
                    <div className='row data-block'>
                        <h5>Min Weight</h5>
                        {/* return num */}
                        <p><span className='display__num'>{minWeightF}</span> lbs</p>
                    </div>
                </div>

            </div>

        </main>
    )
}
export default Breed;