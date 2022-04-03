import React , {useEffect , useState} from 'react'
import axios from 'axios';
import '../App.css';

const SearchBook = () => {
    const [currentData , setCurrentData] = useState([]);
    const [query, setQuery] = useState('');

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
            <h1>Search Book by ISBN</h1>
            <div className='search'>
                <input placeholder='Enter the ISBN number' onChange={e => setQuery(e.target.value)} />
            </div>
            <div className='note'>
                NOTE : Please enter the full ISBN number
            </div>
            <div className='data'>
            {
                currentData.filter((data , index) => {
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
                    return (<div className='elements' key={index}>
                        <li><strong>Title</strong> : {data[0]}</li>
                        <li><strong>ISBN</strong> : {data[1]}</li>
                        <li><strong>Author EmailID</strong> : {data[2]}</li>
                        <li><strong>Description</strong> : {data[3]}</li>
                    </div>)
                }) 
            }
            </div>
        </div>
    )
}

export default SearchBook