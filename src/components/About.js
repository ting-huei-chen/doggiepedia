import React, { useEffect, useState } from 'react';

function About(){
    return (
        <main id='About'>
            <h2>About</h2>
            <p>Welcome to Doggiepedia, the ultimate graphic-based dog breed guide! As a dog lover and owner, I understand how important it is to have accurate and easy-to-understand information about different dog breeds. That's why I created Doggiepedia, a comprehensive guide that features 30 different dog breeds.</p>

            <p>To ensure the accuracy of the information presented, Doggiepedia uses APIs from reliable sources. This allows me to deliver up-to-date and reliable information to dog enthusiasts around the world. Whether you're a seasoned dog owner or just starting to learn about dogs, Doggiepedia has something for everyone.</p>

            <p>As a one-man team, I am committed to providing the best possible user experience for visitors to Doggiepedia. I have designed the site to be intuitive and easy to navigate, with a clean and modern interface that makes finding information about different dog breeds a breeze.</p>

            <p>Thank you for choosing Doggiepedia as your go-to resource for all things dog-related. If you have any questions or feedback, please feel free to contact me through the website. Happy browsing!</p>
            <footer>
            
                <img src='images/avatar.jpg' width="100" height={100} className='avatar'/>
                <p className='signature'>Ting.C</p>
            </footer>
        </main>
    )
}
export default About;