

interface eletype{
    id:number;
    title:string;
    price:number;
    description:string;
    category:string;
    image:string;
    rating:any;
  }
  
 function  AllData ({ele}:any) {

   
    let cartArray :any= [];
    if(localStorage.getItem("CartPro") !== null)
    {
        
        cartArray =(localStorage.getItem("CartPro"));
        cartArray = JSON.parse(cartArray);
    }
    

     function handleAddClick(){     
        
        
        cartArray.push(ele);
        console.log(ele);
        localStorage.setItem("CartPro", JSON.stringify(cartArray));
    }

    return (

        <div style={{display:"grid" , marrgin:"2px solid red"}}>
           <div style={{display:"flex",  gap:"10px"}}>
                <img src={ele.image} alt="" width="120px" height="20px"/>
                <div>                    
                    <div className=""><h3 className="font-semibold">{ele.title}</h3></div>
                    <br />
                    <div><h5 className="">${ele.price}</h5></div>
                    <br />
                    <div ><span>{ele.description}</span></div>

                    <div>
                        <button onClick={handleAddClick} className="bg-slate-500 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded">
                        Add to cart</button>
                        </div>
                </div>
           </div>
           <div><p>{ele.category}</p></div>
            
        
        <br />
        <br />
        </div>
    )
}
export default AllData;