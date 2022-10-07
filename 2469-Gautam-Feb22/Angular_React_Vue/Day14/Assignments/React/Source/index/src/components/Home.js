import logo from '../assets/radix_logo.jpeg';
export default function Home(){
    return(
        <div>
        <div className="container-fluid">
        <div className="row">
            <div className="col p-5 bg-secondary vh-100 text-center">
                <img src={logo} alt="radix logo" height="500px" width="600px"></img>
            </div>
        </div>
    </div>
    </div>
    );  
}