import React, { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { IoMdLogOut, IoMdMenu } from "react-icons/io";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const [selectedLink, setSelectedLink] = useState("LandingPage");
  const navigate = useNavigate();
  const sidebar = useRef(null);

 
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };
  const handleLinkClick = (link) => {
    setSelectedLink(link);
    navigate(`/dashboard/${link}`);
    if (sidebarOpen) {
      setSidebarOpen(false);
    }
  };
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <aside
        ref={sidebar}
        className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-white duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between  h-16 bg-gray-100 border-b border-gray-200 px-4">
          <Link
            to="/dashboard/landingpage"
            className="text-2xl font-bold text-gray-900 no-underline ml-10 md:ml-0" 
            onClick={() => handleLinkClick("landingpage")}
          >
            Quickmart
          </Link>
        </div>
        <div className="md:overflow-y-auto">
          <ul className="py-4">
            <li
              className={`cursor-pointer px-6 py-2 ${
                selectedLink === "Category" && "bg-gray-200"
              }`}
              onClick={() => handleLinkClick("Category")}
            >
              Category
            </li>
            <li
              className={`cursor-pointer px-6 py-2 ${
                selectedLink === "user" && "bg-gray-200"
              }`}
              onClick={() => handleLinkClick("user")}
            >
              Users
            </li>
            <li
              className={`cursor-pointer px-6 py-2 ${
                selectedLink === "order" && "bg-gray-200"
              }`}
              onClick={() => handleLinkClick("order")}
            >
              Orders
            </li>
            <li
              className={`cursor-pointer px-6 py-2 ${
                selectedLink === "addProduct" && "bg-gray-200"
              }`}
              onClick={() => handleLinkClick("addProduct")}
            >
              Add New Product
            </li>
            <li
              className={`cursor-pointer px-6 py-2 ${
                selectedLink === "getProduct" && "bg-gray-200"
              }`}
              onClick={() => handleLinkClick("getProduct")}
            >
              Get All Product
            </li>
            <li
              className={`cursor-pointer px-6 py-2 ${
                selectedLink === "updateProduct" && "bg-gray-200"
              }`}
              onClick={() => handleLinkClick("updateProduct")}
            >
              Update Product Details
            </li>
            <li
              className={`cursor-pointer px-6 py-2 ${
                selectedLink === "deleteProduct" && "bg-gray-200"
              }`}
              onClick={() => handleLinkClick("deleteProduct")}
            >
              Delete Product
            </li>
            <li
              className={`cursor-pointer px-6 py-2 ${
                selectedLink === "Logout" && "bg-gray-200"
              }`}
              onClick={handleLogout}
            >
              <div className="flex items-center">
                <IoMdLogOut className="w-6 h-6 mr-2" />
                Logout
              </div>
            </li>
          </ul>
        </div>
      </aside>
      <button
        className="md:hidden flex items-center justify-between h-16 top-0 left-0 z-50 p-4"
        onClick={toggleSidebar}
      >
        <IoMdMenu className="w-8 h-8" />
      </button>
    </>
  );
};

export default Sidebar;