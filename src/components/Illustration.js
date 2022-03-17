import React from "react";
import illustration_1 from "../assets/illustration_1.svg";
import illustration_2 from "../assets/illustration_2.svg";
import illustration_3 from "../assets/illustration_3.svg";
import illustration_4 from "../assets/illustration_4.svg";

const Illustration = ({ src_name, position='absolute', top=undefined, bottom=undefined, width='max-content', maxWidth='100%', id=undefined }) => {
  return (
    <div
      className="d-flex flex-column align-items-center bg-img-container"
      id={id}
      style={{
        width: '100%',
        maxHeight: 'max-content',
        position: position,
        top: top,
        bottom: bottom,
      }}
    >
      <img
        src={
          src_name === 'illustration_1'
            ? illustration_1
            : src_name === 'illustration_2'
            ? illustration_2
            : src_name === 'illustration_3'
            ? illustration_3
            : src_name === 'illustration_4'
            ? illustration_4
            : console.log(src_name)
        }
        style={{
          width: width,
          maxWidth: maxWidth,
          height: 'max-content',
        }}
        alt=""
      />
    </div>
  );
};

export default Illustration;
