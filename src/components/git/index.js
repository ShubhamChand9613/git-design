
import React, {useState,useEffect} from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { VscIssues } from 'react-icons/vsc';
import { BiCaretDown } from 'react-icons/bi';
import GitContent from "./content"
import Loader from "../loader";

const GitComponent = () => {
  const[myData, setMyData] = useState("")
  const [items, setItems] = useState([]);

  const [loader, setLoader] = useState(<Loader />);

  const gitData = () => {
    setLoader(<Loader />);
      axios
          .get(
              `https://api.github.com/repos/facebook/react/issues`,
          )
          .then(function (res) {
            setLoader("");
            setMyData(res.data)
          });
      };


    useEffect(() => {
        gitData();
    }, []);

  return (
     <div className="container mb-5">
     <div className="box mt-5">
       <div className="d-flex w-100 justify-content-between git_content" onScroll={()=>console.log("eeee")}>
          <div className="main_content">
          <span>
            <VscIssues /> 625 Open
          </span>
          <span className="ms-3 count">
            <VscIssues /> 10,104 Closed
          </span>
          </div>
          <div className="second_one">
            <span className="me-3">Author <BiCaretDown className="down-arrow"/></span>
            <span className="me-3">Label <BiCaretDown className="down-arrow"/></span>
            <span className="me-3">Projects <BiCaretDown className="down-arrow"/></span>
            <span className="me-3">Milestones <BiCaretDown className="down-arrow"/></span>
            <span className="me-3">Assignee <BiCaretDown className="down-arrow"/></span>
            <span className="me-3">Sort <BiCaretDown className="down-arrow"/></span>
          </div>
          </div>
        </div>
       {loader}
        {myData && myData.map((item)=>(
            <GitContent data={item}/>
          ))}
      </div>
  );
};

export default GitComponent;