// import React from "react";

// class Student extends React.Component{
//     render(){
//      return(
//         <>
//             <h1>Hello,{this.props.name}</h1>
//             <p>you marks is,{this.props.max}</p>
//             <hr></hr>
//         </>
//      )
//     }
// }

function Student(props){
    
    return(
        <>
             <h1>Hello,{props.name}</h1>
             <p>you marks is,{props.max}</p>
             <hr></hr>
         </>
    )
}
export default Student;