import { Link,Outlet } from 'react-router-dom';
export default function Html() {
  return (
    <div className="container-fluid">
    <div className="row">
    <div className="col-3 p-0 bg-secondary position-sticky" id="sticky-sidebar">
                
                <div className="flex-column flex-nowrap vh-100 overflow-auto text-white p-2">
        
                    <h3 className="text-center text-dark"><a>HTML</a></h3>
        
                    <ul>
                        <li>
                            Day1
                            <ul>
                                <li>Exercise
                                    <ul>
                                        <li><Link to="./Day1/Exercise/exercise1">exercise1</Link></li>
                                        <li><Link to="./Day1/Exercise/exercise2">exercise2</Link></li>
                                        <li><Link to="./Day1/Exercise/exercise3">exercise3</Link></li>
                                        <li><Link to="./Day1/Exercise/exercise4">exercise4</Link></li>
                                        <li><Link to="./Day1/Exercise/exercise5">exercise5</Link></li>
                                        <li><Link to="./Day1/Exercise/exercise6">exercise6</Link></li>
                                    </ul>
                                </li>
                                <li>Assignment
                                    <ul>
                                        <li><Link to="./Day1/Assignment/Assignment1">Assignment 1</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                          Day2
                          <ul>
                              <li>Exercise
                                  
                              </li>
                              <li>Assignment
                                  <ul>
                                  <li><Link to="./Day2/Assignment/Assignment1">Assignment 1</Link></li>
                                  </ul>
                              </li>
                              <li>Practice
                                  <ul>
                                  <li><Link to="./Day2/Practice/practice1">Practice 1</Link></li>
                                  <li><Link to="./Day2/Practice/practice2">Practice 2</Link></li>
                                  </ul>
                              </li>
                          </ul>
                      </li>
                    </ul>
                </div>
            </div>
      <div className="offset-3 col-9 position-fixed p-0" id="main">
        <div className="vh-100 overflow-auto p-3">
            <Outlet></Outlet>
        </div>
      </div>
     </div>
    </div>
  );
}
