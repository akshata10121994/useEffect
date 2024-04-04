import React, { useEffect, useState } from "react";

const UseEffect = () => {

  const [resourceType,setResourceType] = useState('Dogs')
  const [dogImage,setDogImage] = useState([])
  const [joke, setJoke] = useState('');
  const [shiba, setShiba] = useState([]);

  
  useEffect(()=>{
    fetch(`https://dog.ceo/api/breeds/image/random`)
    .then((response)=>response.json())
    .then((data)=>setDogImage(data.message))  
  },[resourceType])

  useEffect(()=>{
    fetch(`https://official-joke-api.appspot.com/random_joke`)
    .then((response)=>response.json())
    .then((data)=>setJoke(`${data.setup} ${data.punchline}`))  
  },[resourceType])

  useEffect(()=>{
    fetch(`https://shibe.online/api/shibes?count=10`)
    .then((response)=>response.json())
    .then((data)=>{setShiba(data)
    console.log(data);})  
  },[resourceType])
  return(
     <>
  <button  onClick={()=>setResourceType('Dogs')}>Dogs</button>
  <button onClick={()=>setResourceType('Jokes')}>Jokes</button>
  <button onClick={()=>setResourceType('Shiba')}>10 Random images of Shiba Inu </button>
  <h1>{resourceType}</h1>

 { resourceType==="Dogs" && <img src={dogImage} alt="" height="100px" width="100px"/>}
 { resourceType==="Jokes" && <p>{joke}</p>}
 {resourceType==="Shiba" && shiba.map((shiba)=>{return <img  src={shiba} alt="" height="100px" width="100px" />}) }
  </>
  )
};

export default UseEffect;
