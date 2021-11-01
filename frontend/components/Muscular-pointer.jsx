import React from "react";
import style from "../styles/modules/muscular-pointer.module.scss";

const MuscularPointer = ({pointNumber, name, number, className, classNameWrap, index, userChose}) => {
  return (
    <div className={`${style.wrap} ${classNameWrap}`}>
      <div className={style.points}>
        {pointNumber.map(({ point }) => {
          return (
            <div
              onClick={() => {userChose(index, point);
              }}
              key={point}
              className={`${style.point_number}
              ${number === point ? style.point_active : ""}
              `}
            >
              {point}
            </div>
          );
        })}
      </div>
      <span className={className}>{name}</span>
    </div>
  );
};

export default MuscularPointer;

// `${style["point_name" + index]}`
