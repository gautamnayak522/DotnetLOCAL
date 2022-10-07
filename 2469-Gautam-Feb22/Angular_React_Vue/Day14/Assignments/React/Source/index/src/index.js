import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./components/Home";
import Html from "./components/Html";
import Css from "./components/Css";
import Javascript from "./components/Javascript";
import Day1ex1 from "./components/HTML/Day1/Exercise/Day1ex1";
import Day1ex2 from "./components/HTML/Day1/Exercise/Day1ex2";
import Day1ex3 from "./components/HTML/Day1/Exercise/Day1ex3";
import Day1ex4 from "./components/HTML/Day1/Exercise/Day1ex4";
import Day1ex5 from "./components/HTML/Day1/Exercise/Day1ex5";
import Day1ex6 from "./components/HTML/Day1/Exercise/Day1ex6";
import Day1assi1 from "./components/HTML/Day1/Assignment/day1assi1";
import Day2assi1 from "./components/HTML/Day2/Assignment/day2assi1";
import Day2pr1 from "./components/HTML/Day2/Practice/day2pr1";
import Day2pr2 from "./components/HTML/Day2/Practice/day2pr2";
import CSSDay1assi1 from "./components/CSS/Day1/Assignment/day1assi1";
import CSSDay2assi2 from "./components/CSS/Day2/Assignment/day2assi2";
import Calculator from "./components/JAVASCRIPT/Day1/Assignment/calculator";
import JSDay2assi1 from "./components/JAVASCRIPT/Day2/Assignment/day2assi1";
import JSDay3assi1 from "./components/JAVASCRIPT/Day3/Assignment/day3assi1";
import htmlimage from "./assets/html.png";
import cssimage from "./assets/css.png";
import jsimage from "./assets/js.png";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/Html" element={<Html />}>
          <Route
            path="/Html"
            element={
              <img
                src={htmlimage}
                width="500px"
                alt="Html image"
                className="pt-5"
              />
            }
          />
          <Route path="/Html/Day1/Exercise/exercise1" element={<Day1ex1 />} />
          <Route path="/Html/Day1/Exercise/exercise2" element={<Day1ex2 />} />
          <Route path="/Html/Day1/Exercise/exercise3" element={<Day1ex3 />} />
          <Route path="/Html/Day1/Exercise/exercise4" element={<Day1ex4 />} />
          <Route path="/Html/Day1/Exercise/exercise5" element={<Day1ex5 />} />
          <Route path="/Html/Day1/Exercise/exercise6" element={<Day1ex6 />} />
          <Route
            path="/Html/Day1/Assignment/assignment1"
            element={<Day1assi1 />}
          />
          <Route
            path="/Html/Day2/Assignment/assignment1"
            element={<Day2assi1 />}
          />
          <Route path="/Html/Day2/Practice/practice1" element={<Day2pr1 />} />
          <Route path="/Html/Day2/Practice/practice2" element={<Day2pr2 />} />
        </Route>

        <Route path="/Css" element={<Css />}>
          <Route
            path="/Css"
            element={
              <img
                src={cssimage}
                width="350px"
                alt="Css image"
                className="pt-5"
              />
            }
          />
          <Route
            path="/Css/Day1/Assignment/assignment1"
            element={<CSSDay1assi1 />}
          />
          <Route
            path="/Css/Day2/Assignment/assignment2"
            element={<CSSDay2assi2 />}
          />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>Error 404 : There's nothing here!</p>
              </main>
            }
          />
        </Route>
        <Route path="/javascript" element={<Javascript />}>
          <Route
            path="/javascript"
            element={
              <img
                src={jsimage}
                width="500px"
                alt="JS image"
                className="pt-5"
              />
            }
          />
          <Route
            path="/javascript/Day1/Assignment/assignment1"
            element={<Calculator />}
          />
          <Route
            path="/javascript/Day2/Assignment/assignment1"
            element={<JSDay2assi1 />}
          />
           <Route
            path="/javascript/Day3/Assignment/assignment1"
            element={<JSDay3assi1 />}
          />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>Error 404 : There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
