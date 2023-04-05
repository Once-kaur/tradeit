import react,{useState} from 'react'
const Productuploadform = () =>{
    const [userproductupload,setUserproductupload]= useState(
        {
            
            productname:"",
            price:"",
            description:""

        }
    );
    const [records,setRecords]=useState([]);
    const handleinput = (e) =>
    {
const name =e.target.name;
const value=e.target.value;
console.log(name,value);
setUserproductupload({...userproductupload, [name] : value}) //dynamic data store
    }
const fileSelectedHandler = (e) =>{
        console.log(e.target);
    }
    // to prevent refresh of page
    const handleSubmit=(e)=> {
        e.preventDefault();

        const newproductupload=({...userproductupload ,id:new Date().getTime().toString()})
        console.log(records);
        //SEND THIS USER DATA TO BACKEND
        setRecords([...records,newproductupload]);
        console.log(records);
    }
    return(
        <form action=" " onSubmit={handleSubmit}>
       
            <div>
            <label htmlFor='productname'>productname</label>
            <input type='productname'  autoComplete='off' value={userproductupload.productname} onChange={handleinput} name="productname" id="productname"></input>
            </div>
            <div>
            <label htmlFor='price'>price</label>
            <input type='price'  autoComplete='off' value={userproductupload.price} onChange={handleinput} name="price" id="price"></input>
            </div>
            <div>
            <label htmlFor='description'>description</label>
            <input type='textarea'  autoComplete='off' value={userproductupload.description} onChange={handleinput} name="description" id="description"></input>
            </div>
            <div>
             <input type='file'  onChange={fileSelectedHandler} ></input>
         </div>
        <button type="submit">Upload</button>
        </ form>
    )
}
export default Productuploadform