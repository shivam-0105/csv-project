import axios from 'axios';
import React, { useEffect, useState } from 'react'

const SortData = () => {
    const [currentBookData , setCurrentBookData] = useState([]);
    const [currentMagazineData , setCurrentMagazineData] = useState([]);
    const [finalData , setFinalData] = useState([]);

    useEffect(() => {
        const appendList = async (list1 , list2) => {
            try {
                const temp = [];
                list1.map((data , index) => {
                    if(index) temp.push(data);
                });
                list2.map((data , index) => {
                    if(index) temp.push(data); 
                });
                setFinalData(temp);
            } catch (error) {
                console.log(error.message);
            }
        };
        
        const fetchUserData = async () => {
            try {
                const res1 = await axios.get('/part1/magazines');
                setCurrentMagazineData(res1.data)
                const res2 = await axios.get('/part1/books');
                setCurrentBookData(res2.data); 
                appendList(currentBookData , currentMagazineData);
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchUserData();
    } , []);

    return (
        <div className='sortdata'>
            <h1>Magazine and Book Sorted by Title</h1>
            { 
                finalData.sort()
                .map((data , index) => {
                    return (<div className='elementssort' key={index}>
                        <li><strong>Title</strong> : {data[0]}</li>
                        <li><strong>ISBN</strong> : {data[1]}</li>
                        <li><strong>Author EmailID</strong> : {data[2]}</li>
                        <li>{data[3].length===10 ? <strong>Date</strong> : <strong>Title</strong>} : {data[3]}</li> 
                    </div>);
                })
            }
        </div>
    )
}

export default SortData