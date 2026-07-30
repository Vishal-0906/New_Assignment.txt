Session 1 — Introduction to React
Question 1
Install Node.js and use npx create-react-app to set up a new React project called InstaCloneStarter.
Answer
Open your terminal and run:
npx create-react-app InstaCloneStarter
Go inside the project:
cd InstaCloneStarter
Start the React application:
npm start
The application will normally open at:
http://localhost:3000
Question 2
Open App.js and change the default text to display "Welcome to My React Zomato App" inside an <h1> tag.
Answer — App.js
function App() {
  return (
    <div>
      <h1>Welcome to My React Zomato App</h1>
    </div>
  );
}

export default App;
Question 3
Create a functional component called TrendingSong.js that returns an <h2> element with the text "Trending on Spotify: Calm Down". Import and use this component inside App.js.
Answer — TrendingSong.js
function TrendingSong() {
  return (
    <h2>Trending on Spotify: Calm Down</h2>
  );
}

export default TrendingSong;
App.js
import TrendingSong from "./TrendingSong";

function App() {
  return (
    <div>
      <h1>Welcome to My React Zomato App</h1>

      <TrendingSong />
    </div>
  );
}

export default App;
Question 4
Explain in your own words how React's Virtual DOM makes updating the UI faster compared to traditional DOM manipulation.
Answer
React uses a Virtual DOM, which is a lightweight representation of the real DOM.
When the state or data changes, React first updates the Virtual DOM and compares it with the previous version. It identifies only the elements that actually changed and updates those parts of the real DOM instead of updating the entire page.
Therefore, React can make UI updates more efficient.