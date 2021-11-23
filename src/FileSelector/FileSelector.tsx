import React from "react";
import "./FileSelector.css";

interface FileSelectorProps {
    onDialogCloseClicked: () => void; 
    onSelectCertificateClicked: () => void; 
}

const FileSelector: React.FunctionComponent<FileSelectorProps> = (props) => {
    return(
        <div className="File-selector-outer">
            <div className="File-selector-inner">
                <h3>Select a Certificate</h3>
                <input type="file" id="choose-certificate-input" name="choose-certificate-input"/>
                <br/>
                <button className="Button-selector-close" onClick={() => props.onDialogCloseClicked()}>close</button>
                <button className="Button-selector-choose" onClick={() => props.onSelectCertificateClicked()}>select</button>
            </div>
        </div>
    ); 
}

export default FileSelector; 