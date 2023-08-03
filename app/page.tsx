"use client"
// import Image from 'next/image'
import './page.css';
import React, {useState, useEffect} from 'react';
import AllData from './new/AllData';

interface eletype{
  id:number;
  title:string;
  price:number;
  description:string;
  category:string;
  image:string;
  rating:any;
}

 function Home(){

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const getdata = await response.json();
        setData(getdata);
        // console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div >
       <h1 className='text-4xl'>Product Page</h1>
       <a href="cart.tsx">cart</a>
       <br />
       <br />
       <div className="mainBox">     
          {
            data.map((ele:eletype)=>{
              return <AllData key={ele.id} ele={ele}/>
            })
          }
        </div>
     </div>
  )
}
export default  Home;