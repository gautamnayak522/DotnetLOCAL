import './App.css';

var name="gautam";
function change(a)
{
  return a.toUpperCase();
}
function App() {
  return (
<div>
    <header>
    <h1>Greetings of the day <span>{change(name)}</span></h1>
    </header>
    <div class="container text-center pt-5">
          <input class="text-center" type="text" value={name}/>
    </div>
  </div>
  );
}

export default App;
