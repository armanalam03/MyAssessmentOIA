import React, {useState} from 'react'
import '../styles/Upload.css'
import { FileUploader } from "react-drag-drop-files";
import Papa from "papaparse";
import XLSXIcon from '../assets/icons/xlsx-icon.png'
import UploadIcon from '../assets/icons/upload-icon.png'
import DropdownArrow from '../assets/icons/dropdown-arrow.png'
import CrossIcon from '../assets/icons/cross-icon.png'
import DashBoardHeader from './DashBoardHeader';
import toast from 'react-hot-toast';


function Upload() {
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [fileData, setFileData] = useState();
  
  const fileTypes = ["CSV"];

  const handleChange = (file) => {
    setFile(file);
  };

  const handleUploadFile = () => {
    let parsedFileData = [];
    if(file){
    setIsLoading(true);
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const data = results.data;
        data.map((item) => {
          parsedFileData.push({
            id: item.id,
            links: item.links,
            prefix: item.prefix,
            tags: item["select tags"].split(","),
            selectedTags: []
          })
        });
        setFileData(parsedFileData)
        setIsLoading(false);
        setFile(null);
      },
    })}
      else {
        toast.error('Please upload a file')
      }
  };

  return (
    <section className="upload-section-container">
      <DashBoardHeader />
      <div className="center-container">
        <FileUploader
          handleChange={handleChange} 
          name="file" 
          types={fileTypes} 
          children={
            <div className="file-upload-container">
              <div className="icon-text-container">
                <img src={XLSXIcon} alt="xlsx-file" className='file-icon' />
                <span>
                  {file ? file.name : (<span>Drop your excel sheet here or <span style={{color: '#605BFF', fontWeight: "600"}}>Browse</span></span>)}
                </span>
              </div>
            </div>
          }
        />
        {file && <span className="remove-file-btn"    onClick={() => setFile(null)}>
            Remove
          </span>}
        <div className="upload-btn" onClick={handleUploadFile}>
          {isLoading ? (<div class="loadingio-spinner-rolling-fm47ca6np4p"><div class="ldio-hieps9bhgh5"><div></div></div></div>) : (<div><img src={UploadIcon} alt="upload" className='upload-icon' />
          <span className='btn-text'>
            Upload
          </span></div>)}
        </div>
      </div>
      {fileData && (<div className="uploads-container">
        <p>
          Uploads
        </p>
        <div className="uploads-table">
          <div className="table-title">
            <span className="slno title">
              Sl No.
            </span>
            <span className="links title">
              Links
            </span>
            <span className="prefix title">
              Prefix
            </span>
            <span className="tags title">
              Add Tags
            </span>
            <span className="selected-tags title">
              Selected Tags
            </span>
          </div>
          {fileData.map((item, rootIndex) => (<div className="table-row"  key={rootIndex}>
            <span className="slno">
              {item.id < 10 ? `0${item.id}` : item.id}
            </span>
            <a href={`https://www.${item.links}`} className='links link'>
              {`www.${item.links}`}
            </a>
            <span className="prefix">
              {item.prefix}
            </span>
            <div className="tags tags-dropdown-container">
              <div className="dropdown" onClick={(e) => {
                e.currentTarget.children[1].classList.toggle('inactive')
                e.currentTarget.children[1].classList.toggle('active')
              }} >
                <div className="tags-dropdown">
                  <span className="dropdown-title">
                    Select Tags
                  </span>
                  <img src={DropdownArrow} alt="arrow" className='dropdown-arrow' />
                </div>
                <div className="popover inactive">
                  {item.tags.map((tag, index) => (
                    <span className="popover-item" key={index} onClick={() => {
                      if(fileData[rootIndex].selectedTags.indexOf(tag) === -1) {
                        fileData[rootIndex].selectedTags.push(tag)
                        setFileData([...fileData])
                      }
                    }} >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="selected-tags selected-tags-container">
              {item.selectedTags?.map((tag, index) => (
                <div className="tag" key={index}>
                  <span className="tag-name">
                    {tag}
                  </span>
                  <img src={CrossIcon} alt="Dlt" className='cross-icon' onClick={(e) => {
                    fileData[rootIndex].selectedTags.splice(index, 1)
                    setFileData([...fileData])
                  }} />
                </div>
              ))}
            </div>
          </div>))}
        </div>
      </div>)}
    </section>
  )
}

export default Upload