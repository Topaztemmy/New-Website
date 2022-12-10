import React from "react";
import {FaBars} from "react-icons/fa";
import "./index.css"

export default function Home(){
// const [menu, setMenu] = useState(true);
// function handleClick () {
//    setMenu (!menu)
// }

// const myMenu = (
//     <ul className="nav-menu">
//     <FaTimes />
//     <li>About</li>
//     <li>Contact</li>
//     <li>Projects</li>  
// </ul> 
// )

// const myDesk = (
//     <nav className="nav-desk">
//         <div>About</div>
//         <div>Contact</div>
//         <div>Message</div>
//     </nav>
// )
//     return (
//         <div>
//        <nav className="nav-items my-3">
//                 <div onClick={handleClick}>
//             { menu ? <FaBars /> : myMenu }
//                 </div>
      
//       </nav>
//       {myDesk}
//       </div>
//     )
return (
    <div>
    <nav className="nav-items mx-3">
        <div className="display-6 text-muted ">Logo</div>
        <div className="menu"><FaBars /></div>
    </nav>

    
    </div> 
)
 }