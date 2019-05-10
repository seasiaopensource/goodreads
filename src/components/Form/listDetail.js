import React from 'react';
import RatingForm from '../../components/Form/ratingFrom';


const ListDetail = ({ iteam, name }) => (
  
    <div className="listOuter">
         <div className="bookImg" >
              <img alt="The Alchemist" className="bookCover" src={iteam.best_book.image_url['_text']}/>
         </div>
       <div className="bookTitlediv" >
        <span className="bookTitle">{iteam.best_book.title['_text']}</span> <br />
        <span className="bookTitle"> Author name  {iteam.best_book.author.name['_text']}</span>

        <p>jerhhdheerht wherwehrew jwegruwerwer we</p>
        <RatingForm rating={Number.parseInt(iteam.average_rating['_text'], 10)} />
       </div>
    </div>
);

export default ListDetail;
