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
    <th>Products</th>
    <th>Sales</th>
    <th>Profit</th>
  </tr>
  <tr>
    <td>IPHONE 11 PRO 256GB MEMORY</td>
    <td>150</td>
    <td>$500000</td>
  </tr>
  <tr>
    <td>LOGITECH G-SERIES GAMING MOUSE</td>
    <td>200</td>
    <td>$30000</td>
  </tr>
  <tr>
    <td>AIRPODS WIRELESS BLUETOOTH HEADPHONES</td>
    <td>150</td>
    <td>$80000</td>
  </tr>
  <tr>
    <td>AMAZON ECHO DOT 3RD GENERATION</td>
    <td>130</td>
    <td>$60000</td>
  </tr>
  <tr>
    <td>SONY PLAYSTATION 4 PRO WHITE VERSION</td>
    <td>50</td>
    <td>$30000</td>
  </tr>
  <tr>
    <td>CANNON EOS 80D DSLR CAMERA</td>
    <td>20</td>
    <td>$15000</td>
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
