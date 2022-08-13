/* eslint-disable arrow-body-style */
import React, { useEffect, useState } from "react";

// hooks
import useMousePosition from "../../hooks/useMousePosition";

// stylesheet
import styles from "./svg.module.css";

const BgComponent: React.FC = () => {
  const { x, y } = useMousePosition();
  const [coordinates, setCoordinates] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    if (typeof x === "number" && typeof y === "number") {
      setCoordinates({ x: x / 50, y: y / 50 });
    }
  }, [x, y]);

  return (
    <div className={styles.svg}>
      <svg
        id="background"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="1382"
        height="760"
        viewBox="0 0 1382 760"
        style={{
          transform: `skew(${coordinates.x}deg, ${coordinates.y}deg)`,
          WebkitTransform: `skew(${coordinates.x}deg, ${coordinates.y}deg)`,
        }}
      >
        <defs>
          <filter
            id="box_2"
            x="1083"
            y="291"
            width="164"
            height="161"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="3" />
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feFlood floodOpacity="0.161" />
            <feComposite operator="in" in2="blur" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter
            id="box_4"
            x="1218"
            y="377"
            width="164"
            height="161"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="3" />
            <feGaussianBlur stdDeviation="3" result="blur-2" />
            <feFlood floodOpacity="0.161" />
            <feComposite operator="in" in2="blur-2" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter
            id="box_w"
            x="68"
            y="387"
            width="164"
            height="161"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="3" />
            <feGaussianBlur stdDeviation="3" result="blur-3" />
            <feFlood floodOpacity="0.161" />
            <feComposite operator="in" in2="blur-3" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter
            id="box_y"
            x="68"
            y="198"
            width="119"
            height="114"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="3" />
            <feGaussianBlur stdDeviation="3" result="blur-4" />
            <feFlood floodOpacity="0.161" />
            <feComposite operator="in" in2="blur-4" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter
            id="box_x"
            x="248"
            y="154"
            width="164"
            height="155"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="3" />
            <feGaussianBlur stdDeviation="3" result="blur-5" />
            <feFlood floodOpacity="0.161" />
            <feComposite operator="in" in2="blur-5" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter
            id="single_box"
            x="976"
            y="601"
            width="120"
            height="113"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="3" />
            <feGaussianBlur stdDeviation="3" result="blur-6" />
            <feFlood floodOpacity="0.161" />
            <feComposite operator="in" in2="blur-6" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter
            id="box_3"
            x="1138"
            y="180"
            width="164"
            height="161"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="3" />
            <feGaussianBlur stdDeviation="3" result="blur-7" />
            <feFlood floodOpacity="0.161" />
            <feComposite operator="in" in2="blur-7" />
            <feComposite in="SourceGraphic" />
          </filter>
        </defs>
        <rect id="box_1" width="1373" height="760" fill="#fff" />
        <g
          style={{ position: "relative" }}
          transform="matrix(1, 0, 0, 1, 0, 0)"
          filter="url(#box_2)"
        >
          <rect
            id="box_2-2"
            data-name="box_2"
            width="146"
            height="143"
            rx="17"
            transform="translate(1092 297)"
            fill="#fff"
          />
        </g>
        <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#box_4)">
          <rect
            id="box_4-2"
            data-name="box_4"
            width="146"
            height="143"
            rx="17"
            transform="translate(1227 383)"
            fill="#fff"
          />
        </g>
        <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#box_w)">
          <rect
            id="box_w-2"
            data-name="box_w"
            width="146"
            height="143"
            rx="17"
            transform="translate(77 393)"
            fill="#fff"
          />
        </g>
        <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#box_y)">
          <rect
            id="box_y-2"
            data-name="box_y"
            width="101"
            height="96"
            rx="17"
            transform="translate(77 204)"
            fill="#fff"
          />
        </g>
        <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#box_x)">
          <rect
            id="box_x-2"
            data-name="box_x"
            width="146"
            height="137"
            rx="17"
            transform="translate(257 160)"
            fill="#fff"
          />
        </g>
        <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#single_box)">
          <rect
            id="single_box-2"
            data-name="single_box"
            width="102"
            height="95"
            rx="17"
            transform="translate(985 607)"
            fill="#fff"
          />
        </g>
        <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#box_3)">
          <rect
            id="box_3-2"
            data-name="box_3"
            width="146"
            height="143"
            rx="17"
            transform="translate(1147 186)"
            fill="#fff"
          />
        </g>
        <path
          id="Path_1"
          data-name="Path 1"
          d="M691.429,345.714c20,1.429,419.714-17.629,466.143,18.442S831.786,453.929,877.143,490s576.143,39.871,576.143,39.871"
          transform="translate(-468.429 123.986)"
          fill="none"
          stroke="#707070"
          strokeWidth="1"
          opacity="0.2"
        />
        <g
          id="circle_2"
          transform="translate(223 462)"
          fill="#fff"
          stroke="#d8c7c7"
          strokeWidth="1"
        >
          <circle cx="8.5" cy="8.5" r="8.5" stroke="none" />
          <circle cx="8.5" cy="8.5" r="8" fill="none" />
        </g>
        <g
          id="circle_1"
          transform="translate(968 646)"
          fill="#fff"
          stroke="#d8c7c7"
          strokeWidth="1"
        >
          <circle cx="8.5" cy="8.5" r="8.5" stroke="none" />
          <circle cx="8.5" cy="8.5" r="8" fill="none" />
        </g>
      </svg>
    </div>
  );
};

export default BgComponent;
