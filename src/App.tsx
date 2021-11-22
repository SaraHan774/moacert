import React from "react";
import "./App.css";

function App() {

  const onAddCertClick = () => {
    // open file explorer

    // search for PNG, JPEG, PDF 

    // open certificate editor 

    // let user type in date, name, etc. 

    // if PDF, create a preview image 

    // on edit finish, add the item to the list 
    alert("Add certificate")
  }

  const onRemoveCertClick = () => {
    // display selection icon for all list items 

    // let user select multiple certificates 

    // delete selected items after 'are you sure' dialog. 
    alert("Remove certificate")
  }

  return (
    <div className="App">
      <h1 className="App-title">MOACERT v0.0.1</h1>
      <div className="center">
        <button className="Add-certificate" onClick={onAddCertClick}>Add Certificate</button>
        <button className="Remove-certificate" onClick={onRemoveCertClick}>Remove Certificate</button> 
      </div>
      <div className="App-body">
        <h2>Certificate Lists</h2>
        <ul className="Certificate-list">
          <li>List Item 1</li>
          <li>List Item 2</li>
          <li>List Item 3</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
