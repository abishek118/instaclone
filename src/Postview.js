import React ,{useEffect, useState}from 'react';
import Time from './Time';
import './Postview.css';
import { Link } from 'react-router-dom';



const Postview=()=> {

    const [data ,setData] = useState([]);
    const getUserData = async () =>{
        const res = await fetch(process.env.REACT_APP_API+"/api/v1/posts")
        const posts = await res.json()
        console.log(posts);
        setData(posts)

      }


    useEffect(() => getUserData(), [])
    
    

  return (
    <>
    
    <div className="site-container">
    <div className="heading">
      <img src = "https://ucarecdn.com/100c9274-f6d6-465e-9f26-c928a033cfa9/"/>
      <Link to="/form" >
      <img src = "https://thumbs.dreamstime.com/b/speed-fast-camera-icon-logo-design-element-can-be-used-as-as-complement-to-95291428.jpg"  className='txtHeader'/>
      </Link>
    </div>
    {data.map((dta,i) =>(
    <div className='boxs' key={i}>
      <div className="top">
        <div style={{display:'flex',flexDirection:'column',width:'90%'}}>
        <p style={{paddingLeft:'20px'}}><strong>{dta.author}</strong><br></br>{dta.location}</p>
        </div>
        <div className="dots" ><img style={{width:'30px',height:'35px'}}
         src="/images/fav_dots.png" alt="dot-menu"/>
         </div>
      </div>
      <img src={ process.env.REACT_APP_API +"/"+ dta.image} alt="cute-anime-pic"/>
      <div className="mid">
          <img style={{width:'25px',height:'25px'}}
          src="/images/heart_like.png">
          </img>
          <img style={{width:'30px',height:'25px',paddingLeft:'15px'}}
          src="/images/arr_share.png">
          </img>
          <Time val={dta.date}/>
        </div>
        <div className="footer">
          <p style={{margin:'0'}}>{dta.likes} likes</p>
          <h3 style={{marginTop:'5px'}}>{dta.description}</h3>
        </div>
      
    </div>
    ))}
    </div>
    </>
  );
}

export default Postview;
