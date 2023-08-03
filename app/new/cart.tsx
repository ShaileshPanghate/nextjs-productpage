
function cart(){
    return(
        <div>
             <div style={{display:"flex",  gap:"10px"}}>
                <img src={ele.image} alt="" width="120px" height="20px"/>
                <div>                    
                    <div className=""><h3 className="font-semibold">{ele.title}</h3></div>
                    <br />
                    <div><h5 className="">${ele.price}</h5></div>
                    <br />
                    <div ><span>{ele.description}</span></div>
                </div>

             </div>
        </div>
    )
}
export default cart;