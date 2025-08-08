import React from 'react';
import { PF_ICON } from '../utils/constants';

const Comment = ({ data }) => {

    const { name, text } = data;


    return (
        <div className='flex items-center gap-2 mt-2 bg-gray-100 px-3 py-2 rounded-2xl'>
            <img
                src={PF_ICON}
                alt="UserIcon"
                className='w-10 rounded-full'
            />
            <div>
                <h6 className='font-bold'>{name}</h6>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default Comment;