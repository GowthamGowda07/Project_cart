import React from 'react'
import list from '../data'
import '../styles/home.css';
import Cards from './Cards';

const Home = ({handleClick}) => {
  return (
    <section>
      {
        list.map((item) => (
          <Cards item = {item}  handleClick = {handleClick} key={item.id}/>
        ))
      }
    </section>
  )
}

export default Home