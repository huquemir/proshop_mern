import React, {useState} from 'react'



const ReportScreen = () => {

    



    const handleClick = () => {
        let text;
        let person = prompt("Please enter your name:", "Enter your name");
        if (person == null || person == "") {
          text = "User cancelled the prompt.";
        } else {
          text = "Thanks for uploading " + person;
        }

        document.getElementById("demo").innerHTML = text;
    }
    const [file, setFile] = useState()

    function handleChange(event) {
      setFile(event.target.files[0])
    }
    
    ;

  return (
    <div className="Report">
          <h1>Reports</h1>

    
          <h2>HTML Table</h2>

<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
  <tr>
    <td>Ernst Handel</td>
    <td>Roland Mendel</td>
    <td>Austria</td>
  </tr>
  <tr>
    <td>Island Trading</td>
    <td>Helen Bennett</td>
    <td>UK</td>
  </tr>
  <tr>
    <td>Laughing Bacchus Winecellars</td>
    <td>Yoshi Tannamuri</td>
    <td>Canada</td>
  </tr>
  <tr>
    <td>Magazzini Alimentari Riuniti</td>
    <td>Giovanni Rovelli</td>
    <td>Italy</td>
  </tr>
</table>
          <br></br>
          <br></br>
          <input type="file" onChange={handleChange}/>
          <br></br>
          <br></br>
          <button id="uploadfile" onClick={handleClick}>Upload</button>

    <p id="demo"></p>
  </div>

    
  )
}

export default ReportScreen
