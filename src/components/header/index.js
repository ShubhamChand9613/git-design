import React from "react";
import { BsBell, BsStar, BsCode } from 'react-icons/bs';
import { GoRepoForked } from 'react-icons/go';
import { BiPlayCircle } from 'react-icons/bi';
import { VscIssues, VscGitPullRequest } from 'react-icons/vsc';
import { GrProjects } from "react-icons/gr";
import { FiBookOpen } from "react-icons/fi";
import { MdOutlineSystemSecurityUpdateWarning } from "react-icons/md";
import { CgInsights } from "react-icons/cg";

const Header = () => {
  return (
  <>
  <nav className="navbar">
    <div className="container">
      <div className="d-flex justify-content-between w-100">
        <div className="left_one">
          <div className="d-flex">
            <h5 className="pr-2">facebook</h5>
            <span className="pr-2">/</span>
            <h5 className="bold_one">react</h5>
            <span class="badged">Public</span>
          </div>
        </div>
        <div className="right_one">
          <button className="btn btn-primary me-2"><BsBell /> Notifications</button>
          <button className="btn btn-primary me-2"><BsStar /> Star <span className="nums">175</span></button>
          <button className="btn btn-primary me-2"><GoRepoForked /> Fork <span className="nums">35.3k</span></button>
        </div>
      </div>
      <div className="d-flex inner_nav pt-4">
      {/* #d0d7de52 */}
        <span className="btn me-2"><BsCode /> Code</span>
        <span className="btn me-2"><VscIssues /> Issues</span>
        <span className="btn me-2"><VscGitPullRequest/> Pull requests</span>
        <span className="btn me-2"><BiPlayCircle /> Actions</span>
        <span className="btn me-2"><GrProjects /> Projects</span>
        <span className="btn me-2"><FiBookOpen /> Wiki</span>
        <span className="btn me-2"><MdOutlineSystemSecurityUpdateWarning /> Security</span>
        <span className="btn me-2"><CgInsights/> Insights</span>
      </div>
    </div>
  </nav>
</>
  );
};

export default Header;