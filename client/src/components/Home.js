import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className='heading'>
			This is the first part of Assignment
			<div className='outer' >
				<Link className='links' to='/code' >Read CSV</Link>
				<Link className='links' to='/books' >Print All Books</Link>
				<Link className='links' to='/magazines' >Print All Magazines</Link>
				<Link className='links' to='/searchbook' >Find book by ISBN</Link>
				<Link className='links' to='/searchmagazine' >Find magazine by ISBN</Link>
				<Link className='links' to='/searchauthor' >Find Book and Magazine by Author EmailID</Link>
				<Link className='links' to='/sortdata' >Sorted Data of Book and Magazine</Link>
			</div>
		</div>
	)
}

export default Home