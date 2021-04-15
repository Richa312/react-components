import './App.css';
import Tabs from './tabs'

function App() {
  const tabsData = [
    { 
      title: "Dogs",
      content: {
        type: "image-grid",
        data: [{
          src:"bird.jpg",
          caption:"This is the first dog."
        },{
          src:"dolphin.jpg",
          caption:"This is the 2nd dog."
        },{
          src:"winnie.png",
          caption:"This is the 3rd dog."
        },{
          src:"dolphin.jpg",
          caption:"This is the fourth dog."
        },{
          src:"bird.jpg",
          caption:"This is the fifth dog."
        }]
      }
    },
    {
      title: "Cats",
      content: ["tabby", "theodore"]
    },
    {
      title: "Birds",
      content: ["Monty", "Tweety"]
    }
  ];
  return (
    <div className="App">
      <Tabs tabsData = {tabsData} />
    </div>
  );
}

export default App;
