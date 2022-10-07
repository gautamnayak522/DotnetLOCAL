export default function Calculator(){
    function cal(){
        let firstno=parseInt(document.getElementById("num1").value);
        let secondno=parseInt(document.getElementById("num2").value);
       let result = 0;
        
        if(document.getElementById('add').checked){
        result = firstno + secondno;     
        document.getElementById("ans").style.display="block";  
        document.getElementById("ans").innerHTML = "Answer is " + result;
        }
        else if(document.getElementById('sub').checked){
        result = firstno - secondno;
        document.getElementById("ans").style.display="block";  
        document.getElementById("ans").innerHTML = "Answer is " + result;
        }
        else if(document.getElementById('mul').checked){
        result = firstno * secondno;
        document.getElementById("ans").style.display="block";  
        document.getElementById("ans").innerHTML = "Answer is " + result;
        }
        else if(document.getElementById('div').checked){
        result = firstno / secondno;
        document.getElementById("ans").style.display="block";  
        document.getElementById("ans").innerHTML = "Answer is " + result;
        }
    }
    function reset(){
        document.getElementById('ans').style.display='none';
    }
    return(
        <div>
           <form className="text-center p-5">  
            <label for="num1">Please enter first number : </label>
            <input type="number" id="num1" name="num1" placeholder="Enter First Value" required/> <br/><br/>

            <label for="num2">Please enter second number : </label>
            <input type="number" id="num2" name="num2" placeholder="Enter Second Value" required/> <br/><br/>

            <label for="op">Please select operation you want to perform :</label> <br/>
            
            <input type="radio" id="add" name="op" value="add" required/>
            <label for="add">ADDITION</label> 
            
            <input type="radio" id="sub" name="op" value="sub"/>
            <label for="sub">SUBTRACTION</label>

            <input type="radio" id="mul" name="op" value="mul"/>
            <label for="mul">MULTIPICATION</label>
            
            <input type="radio" id="div" name="op" value="div"/>
            <label for="div">DIVISION</label> <br/><br/>
             
            <button className="bg-primary" type="button" onClick={cal}>CALCULATE</button>
            <button type="reset" className="bg-danger" onClick={reset}>RESET</button>
          
            <br/><br/>

            <label id="ans"></label>

         </form> 
        </div>
    );
}