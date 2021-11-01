import React from 'react'

const CloseMobMenuIcon = ({className, close}) => {
  return (
    <svg
    onClick={()=>{close()}}
    className={className} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M12.8772 5.85239C11.3232 4.28232 8.8035 4.28232 7.24942 5.85239L6.15053 6.96259C4.59645 8.53267 4.59644 11.0783 6.15052 12.6483L13.2739 19.845L5.84372 27.3517C4.28964 28.9218 4.28964 31.4673 5.84372 33.0374L6.94262 34.1476C8.4967 35.7177 11.0164 35.7177 12.5704 34.1476L20.0006 26.641L27.4296 34.1464C28.9837 35.7164 31.5033 35.7164 33.0574 34.1464L34.1563 33.0362C35.7104 31.4661 35.7104 28.9205 34.1563 27.3504L26.7274 19.845L33.8495 12.6496C35.4036 11.0795 35.4036 8.53392 33.8495 6.96385L32.7506 5.85364C31.1965 4.28357 28.6769 4.28357 27.1228 5.85364L20.0006 13.0491L12.8772 5.85239Z" fill="url(#paint0_linear)"/>
    <defs>
    <linearGradient id="paint0_linear" x1="32.4146" y1="-3.43851" x2="-4.23908" y2="0.634806" gradientUnits="userSpaceOnUse">
    <stop stopColor="#4EEFD1"/>
    <stop offset="1" stopColor="#00C9FF"/>
    </linearGradient>
    </defs>
  </svg>
  );
};

export default CloseMobMenuIcon;
