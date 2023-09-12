import React, { useState } from "react";
import MenuOption from "./MenuOption";
import "./ToggleMenu.css";
import { CONFIG } from "../../common/Constants";
import { BiSupport } from "react-icons/bi";
import { FaBars, FaHome, FaSignOutAlt } from "react-icons/fa";

function ToggleMenu() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const handleDocumentClick = (event) => {
    if (!event.target.closest(".toggle-menu")) {
      setIsMenuVisible(false);
    }
  };

  document.addEventListener("click", handleDocumentClick);

  const toggleMenuClass = `toggle-menu ${
    isMenuVisible ? "active" : ""
  } ${CONFIG.type.toLowerCase()}-menu`;

  // FontIcons
  const iconComponents = {
    FaBars: <FaBars />,
    FaHome: <FaHome />,
    FaSignOutAlt: <FaSignOutAlt />,
    BiSupport: <BiSupport />,
  };

  // Filter records based on visibility = 'enable'
  const enabledRecords = CONFIG.records.filter(
    (record) =>
      record.visibility === "enable" || record.visibility === "disable"
  );

  const handleAction = (action, title) => {
    if (action) {
      // Handle the action based on its type like hover and clicked
      switch (action.type) {
        case "hover":
          console.log(`Hovered over ${title}`);
          action.cb();
          break;
        case "click":
          console.log(`Clicked on ${title}`);
          action.cb();
          break;
        default:
          break;
      }
    }
  };

  
  return (
    <div className={toggleMenuClass}>
      <div className="menu-header">
        {iconComponents[CONFIG.icon] && (
          <div 
            
            onClick={handleToggleMenu}
          >
            {iconComponents[CONFIG.icon]}
          </div>
        )}
        <span >
          {CONFIG.title}
        </span>
      </div>

      <div className={`drawer ${isMenuVisible ? "open" : ""} ${CONFIG.type}`}>
      <div className="menu-header">
        {iconComponents[CONFIG.icon] && (
          <div 
            
            onClick={handleToggleMenu}
          >
            {iconComponents[CONFIG.icon]}
          </div>
        )}
        <span >
          {CONFIG.title}
        </span>
      </div>
        {isMenuVisible && (
          <div className="menu-options">
            {enabledRecords.map((record, index) => (
              <MenuOption
                key={index}
                title={record.title}
                icon={iconComponents[record.icon]}
                onMouseEnter={() => {
                  const hoverAction =
                    record.action &&
                    record.action.find((a) => a.type === "hover");
                  if (hoverAction) {
                    handleAction(hoverAction, record.title);
                  }
                }}
                onClick={() => {
                  const clickAction =
                    record.action &&
                    record.action.find((a) => a.type === "click");
                  if (clickAction) {
                    handleAction(clickAction, record.title);
                  }
                }}
                isDisabled={record.visibility === "disable"}
                isSeparator={record.record_type.trim() === "separator"}
                isHeader={record.header}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ToggleMenu;
