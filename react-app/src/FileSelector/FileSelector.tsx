import axios from "axios";
import React, {useState} from "react";
import "./FileSelector.css";

interface FileSelectorProps {
    onDialogCloseClicked: () => void;  
    onSelectCertificateClicked: () => void;
}

const FileSelector: React.FunctionComponent<FileSelectorProps> = (props) => {
    
    const [isSelected, setIsSelected] = useState(false) 
    const [isUploading, setIsUploading] = useState(false)

    const upload = (file: File) => {
        setIsUploading(true)
        axios.post("server url", file) 
        .then( (response) => {      
            // after upload complete, navigate to editor page
            if(response.status === 200) {
                setTimeout( () => {
                    setIsUploading(false)
                }, 2000)
            }
        }
        ).catch((error) => {
            console.error(error)
            // alert("uploading file to the server failed")
        })

        // edit & save again 
    }

    const onFileChange = (fileList: FileList | null) => {
        if (fileList !== null) {
          // check file data 
          const file: File | null = fileList.item(0)
          // const metaData = file?.name + " / " + file?.type + " / " + file?.size
          // alert(metaData) 
          // 3.txt / text/plain / 1467422
          if (file !== null) {
              setIsSelected(true)
              
              // upload to server
              upload(file)
          }
        }
      }

    return(
        <div className="File-selector-outer">
            <div className="File-selector-inner">
                <h3>Select a Certificate</h3>
                <input type="file" 
                    id="choose-certificate-input" 
                    name="choose-certificate-input" 
                    onChange={(e) => onFileChange(e.target.files)}
                    />
                <br/>
                <button className="Button-selector-close" onClick={() => props.onDialogCloseClicked()}>close</button>
                <button className="Button-selector-choose" onClick={() => {props.onSelectCertificateClicked()}} 
                disabled={!isSelected}>select</button>
            </div>
        </div>
    ); 
}

export default FileSelector; 