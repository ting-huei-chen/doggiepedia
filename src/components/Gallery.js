import React, { useEffect, useState } from 'react';
import { useNavigate,Link } from "react-router-dom";

function Gallery(){
    const breedList = ["golden-retriever","labrador-retriever","west-highland-white-terrier","border-collie","shetland-sheepdog","dachshund","poodle-(toy)","tibetan-mastiff","siberian-husky","alaskan-malamute","rottweiler","saint-bernard","german-shepherd","pembroke-welsh-corgi","french-bulldog","bulldog","pug","shiba-inu","taiwan-dog","samoyed","japanese-spitz","papillon","pomeranian","chihuahua","beagle","miniature-schnauzer","russell-terrier","great-pyrenees","dalmatian","great-dane"];

    // A function to prepare a bread card
    // **should be able to link to breed page to see details
    const createCard = (arg,key)=>{
        let name = arg.replaceAll("-"," ");
        let filename = "images/"+arg+".png";
        return(
            <Link to={`/breed/${arg}`} className='breed' key={key}>
                <img src={filename} width="100" height={100} loading="lazy"/>
                <li ><span>{name}</span></li>
            </Link>
        )
    }

    // Create a card for each breed
    let jsxArr = [];
    breedList.forEach((element,index) => {
        jsxArr.push(createCard(element,index));
    });
    return (
        <main id='gallery'>
            <p>We believe that adopting a dog is one of the most fulfilling and rewarding experiences you can have, and we encourage everyone to consider adoption over buying.</p>
            <div className='grid'>{jsxArr}</div>
            
        </main>
    )
}
export default Gallery;