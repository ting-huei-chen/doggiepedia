import React, { useEffect, useState } from 'react';

function Contact(){
    return (
        <main id='contact'>
            <div className='group'>
                <h2>Contact us!</h2>
                <p>Thank you for visiting Doggiepedia - Graphic Based Dog Breed Guide. We hope you found our website informative and enjoyable. We are always striving to improve our content and user experience, and your feedback is valuable to us.</p>
            </div>
            <form className='group'>
                <label htmlFor="name">Name</label>
                <input type="text" name='name' id='name'/>
                <label htmlFor="email">Email</label>
                <input type="email" name='email' id='email'/>
                <label htmlFor="message">Message</label>
                <textarea></textarea>
                <input type="submit" value="submit" className='btn'/>
            </form>
        </main>
    )
}
export default Contact;