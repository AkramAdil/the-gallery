import React, { useState,useEffect } from 'react';
import Search from './components/search'
import ImageCard from './components/imageCard'
import './home-style.css'
import Logo from '../../components/logo';
const Home = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [IDs, setIDs] = useState([])
    const [items, setItems] = useState([])
    useEffect(()=>{
      fetch('https://api.artic.edu/api/v1/artworks/search?q=painting&limit=100')
      .then(data=>data.json())
      .then(artworks=>setIDs(artworks.data.map(item=>item.id)))
      .catch(err=>console.log(err))
  },[])
    useEffect(()=>{
      IDs.map(id=>      
        fetch(`https://api.artic.edu/api/v1/artworks/${id}`)
        .then(data=>data.json())
        .then(item=>setItems((prevItem=>[...prevItem,item.data])))
        .catch(err=>console.log(err))
      )
    },[IDs])
    return (
        <div className="container">
            <Logo/>  
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            <div className="parent">
                {
                    items.filter(item=>item.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
                    .map((item,i)=>
                        <ImageCard key={i} item={item}/>    
                    )
                }
            </div>  
        </div>
    );
};

export default Home;