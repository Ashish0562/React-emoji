import React, { useState } from 'react'

const Emoji = () => {

    const [search, setSearch] = useState('');
    const [emoji, setemoji] = useState([]);
  
    const handleSearch= (event) => {

      setSearch(event.target.value);
    };

    // useEffect(()=>{
    //    fetch('https://emoji-api.com/categories/travel-places?access_key=80e96ed5d99c8ca2c2478c91cc24578539741426')
    //    .then((res)=> res.json())
    //    .then((data)=> setemoji(data))
    // },[])

    const handle = () => {

        if (search === '') {
            setSearch('Type something...')
        }else{
            fetch(`https://emoji-api.com/emojis?search=${search}&access_key=80e96ed5d99c8ca2c2478c91cc24578539741426`)
            .then((res) => res.json())
            .then((data) => setemoji(data))
        }
      };

    // console.log(emoji);
  return (
    <div className='main'>
    <h1>Emoji Search </h1>    
    <input type="text" value={search} onChange={handleSearch} /><br/><br/>
    <button onClick={handle}>Search</button>
    <div>{
        emoji == null ?  <p><b>Sorry!</b> No result found try to search with different keywords<br/>eg:<i>smile,crying,sad</i> etc.</p> :
        emoji.map((emoji,index) => (
            <div className='box' key={index}>{emoji.character}</div>
          ))
        }
    </div>
  </div>
  )
}

export default Emoji