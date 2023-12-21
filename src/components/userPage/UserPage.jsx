import React, { useEffect } from "react";
import PostCard from "../homePage/PostCard";
import { Dropdown } from "bootstrap";
import { VscInfo } from "react-icons/vsc";
import { MdOutlineLocationOn } from "react-icons/md";
import { HiPencil } from "react-icons/hi";
import { BsBoxArrowRight, BsCursor } from "react-icons/bs";
import RecommendGroups from "../groups/RecommendGroups";
import { FaRegHandPointRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { userPost } from "../constant";

const UserPage = () => {
  useEffect(() => {
    // Initialize Bootstrap dropdown
    const dropdownElementList = [].slice.call(
      document.querySelectorAll(".dropdown-toggle")
    );
    dropdownElementList.map(function (dropdownToggle) {
      return new Dropdown(dropdownToggle);
    });
  }, []);

  return (
    <>
      <div className="container w-100 p-0 ">
        <div className="container mt-5 ">
          <div className="container d-flex flex-row">
            <div className="me-3 border-bottom pb-2 border-black">
              All Posts(32)
            </div>
            <div className="me-3 d-none d-md-flex">Article</div>
            <div className="me-3 d-none d-md-flex">Event</div>
            <div className="me-3 d-none d-md-flex">Education</div>
            <div className="me-3 d-none d-md-flex">Job</div>

            {/* Write Post Dropdown Button */}
            <div className=" d-flex dropdown ms-auto justify-content-center d-md-flex d-none mb-2">
              <button
                className="btn bg-light dropdown-toggle mx-3"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="true"
              >
                Write a Post
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
              {/* Join Button */}
              <div className=" ms-auto justify-content-center align-items-center d-md-flex d-none">
                <button
                  className="btn border border-1"
                  type="button"
                  aria-expanded="false"
                >
                  <BsBoxArrowRight style={{ fontSize: "20px" }} /> Leave Group
                </button>
              </div>
            </div>
            {/* Filter All Button For Mobile */}
            <div className="dropdown ms-auto justify-content-center d-sm-flex d-md-none mb-2">
              <button
                className="btn bg-light dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="true"
              >
                Filter All
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="border-top w-100 bg-gray-200 mb-3"></div>

          {/* All users Data Place here */}

          <div className="row d-flex align-items-start">
            <div className="col col-sm-block col-md-8 col-lg-8 p-0 ">
            <PostCard
                imageSrc="../src/assets/Rectangle5.png"
                userImg="../src/assets/sarthak.png"
                userName="Sarthak Kamra"
                category="✍️ Article"
                title="React Hooks: The Power of State Management"
                paragraph="Learn how to manage state efficiently in your React applications with React Hooks..."
              />
              <PostCard
                imageSrc="../src/assets/Rectangle 6.png"
                userImg="../src/assets/sara.png"
                userName="Sarah West"
                category="🔬️ Education"
                title="Tax Benefits for Investment under National Pension Scheme launched by Government"
                paragraph="Learn how to manage state efficiently in your React applications with React Hooks..."
              />
              <PostCard
                imageSrc="../src/assets/Rectangle 7.png"
                userImg="../src/assets/ronal.png"
                userName="Ronal Jones"
                category="🗓️ Meetup"
                title="Finance & Investment Elite Social Mixer @Lujiazui"
                paragraph="Learn how to manage state efficiently in your React applications with React Hooks..."
              />
              <PostCard
                // imageSrc="../src/assets/Rectangle 5.png"
                userImg="../src/assets/joseph.png"
                userName="Joseph Gray"
                category="Technology"
                title="Software Developer"
                paragraph="Learn how to manage state efficiently in your React applications with React Hooks..."
              />
     
            </div>

            <div className="col align-items-start p-4 mt-4 d-none d-md-block">
              <div className="d-flex  align-items-center mb-2">
                <MdOutlineLocationOn style={{ fontSize: "24px" }} />
                {/* <h6>Nodia, India</h6> */}
                <input
                  type="text"
                  placeholder="Enter your location"
                  className="border-0"
                  style={{ outline: "none" }}
                />
                <IoClose className="ms-auto" style={{ fontSize: "25px" }} />
              </div>
              <div class="border-top w-100 bg-gray-200 mb-3"></div>

              <div className="d-flex w-100 my-4">
                <VscInfo
                  className="mx-2"
                  style={{ fontSize: "22px", width: "25" }}
                />
                <p className="text-secondary px-1" style={{ fontSize: "13px" }}>
                  Your location will help us serve better and extend a
                  personalised experience.
                </p>
              </div>

              <div className="py-4">
                <h5 className="py-3 d-flex justify-content-center align-items-center text-uppercase text-secondary">
                  <FaRegHandPointRight className="mx-1" /> Recommended Groups
                </h5>
                <RecommendGroups 
                userName="Leisure"
                userImg="../src/assets/Leisure.png"
                />
                <RecommendGroups 
                userName="Activism"
                userImg="../src/assets/Activism.png"
                />
                <RecommendGroups 
                userName="MBA"
                userImg="../src/assets/MBA.png"
                />
                <RecommendGroups 
                userName="Philosophy"
                userImg="../src/assets/Philosophy.png"
                />

              </div>
              <div className="d-flex justify-content-end">
                <button
                  className="border-0 bg-transparent text-primary"
                  style={{ fontSize: "12px" }}
                >
                  See More...
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPage;
