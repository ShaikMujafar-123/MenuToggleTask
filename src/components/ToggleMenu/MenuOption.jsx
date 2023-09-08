import React from 'react';
import './ToggleMenu.css';

function MenuOption({ title, icon, onMouseEnter, onClick, isDisabled, isSeparator }) {
  if (isSeparator) {
  
    return <div className="menu-separator">___________________________</div>;
  }

  const optionStyle = isDisabled ? { color: 'red' } : {}; 

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
    </div>
  );
}

export default MenuOption;
