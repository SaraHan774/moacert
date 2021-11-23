import React from "react";
import "./FileSelector.css";

const FileSelector = () => {
    return(
        <div className="File-selector-outer">
            <div className="File-selector-inner">
                <h3>Select a Certificate</h3>
                <input type="file" id="choose-certificate-input" name="choose-certificate-input"/>
            </div>
        </div>
    ); 
}

export default FileSelector; 