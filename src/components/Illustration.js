import React from "react";
import { Illustration1, Illustration2, Illustration3, Illustration4 } from "../assets";

const Illustration = ({ src_name, position="absolute", top=undefined, bottom=undefined, width="max-content", height="max-content", maxWidth="100%", id=undefined }) => {
    return (
        <div
            className="d-flex flex-column align-items-center bg-img-container"
            id={id}
            style={{
                width: "100%",
                maxHeight: "max-content",
                position: position,
                top: top,
                bottom: bottom,
            }}
        >
            <img
                src={
                    src_name === "illustration_1"
                        ? Illustration1
                        : src_name === "illustration_2"
                            ? Illustration2
                            : src_name === "illustration_3"
                                ? Illustration3
                                : src_name === "illustration_4" ? Illustration4 : null
                }
                style={{
                    width: width,
                    maxWidth: maxWidth,
                    height: height,
                }}
                alt=""
            />
        </div>
    );
};

export default Illustration;