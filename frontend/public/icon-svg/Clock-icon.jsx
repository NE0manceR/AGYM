import React from 'react';

const ClockIcon = ({className}) => {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M10 0C15.5357 0 20 4.46429 20 10C20 15.5357 15.5357 20 10 20C4.46429 20 0 15.5357 0 10C0 4.46429 4.46429 0 10 0ZM9.22619 3.39286C9.22619 2.97619 9.58333 2.61905 10 2.61905C10.4167 2.61905 10.7738 2.97619 10.7738 3.39286V9.70238L13.0357 11.9643C13.3333 12.2619 13.3333 12.7381 13.0357 13.0357C12.7381 13.3333 12.2619 13.3333 11.9643 13.0357L9.46429 10.5357C9.34524 10.4167 9.22619 10.1786 9.22619 10V3.39286Z" fill="white"/>
    </svg>
  );
};

export default ClockIcon;
