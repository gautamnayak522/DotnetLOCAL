import { Link, Outlet } from "react-router-dom";
export default function Javascript() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-3 p-0 bg-secondary position-sticky"
          id="sticky-sidebar"
        >
          <div className="flex-column flex-nowrap vh-100 overflow-auto text-white p-2">
            <h3 className="text-center text-dark">
              <a>JAVASCRIPT</a>
            </h3>
            <ul>
              <li>
                Day1
                <ul>
                  <li>
                    Practice exercise
                    <ul>
                      <li>
                        <Link to="./Day1/Practice/Practice1">Ptactice 1</Link>
                      </li>
                      <li>
                        <Link to="./Day1/Practice/Practice2">Ptactice 2</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Assignment
                    <ul>
                      <li>
                        <Link to="./Day1/Assignment/Assignment1">
                          Assignment1
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                Day2
                <ul>
                  <li>
                    Practice exercise
                    <ul>
                      <li>
                        <Link to="./Day2/Practice/Practice1">Ptactice 1</Link>
                      </li>
                      <li>
                        <Link to="./Day2/Practice/Practice2">Ptactice 2</Link>
                      </li>
                      <li>
                        <Link to="./Day2/Practice/Practice3">Ptactice 3</Link>
                      </li>
                      <li>
                        <Link to="./Day2/Practice/Practice4">Ptactice 4</Link>
                      </li>
                      <li>
                        <Link to="./Day2/Practice/Practice5">Ptactice 5</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Assignment
                    <ul>
                      <li>
                        <Link to="./Day2/Assignment/Assignment1">
                          Assignment1
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                Day3
                <ul>
                  <li>
                    Practice exercise
                    <ul>
                      <li>
                        <Link to="./Day3/Practice/Practice1">Ptactice 1</Link>
                      </li>
                      <li>
                        <Link to="./Day3/Practice/Practice2">Ptactice 2</Link>
                      </li>
                      <li>
                        <Link to="./Day3/Practice/Practice3">Ptactice 3</Link>
                      </li>
                      <li>
                        <Link to="./Day3/Practice/Practice4">Ptactice 4</Link>
                      </li>
                      <li>
                        <Link to="./Day3/Practice/Practice5">Ptactice 5</Link>
                      </li>
                      <li>
                        <Link to="./Day3/Practice/Practice6">Ptactice 6</Link>
                      </li>
                      <li>
                        <Link to="./Day3/Practice/Practice7">Ptactice 7</Link>
                      </li>
                      <li>
                        <Link to="./Day3/Practice/Practice8">Ptactice 8</Link>
                      </li>
                      <li>
                        <Link to="./Day3/Practice/Practice9">Ptactice 9</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Assignment
                    <ul>
                      <li>
                        <Link to="./Day3/Assignment/Assignment1">
                          Assignment1
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                Day4
                <ul>
                  <li>
                    Practice exercise
                    <ul>
                      <li>
                        <a>Practice1</a>
                      </li>
                      <li>
                        <a>Practice2</a>
                      </li>
                      <li>
                        <a>Practice3</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Assignment
                    <ul>
                      <li>
                        <a>Assi1</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                Day5
                <ul>
                  <li>
                    Practice exercise
                    <ul>
                      <li>
                        <a>Practice1</a>
                      </li>
                      <li>
                        <a>Practice2</a>
                      </li>
                      <li>
                        <a>Practice3</a>
                      </li>
                      <li>
                        <a>Practice4</a>
                      </li>
                      <li>
                        <a>Practice5</a>
                      </li>
                      <li>
                        <a>Practice6</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                Day6
                <ul>
                  <li>
                    Practice exercise
                    <ul>
                      <li>
                        <a>Practice1</a>
                      </li>
                      <li>
                        <a>Practice2</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Assignment
                    <ul>
                      <li>
                        <a>Assi1</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="offset-3 col-9 position-absolute p-0" id="main">
          <div className="vh-100 overflow-scroll">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
