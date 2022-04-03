import React , { useEffect, useState } from 'react'
import axios from 'axios';
import '../App.css';

const Author = () => {
    const [currentData , setCurrentData] = useState([]);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const res = await axios.get('/part1/authors');
                setCurrentData(res.data)
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchUserData();
    } , []);

    return (
        <div className='authors'>
            <h1>Authors</h1>
            <div>
            { currentData && currentData.map((data , index) => {
                if ( index ) {
                    return (<div className='elements' key={index}>
                        <li><strong>Emailid</strong> : {data[0]}</li>
                        <li><strong>Name</strong> : {data[1] + " " + data[2]}</li>
                    </div>)
                }
            }) }
            </div>
        </div>
    );
}

export default Author