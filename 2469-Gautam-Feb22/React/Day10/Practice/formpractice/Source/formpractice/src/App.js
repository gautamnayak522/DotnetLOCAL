import './App.css';
import FormPractice from './components/formpractice';
import UncontrolledForm from './components/uncontrolledform';
var task = "Form PRACTICE";
function App() {
  return (
    <div>
        <p>Task : {task}</p>
        <FormPractice></FormPractice>
        <hr/>
        <p>Uncontrolled form</p>
        <UncontrolledForm></UncontrolledForm>

    </div>
  );
}
export default App;
