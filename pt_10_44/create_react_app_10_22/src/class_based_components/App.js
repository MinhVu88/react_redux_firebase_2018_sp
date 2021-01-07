import React, {Component} from 'react';
import User from '../stateless_UI_components/ShowingUser';
import AddingUser from './AddingUser';

// App is the root/container/class-based component, which sits at the top of the app's structure
// all other components, even including other container components, can be nested inside it
// such components are generally created by using classes, not functions like UI components
// only nested container components receive props automatically & those props are attached to the instances
// props in class-based components are accessed via 'this.props'
class App extends Component {
    state = {
      users: [
        {name: 'Maynard Keenan', age: 56, birth_year: 1964, location: 'Ohio', id: 1},
        {name: 'Adam Jones', age: 55, birth_year: 1965, location: 'Illinois', id: 2},
        {name: 'Justin Chancellor', age: 49, birth_year: 1971, location: 'United Kingdom', id: 3},
        {name: 'Danny Carey', age: 60, birth_year: 1961, location: 'Kansas', id: 4},
        {name: 'Paul DAmour', age: 50, birth_year: 1967, location: 'Washington', id: 5}
      ]
    };

    // this method's passed to the child component, AddingUser, as a prop
    // from there it takes an arg, which's a state object/a new user
    addUser = user => {
      user.id = Math.round(Math.random() * (100 - 6 + 1)) + 6;

      /* How to properly add a new user to the state's users prop:
       
       - Bad practice: this.setState(users: this.users.push(user));

       - Reason: push() directly alters the original users prop, so then this.setState() becomes redundant

       - As a result, this.users.push(user) can even be used outside of this.setState()
      
       -> Don't alter the state outside of this.setState()

       - Recommended: make a copy of the prop using the spread operator, add the new user to the copy 
                      & then inside setState(), assign the copy to the prop

       -> That way, the original prop stays untouched, only the copy is altered
      */ 
      let copied_users = [...this.state.users, user];

      this.setState({users: copied_users});

      console.log(user, user.id);
    };

    deleteUser = removed_id => {
      console.log(removed_id);

      /*
       - filter() doesn't alter the original users prop, instead it returns a new array based on some condition specified within it

       - The callback inside filter() checks if a current user's id is NOT equal to a removed id due to the Delete button being clicked

       - True/not equal -> the current user is added to remaining_users | false/equal -> that current user is filtered out/removed
      */
      let remaining_users = this.state.users.filter(current_user => current_user.id !== removed_id);

      console.log(remaining_users);

      this.setState({users: remaining_users});
    };

    // the built-in render() method is only for container components
    render() {
      return (
        <div className="App">
          <h1>Welcome to my 1st React app</h1>
          
          <User users={this.state.users} removeUser={this.deleteUser}/>

          <AddingUser addUser={this.addUser}/>
        </div>
      );
    };

    // component lifecycle & the methods: http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
    componentDidMount = () => {console.log('The root component, App.js, mounted')};

    componentDidUpdate = (previousProps, previousState) => {
      console.log('The root component, App.js, updated');

      console.log(previousProps, previousState);
    };
};

export default App;
