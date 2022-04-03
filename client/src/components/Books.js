import React , { useEffect, useState } from 'react'
import axios from 'axios';
import '../App.css';

const Books = () => {
    const [currentData , setCurrentData] = useState([]);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const res = await axios.get('/part1/books');
                setCurrentData(res.data)
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchUserData();
    } , []);

    return (
        <div className='books'>
            <h1>Books</h1>
            <div>
            { currentData && currentData.map((data , index) => {
                if ( index ) {
                    return (<div className='elements' key={index}>
                        <li><strong>Title</strong> : {data[0]}</li>
                        <li><strong>ISBN</strong> : {data[1]}</li>
                        <li><strong>Author EmailID</strong> : {data[2]}</li>
                        <li><strong>Description</strong> : {data[3]}</li>
                    </div>)
                }
            }) }
            </div>
        </div>
    );
}

export default Books