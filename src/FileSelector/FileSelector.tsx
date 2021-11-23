import React from "react";
import "./FileSelector.css";

interface FileSelectorProps {
    onDialogCloseClicked: () => void; 
}

const FileSelector: React.FunctionComponent<FileSelectorProps> = (props) => {
    return(
        <div className="File-selector-outer">
            <div className="File-selector-inner">
                <h3>Select a Certificate</h3>
                <input type="file" id="choose-certificate-input" name="choose-certificate-input"/>
                <br/>
                <button className="Button-close-selector" onClick={() => props.onDialogCloseClicked()}>close</button>
            </div>
        </div>
    ); 
}

export default FileSelector; 