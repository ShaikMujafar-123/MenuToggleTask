import React from 'react';
import './ToggleMenu.css';

function MenuOption({ title, icon, onMouseEnter, onClick, isDisabled, isSeparator, isHeader }) {
  console.log("object",isHeader)
  
  if (isSeparator) {
    return <div className="menu-separator"></div>;
  }

  const optionStyle = isDisabled
  ? { opacity: 0.5, color: '#999', pointerEvents: 'none' }
  : {};

  

  const handleMouseEnter = () => {
    if (!isDisabled && onMouseEnter) {
      onMouseEnter();
    }
  };

  const handleClick = () => {
    if (!isDisabled && onClick) {
      onClick();
    }
  };

  return (
    <div
      className={`menu-option ${isDisabled ? 'disabled' : ''}`}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      style={optionStyle}
    >
      
      {icon && <span className="menu-icon">{icon}</span>}
      {title}
      {isHeader ? isHeader : ""}
    </div>
    
  );
}

export default MenuOption;
