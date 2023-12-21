import React from "react";

const RecommendGroups = ({userName, userImg}) => {
  return (
    <div className="container p-0 my-2">
      <div className="card-body ">
        <div className="post-footer px-3 d-flex justify-content-between align-items-center pb-3">
          <div className="author-info d-flex align-items-center">
            <img src={userImg} className="avatar" alt="Avatar" />
            <div className="px-2">
              <p className="card-author mb-0 fw-semibold">{userName}</p>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div>
              <button className="border-0 " style={{fontSize:"12px", padding:"4px 12px", borderRadius:"14px"}}>Follow</button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendGroups;
