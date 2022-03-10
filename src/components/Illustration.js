import React from "react";
import illustration_1 from "../assets/illustration_1.svg";
import illustration_2 from "../assets/illustration_2.svg";
import illustration_3 from "../assets/illustration_3.svg";
import illustration_4 from "../assets/illustration_4.svg";

const Illustration = ({ src_name: srcName, top, bottom, width }) => {
    return (
        <div
            className="d-flex flex-column align-items-center bg-img-container"
            style={{
                width: "100%",
                maxHeight: "max-content",
                position: "absolute",
                top: top,
                bottom: bottom,
            }}
        >
            <img
                src={
                    srcName === "illustration_1"
                        ? illustration_1
                        : srcName === "illustration_2"
                            ? illustration_2
                            : srcName === "illustration_3"
                                ? illustration_3
                                : srcName === "illustration_4"
                                    ? illustration_4
                                    : console.log(srcName)
                }
                style={{
                    width: width === undefined ? "max-content" : width,
                    maxWidth: "100%",
                    height: "max-content",
                }}
                alt=""
            />
        </div>
    );
};

export default Illustration;
