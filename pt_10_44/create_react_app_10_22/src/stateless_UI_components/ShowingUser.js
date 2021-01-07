// import React, {Component} from 'react';
import React from 'react';

// class User extends Component {
//     render() {
//         console.log(this.props);

//         // use destructuring in js to get the props
//         const {users} = this.props;
        
//         const users_list = users.map(person => {
//             return (
//                 <div className='user-profile' key={person.id}>
//                     <div>Name: {person.name}</div>
//                     <div>Age: {person.age}</div>
//                     <div>Birth year: {person.birth_year}</div>
//                     <div>Location: {person.location}</div>
//                 </div>
//             );
//         });
        
//         return(
//             <div className='user-list'>{users_list}</div>
//         );
//     };
// };

// User is an UI/function-based/stateless component
// such components are generally created by using functions, not classes like container components
// functional components don't automatically get props passed to them from class-based ones but take them as params
const User = ({users, removeUser}) => {
    // instead of destructuring here, the process can be done in the param list
    //const {users} = props;
        
    const users_list = users.map(person => {
        // conditional output
        // #1: using if-else statements
        // if(person.age > 50) {
        //     return (
        //         <div className='user-profile' key={person.id}>
        //             <div>Name: {person.name}</div>
        //             <div>Age: {person.age}</div>
        //             <div>Birth year: {person.birth_year}</div>
        //             <div>Location: {person.location}</div>
        //         </div>
        //     );
        // }else {
        //     return null;
        // }

        // #2: using ternary operator
        return person.age > 0 ? (
            <div className='user-profile' key={person.id}>
                <hr></hr>
                <div>Name: {person.name}</div>
                <div>Age: {person.age}</div>
                <div>Birth year: {person.birth_year}</div>
                <div>Location: {person.location}</div>
                <button onClick={() => removeUser(person.id)}>Delete</button>
                <hr></hr>
            </div>
        ) : null;
    });
        
    return(
        <div className='user-list'>{users_list}</div>
    );
};

export default User;