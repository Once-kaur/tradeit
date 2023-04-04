import react,{useState} from 'react'
const Signupform = () =>{
    const [usersignup,setUsersignup]= useState(
        {
            username:" ",
            email:"",
            password:""

        }
    );
    const [records,setRecords]=useState([]);
    const handleinput = (e) =>
    {
const name =e.target.name;
const value=e.target.value;
console.log(name,value);
setUsersignup({...usersignup, [name] : value}) //dynamic data store
    }
    // to prevent refresh of page
    const handleSubmit=(e)=> {
        e.preventDefault();

        const newSignup=({...usersignup ,id:new Date().getTime().toString()})
        console.log(records);
        //SEND THIS USER DATA TO BACKEND
        setRecords([...records,newSignup]);
        console.log(records);
    }
    return(
        <form action=" " onSubmit={handleSubmit}>
        <div>
            <label htmlFor='username'>username</label>
            <input type='text' autoComplete='off' value={usersignup.username} onChange={handleinput} name="username" id="username"></input>
        </div>
            <div>
            <label htmlFor='email'>email</label>
            <input type='email'  autoComplete='off' value={usersignup.email} onChange={handleinput} name="email" id="email"></input>
            </div>
            <div>
            <label htmlFor='password'>password</label>
            <input type='password'  autoComplete='off' value={usersignup.password} onChange={handleinput} name="password" id="password"></input>
            </div>
        <button type="submit">Submit</button>
        </ form>
    )
}
export default Signupform