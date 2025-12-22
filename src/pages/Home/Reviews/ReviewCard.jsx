import React from 'react';
import reviewQuote from '../../../assets/reviewQuote.png';
import './reviw.css'; // Your custom CSS for styling

const ReviewCard = ({ review }) => {
    const { quote, name, designation, imageUrl } = review;

    return (
        <div className="rounded-lg p-4 bg-base-100 flex flex-col   h-full">
            <div className='w-16 '>
                <img src={reviewQuote} alt={name} />
            </div>
            <p className="text-accent font-semibold">{quote}</p>
            <hr className="w-full border-dashed border-accent border-t-2 opacity-30 mb-4 mt-6" />
            <div className="flex items-center  gap-4 mt-4">
                <div className='w-16 h-cover'>
                    <img className='rounded-full' src={imageUrl} alt={name} />
                </div>
                <div>
                    <h1 className='text-xl font-boold'>{name}</h1>
                    <p className='text-accent font-semibold'>{designation}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
