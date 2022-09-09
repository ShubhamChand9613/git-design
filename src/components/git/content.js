
import React, {useState,useEffect} from "react";
import { BiComment } from 'react-icons/bi';
import { VscIssues } from 'react-icons/vsc';

const GitContent = (props) => {
  console.log("props",props.data)
  const[myLable, setMyLabel] = useState(props.data.labels)
  console.log(props.data.labels,"33")
  return (
    <div className="all_content">
      <div className="row">
        <div className="col-md-8 pt-3 pb-3 ps-5">
        <div className="relative w-100">
          <VscIssues className="icons"/>
          <div className="d-flex align-items-center flex-wrap">
          <h5>{props.data.title}</h5>
          {props.data.labels.map((item)=>(
            <>
           {item.name=="Type: Bug" ? <span className="status_label mt-2 color1 mb-2">Type: Bug</span> : ""}
           {item.name=="Status: Unconfirmed" ?  <span className="status_label color2 mt-2 mb-2">Status: Unconfirmed</span> : ""}
          {item.name=="Component: ESLint Rules" ? <span className="status_label color3 mt-2 mb-2">Component: ESLint Rules</span> : ""}
          {item.name=="Component: Developer Tools" ? <span className="status_label color4 mt-2 mb-2">Component: Developer Tools</span> : ""}
           </>
            ))}
          </div>
        </div>
          <div className="numb">
            #{props.data.number}
          </div>
        </div>
        <div className="col-md-2 pt-3">
          <img src={props.data.user.avatar_url} alt="round-image" 
          className="user_img rounded-circle"/>
        </div>
        <div className="col-md-2 pt-3">
          <div className="comment me-3">
          {props.data.comments > 0 ? 
            <>
            <BiComment /> {props.data.comments}
            </>
            :
            ""
          }
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitContent;