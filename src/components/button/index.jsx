import React from 'react';

export const Button = ({ label, onClick }) => {
  return (
    <button className="botao" onClick={onClick} type="button">
      {label}
    </button>
  );
};

export default Button;
