import { Link, Outlet,useParams } from "react-router-dom";
export default function About(){
    let params = useParams();
    return(
        <div>
        <h1>ABOUT</h1>

        <nav >
        <Link to="./1">One</Link>  <br/>
        <Link to="./2">Two</Link>
        </nav>
        <p>{params.aboutId}</p>

      <Outlet>
      </Outlet>
      </div>

    );
}