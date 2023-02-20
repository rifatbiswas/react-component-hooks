//==============useState================

//import React, { useState } from 'react';

// const Homebaner = (props) => {

//     const[name, setName] = useState("RIFAT")

//     const shortNmae =()=>{

//         setName("RIFAT BISWAS")
//     }
//     const fulltNmae =()=>{

//         setName("Rajibul Haque RIFAT BISWAS")
//     }
//     return (
//         <div>
//             <h1>{name}</h1>
//             <button onClick={shortNmae}>Short Name</button>
//             <button onClick={fulltNmae}>Full Name</button>
//         </div>
//     );
// };

// export default Homebaner;

//================useRef==============

// import React, { useRef } from 'react';

// const Homebaner = (props) => {

//     const name=useRef();
//     const password=useRef();

//     const SubmitFrom = ()=>{
//         const a = name.current.value;
//         const b = name.current.value;

//         alert(a)
//         alert(b)
//         };

//     return (
//         <div>
//             <input ref={name} placeholder='Enter your name' type="text" />
//             <input ref={password} placeholder='Enter your password' type="text" />
//             <button onClick={SubmitFrom}>Submit</button>
//         </div>
//     );
// };

// export default Homebaner;

//=================useEffect==============


// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// const Homebaner = () => {

//     const [todo, setTodo] = useState([]);

//     useEffect( () =>{

//         axios.get("https://jsonplaceholder.typicode.com/comments?postId=1")
        
//         .then((res)=>{
//             setTodo(res.data)
//         })
//         .catch((err)=>{
//             console.log(err);
//         })

//     },[])

//     return (

//         <div>
//            <h1>{JSON.stringify(todo)}</h1> 
//         </div>
//     );
// };

// export default Homebaner;

//=============Conditional Rentading=================

// import React, { useState } from 'react';

// const Homebaner = () => {

//         const[color, setColor] = useState('green')

        
//         if(color === 'blue'){

//             return (
//                 <div>
//                     <h1 style={{color:"blue"}}>This is Blue color</h1>
//                 </div>
//             );
//         }else if(color==="green"){
//             return (
//                 <div>
//                     <h1 style={{color:"green"}}>This is gren color</h1>
//                 </div>
//             );
//         }

// };

// export default Homebaner;