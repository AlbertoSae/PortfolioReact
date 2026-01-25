import React from 'react';
import './Modal.css';

const Modal = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  footer, 
  variant = "standard" 
}) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={`modal-overlay ${variant}`} onClick={handleOverlayClick}>
      <div className={`modal-content ${variant}`} onClick={(e) => e.stopPropagation()}>
        {title ? (
          <div className="modal-header">
            <div className="modal-decoration">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <h2 className="modal-title">{title}</h2>
            <button className="modal-close-x" onClick={onClose} aria-label="Close">&times;</button>
          </div>
        ) : (
          <button className="modal-close-minimal" onClick={onClose} aria-label="Close">&times;</button>
        )}
        
        <div className="modal-body">
          {children}
        </div>

        {footer && (
          <div className="modal-footer">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
