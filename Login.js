import react,{useState} from 'react'
const Loginform = () =>{
    const [userlogin,setUserlogin]= useState(
        {
            username:" ",
            
            password:""

        }
    );
    const [records,setRecords]=useState([]);
    const handleinput = (e) =>
    {
const name =e.target.name;
const value=e.target.value;
console.log(name,value);
setUserlogin({...userlogin, [name] : value}) //dynamic data store
    }
    // to prevent refresh of page
    const handleSubmit=(e)=> {
        e.preventDefault();

        const newlogin=({...userlogin ,id:new Date().getTime().toString()})
        console.log(records);
        //SEND THIS USER DATA TO BACKEND
        setRecords([...records,newlogin]);
        console.log(records);
    }
    return(
        <form action=" " onSubmit={handleSubmit}>
        <div>
            <label htmlFor='username'>username</label>
            <input type='text' autoComplete='off' value={userlogin.username} onChange={handleinput} name="username" id="username"></input>
        </div>
            
            <div>
            <label htmlFor='password'>password</label>
            <input type='password'  autoComplete='off' value={userlogin.password} onChange={handleinput} name="password" id="password"></input>
            </div>
        <button type="submit">Submit</button>
        </ form>
    )
}
export default Loginform