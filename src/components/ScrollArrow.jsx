import React from "react";
import scrollEvent from "../utils/functions/scrollEvent";

const ScrollArrow = () => {
  return (
    <div className="scroll-arrow" onClick={() => scrollEvent(2)}>
      <div className="arrow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={100}
          height={100}
          transform={"rotate(90 0 0)"}
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M11.05 12L7.175 6.575q-.35-.5-.087-1.037T7.975 5q.25 0 .475.113t.35.312L13.5 12l-4.7 6.575q-.125.2-.35.313T7.975 19q-.6 0-.875-.537t.075-1.038zM17 12l-3.875-5.425q-.35-.5-.088-1.037T13.926 5q.25 0 .475.113t.35.312L19.45 12l-4.7 6.575q-.125.2-.35.313t-.475.112q-.6 0-.875-.537t.075-1.038z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default ScrollArrow;
