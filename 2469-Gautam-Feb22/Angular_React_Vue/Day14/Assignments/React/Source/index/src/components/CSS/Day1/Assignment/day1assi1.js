import React from 'react';
import './day1assi1.css';
export default function day1assi1(){

return(
    <div>
    <h1>Gautam Nayak</h1>
    <h4 className="post">Trainee software engineer</h4>
    <div className="test" aria-label="border"></div>

    <section>
        <div className="one" aria-label="details">
            <h4>Email : gautamnayak522@gmail.com</h4>
            <h4>Mobile No : 7623075610</h4>
            <h4>Address : Porbandar,Gujarat</h4>
            <h4>DOB : 08th April, 2001</h4>
            <h4>Github : <a href="https://github.com/gautamnayak522">gautamnayak522</a></h4>
            <br />
            <h2>Skills</h2>
            <ul>
                <li>Communication</li>
                <li>Problem Resolution</li>
                <li>Team Management</li>
                <li>Time Management</li>
            </ul>
            <br />
            <h2>Languages</h2>
            <ul>
                <li>Hindi</li>
                <li>English</li>
                <li>Gujarati</li>
            </ul><br />

            <h2>Personal Projects</h2>
            <h3>Online Learning Center</h3>
            <p>Overall goal of this system is to help the student as
                well as staff to maintain the teaching system
                in the best way possible and also reduce the human
                efforts.</p>
            <br />
            <h3>Video on my Project</h3>

            <video width="300" height="240" controls preload="auto" autoplay muted>
                <source src="../../../HTML/countdown.mp4" type="video/mp4"/>
                <track label="English" kind="captions"/>
            </video>

        </div>

        <div className="two" aria-label="box2">
            <h2>Objective</h2>
            <p>Extremely motivated to constantly develop my skills and grow professionally as well as mentally.
                Clear and Confident.</p>

            <br/>

            <h2>Education</h2>
            <h3>B.tech Computer Science and Engineering</h3>
            <p>Parul Institute of Technology,Baroda</p>
            <p className="block">08/2019-present</p>

            <h3>Diploma Computer Engineering</h3>
            <p>Atmiya Institute, Rajkot</p>
            <p className="block">06/2016-05/2019</p>

            <br/>

            <h2>Experiance</h2>
            <h3>Trainee Software Engineeer</h3>
            <p>Radixweb, Ahmedabad</p>

            <br/>

            <h2>Certificates</h2>
            <h3>CCC : Course on computer concepts</h3>
            <h3>Digital marketing</h3>
            </div>
    </section>
    </div>
);
}