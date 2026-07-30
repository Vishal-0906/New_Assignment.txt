Session 2 — JSX & Components
Question 1
Create a new React app using Create React App, open App.js, and replace its content to display a JSX heading that says "Welcome to React JSX!".
Answer
function App() {
  return (
    <div>
      <h1>Welcome to React JSX!</h1>
    </div>
  );
}

export default App;
Question 2
Write a functional component called UserGreeting that takes a username prop and displays "Hello, {username}!". Render it in App.js with your own name as the username.
Answer — UserGreeting.js
function UserGreeting({ username }) {
  return <h2>Hello, {username}!</h2>;
}

export default UserGreeting;
App.js
import UserGreeting from "./UserGreeting";

function App() {
  return (
    <div>
      <h1>Welcome to React JSX!</h1>

      <UserGreeting username="Vishal" />
    </div>
  );
}

export default App;
Question 3
Convert the UserGreeting functional component into a class component named UserGreetingClass that also takes a username prop and displays the same greeting. Render both versions in App.js to compare.
Answer — UserGreetingClass.js
import React, { Component } from "react";

class UserGreetingClass extends Component {
  render() {
    return <h2>Hello, {this.props.username}!</h2>;
  }
}

export default UserGreetingClass;
App.js
import UserGreeting from "./UserGreeting";
import UserGreetingClass from "./UserGreetingClass";

function App() {
  return (
    <div>
      <h1>Welcome to React JSX!</h1>

      <h2>Functional Component:</h2>
      <UserGreeting username="Vishal" />

      <h2>Class Component:</h2>
      <UserGreetingClass username="Vishal" />
    </div>
  );
}

export default App;
Question 4
Build a MiniProfile functional component that shows a user's display picture, name, and a short status message using JSX. Use this component to display your own mini profile like Instagram.
Answer — MiniProfile.js
function MiniProfile() {
  return (
    <div>
      <img
        src="https://via.placeholder.com/150"
        alt="Profile"
      />

      <h2>Vishal</h2>

      <p>Learning React and Full Stack Development.</p>
    </div>
  );
}

export default MiniProfile;
App.js
import MiniProfile from "./MiniProfile";

function App() {
  return (
    <div>
      <h1>My Instagram Profile</h1>

      <MiniProfile />
    </div>
  );
}

export default App;
Question 5
Refactor the MiniProfile component to ensure all JSX tags are properly closed and wrapped, and that no invalid HTML is used.
Answer
function MiniProfile() {
  return (
    <div>
      <img
        src="https://via.placeholder.com/150"
        alt="Profile"
      />

      <h2>Vishal</h2>

      <p>
        Hello! I am <strong>Vishal</strong>.
        <br />
        I am learning <em>React</em>.
      </p>
    </div>
  );
}

export default MiniProfile;
Important JSX rules
// Correct
<img src="image.jpg" alt="Profile" />

// Correct
<br />

// Correct
<div>
  <h1>Hello</h1>
</div>
JSX tags must be properly closed.