import React, { useEffect, useState } from 'react';

function Resources(){
    return (
        <main id='resources'>
            <h2>Resources</h2>
            <p>Welcome to our resource page! We've compiled a list of external links that we think you'll find helpful as a dog owner. Whether you're looking to adopt a new furry friend, find a trusted vet, or simply learn more about dog behavior, we've got you covered.</p>
            <div className='grid'>
                <div className='block'>
                    <h3>Adopting Information:</h3>
                    <ul>
                        <li><a href='https://dog.rescueme.org/ca' target="_blank">Rescue me!</a></li>
                        <li><a href='https://www.petfinder.com/' target="_blank">Petfinder</a></li>
                        <li><a href='https://www.dogtales.ca/adopt-a-dog/' target="_blank">Dog Tale</a></li>
                    </ul>
                </div>
                <div className='block'>
                    <h3>Animal welfare organizations:</h3>
                    <ul>
                        <li><a href='https://humanecanada.ca/' target="_blank">Humane Canada</a></li>
                        <li><a href='https://awfc.ca/' target="_blank">Animal Welfare Foundation of Canada</a></li>
                    </ul>
                </div>
                <div className='block'>
                    <h3>Educational Information:</h3>
                    <ul>
                        <li><a href='https://www.akc.org/' target="_blank">American Kennel Club</a></li>
                        <li><a href='https://www.thesprucepets.com/' target="_blank">The Spruce Pets</a></li>
                        <li><a href='https://www.whole-dog-journal.com/' target="_blank">The Whole Dog Journal</a></li>
                    </ul>
                </div>
                <div className='block'>
                    <h3>Vet Resources:</h3>
                    <ul>
                    <li><a href='https://www.canadianveterinarians.net/'>Canadian Veterinary Medical Association</a></li>
                        <li><a href='https://www.ovma.org/' target="_blank">Ontario Veterinary Medical Association</a></li>
                        <li><a href='https://www.bcvma.org/' target="_blank">British Columbia Veterinary Medical Association</a></li>
                        <li><a href='https://www.bcvma.org/' target="_blank">Alberta Veterinary Medical Association</a></li>
                        <li><a href='https://www.omvq.qc.ca/' target="_blank">Quebec Order of Veterinarians</a></li>
                    </ul>
                </div>
            </div>
            <p>We hope you find these resources helpful! If you have any suggestions for other links we should include, please don't hesitate to contact us.</p>
        </main>
    )
}
export default Resources;