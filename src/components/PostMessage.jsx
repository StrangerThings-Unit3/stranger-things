import React, { useState } from 'react';
import postMessage from './Api';

const postMessage = ({token, postId}) => {
    
    const [content, setContent] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch(`https://strangers-things.herokuapp.com/api/${COHORT_NAME}/posts/${postId}/messages`, {
            method: 'POST',
            headers: {  
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                message: {
                    content
                }
            })  
        });
        const data = await response.json();
        setContent('');
    }
    return <>
    <form onSubmit={onSubmit} className='post-form'>
        <input type='text' className='post-form-input' value={content} onChange={(event) => { setContent(event.target.value);
        }} placeholder='What would you like to post?'></input>
        <button className='submit-button' type='submit'>Submit</button>
    </form>
    </>

    }

    export default postMessage;