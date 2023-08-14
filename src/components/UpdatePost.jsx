import { useState } from "react";


function UpdatePost () {
    const [title, setTitle] = useState(''); 
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [willDeliver, setWillDeliver] = useState('');
    return ( 
        <div>
          <form>
            <label htmlFor="title">THE TITLE</label>
            <input type="text" value={title} onChange={(e) => {setTitle(e.target.value)}}/>
            <label htmlFor="description">DESCRIPTTION</label>
            <input type="text" value={description} onChange={(e) => {setDescription(e.target.value)}}/>
            <label htmlFor="price">PRICE</label>
            <input type="text" value={price} onChange={(e) => {setPrice(e.target.value)}}/>
            <label htmlFor="location">LOCATION</label>
            <input type="text" value={location} onChange={(e) => {setLocation(e.target.value)}}/>
            <label htmlFor="willDeliver">WILL DELIVER?</label>
            <input type="checkbox" value={willDeliver} onChange={(e) => {setWillDeliver(e.target.value)}}/>
            <button type="submit">UPDATE POST</button>
            </form>  
        </div>
        );
}
export default UpdatePost;