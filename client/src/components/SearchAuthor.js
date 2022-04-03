import axios from 'axios';
import React, { useEffect, useState } from 'react'

const SearchAuthor = () => {
    const [currentBookData , setCurrentBookData] = useState([]);
    const [currentMagazineData , setCurrentMagazineData] = useState([]);
    const [query , setQuery] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const res1 = await axios.get('/part1/magazines');
                setCurrentMagazineData(res1.data)
                const res2 = await axios.get('/part1/books');
                setCurrentBookData(res2.data); 
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchUserData();
    } , []);

    return (
        <div className='magazines'>
            <h1>Search Book and Magazine by Author EmailID</h1>
            <div className='search'>
                <input placeholder='Enter the author emailID' onChange={e => setQuery(e.target.value)} />
            </div>
            <div className='note'>
                NOTE : Please enter the full EmailID
            </div>
            <h1>For Books</h1>
            {
                currentBookData.filter((data , index) => {
                    if ( index > 0 ) {
                        if ( query === '' ) {
                            return data;
                        }
                        else if ( data.includes(query) ) {
                            return data;
                        }
                    }
                })
                .map((data , index) => {
                    return (<div className='elementssort' key={index}>
                        <li><strong>Title</strong> : {data[0]}</li>
                        <li><strong>ISBN</strong> : {data[1]}</li>
                        <li><strong>Author EmailID</strong> : {data[2]}</li>
                        <li><strong>Description</strong> : {data[3]}</li>
                    </div>)
                }) 
            }
            <h1>For Magazines</h1>
            {
                currentMagazineData.filter((data , index) => {
                    if ( index > 0 ) {
                        if ( query === '' ) {
                            return data;
                        }
                        else if ( data.includes(query) ) {
                            return data;
                        }
                    }
                })
                .map((data , index) => {
                    return (<div className='elementssort' key={index}>
                        <li><strong>Title</strong> : {data[0]}</li>
                        <li><strong>ISBN</strong> : {data[1]}</li>
                        <li><strong>Author EmailID</strong> : {data[2]}</li>
                        <li><strong>Date</strong> : {data[3]}</li>
                    </div>)
                }) 
            }
        </div>
    )
}

export default SearchAuthor