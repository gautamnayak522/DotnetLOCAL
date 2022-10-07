export default function Day1ex3(){
	return(
	<form>
		<label for="name">User name:</label>
		<input type="text" id="name" name="name"/><br/><br/>
		
		<label for="pass">Password:</label>
		<input type="text" id="pass" name="pass"/><br/><br/>
  
		<input type="submit" value="Login"/>
	</form>
);
}