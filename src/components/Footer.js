import React, { useEffect, useState } from 'react';

function Footer(){
    return (
        <footer>
            <div id='site__informations'>
                <div className='logo'>Doggiepedia</div>
                <small>Website built by <a href='https://www.lihoworld.com' target="_blank">Lihoword</a></small>
            </div>
            <div id='links'>
                <h4>Useful Links</h4>
                <ul>
                <li><a href='https://dog.rescueme.org/ca' target="_blank">Rescue me!</a></li>
                        <li><a href='https://www.petfinder.com/' target="_blank">Petfinder</a></li>
                        <li><a href='https://www.dogtales.ca/adopt-a-dog/' target="_blank">Dog Tale</a></li>
                </ul>
            </div>
            <div id='attributes'>
                <small>Amazing graphics made by <a href='https://www.lumilu.ca' target="_blank">Lumi Lu</a></small>
                <small>Powered by <a href='https://api-ninjas.com/api/dogs' target="_blank">API Ninjas</a></small>
            </div>
            
            
        </footer>
    )
}
export default Footer;