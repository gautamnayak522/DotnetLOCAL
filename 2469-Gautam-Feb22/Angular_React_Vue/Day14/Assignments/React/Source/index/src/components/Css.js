import { Link, Outlet } from "react-router-dom";
export default function Css() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-3 p-0 bg-secondary position-sticky"
          id="sticky-sidebar"
        >
          <div className="flex-column flex-nowrap vh-100 overflow-auto text-white p-2">
            <h3 className="text-center text-dark">
              <a>CSS</a>
            </h3>

            <ul>
              <li>
                Day1
                <ul>
                  <li>
                    Exercise
                    <ul>
                      <li>
                      <li><Link to="./Day1/Exercise/exercise1">exercise1</Link></li>
                      </li>
                      <li>
                      <li><Link to="./Day1/Exercise/exercise2">exercise2</Link></li>
                      </li>
                      <li>
                      <li><Link to="./Day1/Exercise/exercise3">exercise3</Link></li>
                      </li>
                      <li>
                      <li><Link to="./Day1/Exercise/exercise4">exercise4</Link></li>
                      </li>
                      <li>
                      <li><Link to="./Day1/Exercise/exercise5">exercise5</Link></li>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Assignment
                    <ul>
                      <li>
                      <li><Link to="./Day1/Assignment/Assignment1">Assignment 1</Link></li>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                Day2
                <ul>
                  <li>
                    Exercise
                    <ul>
                      <li>
                      <li><Link to="./Day2/Exercise/exercise1">exercise1</Link></li>
                      </li>
                      <li>
                      <li><Link to="./Day2/Exercise/exercise2">exercise2</Link></li>
                      </li>
                      <li>
                      <li><Link to="./Day2/Exercise/exercise3">exercise3</Link></li>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Assignment
                    <ul>
                      <li>
                      <li><Link to="./Day2/Assignment/Assignment1">Assignment 1</Link></li>
                      </li>
                      <li>
                      <li><Link to="./Day2/Assignment/Assignment2">Assignment 2</Link></li>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                Day3
                <ul>
                  <li>
                    Exercise
                    <ul>
                      <li>
                      <li><Link to="./Day3/Exercise/exercise1">exercise1</Link></li>
                      </li>
                      <li>
                      <li><Link to="./Day3/Exercise/exercise2">exercise2</Link></li>
                      </li>
                      <li>
                      <li><Link to="./Day3/Exercise/exercise3">exercise3</Link></li>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Assignment
                    <ul>
                      <li>
                      <li><Link to="./Day3/Assignment/Assignment1">Assignment 1</Link></li>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                Day4
                <ul>
                  <li>
                    Exercise
                    <ul>
                    <li>
                      <li><Link to="./Day4/Exercise/exercise1">exercise1</Link></li>
                      </li>
                      <li>
                      <li><Link to="./Day4/Exercise/exercise2">exercise2</Link></li>
                      </li>
                      <li>
                      <li><Link to="./Day4/Exercise/exercise3">exercise3</Link></li>
                      </li>
                      <li>
                      <li><Link to="./Day4/Exercise/exercise4">exercise4</Link></li>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Assignment
                    <ul>
                      <li>
                      <li><Link to="./Day4/Assignment/Assignment1">Assignment 1</Link></li>
                      </li>
                      <li>
                      <li><Link to="./Day4/Assignment/Assignment2">Assignment 2</Link></li>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="offset-3 col-9 position-absolute p-0" id="main">
          <div className="vh-100 overflow-auto p-3">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
}
