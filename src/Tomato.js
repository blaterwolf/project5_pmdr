import React from "react";

function Tomato() {
  return (
    <>
      <svg
        className="Icon"
        style={{ height: "150px", width: "150px" }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <defs>
          <filter id="shadow-2" height="300%" width="300%" x="-100%" y="-100%">
            <feFlood
              floodColor="rgba(255, 255, 255, 1)"
              result="flood"
            ></feFlood>
            <feComposite
              in="flood"
              in2="SourceGraphic"
              operator="atop"
              result="composite"
            ></feComposite>
            0<feOffset result="offset" dx="5" dy="5"></feOffset>
            <feComposite
              in="SourceGraphic"
              in2="offset"
              operator="over"
            ></feComposite>
          </filter>
          <filter id="shadow-3" height="300%" width="300%" x="-100%" y="-100%">
            <feFlood
              floodColor="rgba(255, 255, 255, 1)"
              result="flood"
            ></feFlood>
            <feComposite
              in="flood"
              in2="SourceGraphic"
              operator="atop"
              result="composite"
            ></feComposite>
            0<feOffset result="offset" dx="5" dy="5"></feOffset>
            <feComposite
              in="SourceGraphic"
              in2="offset"
              operator="over"
            ></feComposite>
          </filter>
          <filter id="shadow-4" height="300%" width="300%" x="-100%" y="-100%">
            <feFlood
              floodColor="rgba(255, 255, 255, 1)"
              result="flood"
            ></feFlood>
            <feComposite
              in="flood"
              in2="SourceGraphic"
              operator="atop"
              result="composite"
            ></feComposite>
            0<feOffset result="offset" dx="5" dy="5"></feOffset>
            <feComposite
              in="SourceGraphic"
              in2="offset"
              operator="over"
            ></feComposite>
          </filter>
          <filter id="shadow-5" height="300%" width="300%" x="-100%" y="-100%">
            <feFlood
              floodColor="rgba(255, 255, 255, 1)"
              result="flood"
            ></feFlood>
            <feComposite
              in="flood"
              in2="SourceGraphic"
              operator="atop"
              result="composite"
            ></feComposite>
            0<feOffset result="offset" dx="10" dy="10"></feOffset>
            <feComposite
              in="SourceGraphic"
              in2="offset"
              operator="over"
            ></feComposite>
          </filter>
        </defs>
        <path d="M0 0h512v512H0z" fill="#f44242" fillOpacity="0"></path>
        <g
          className=""
          style={{ touchAction: "none" }}
          transform="translate(0,0)"
        >
          <g>
            <path
              d="M269 24.54C265.9 24.65 263.3 24.54 261.4 24.75C258.6 25 256.7 25.2 254.2 26.98L253.2 96.3C256.2 97.48 259.6 98.6 262.9 98.81C267 99.11 269.7 98.6 272.1 96.4Z"
              className="selected"
              fill="#77b255"
              fillOpacity="1"
              filter="url(#shadow-2)"
            ></path>
            <path
              d="M165.6 62.44C165.7 68.39 165.9 73.45 167.1 76.58C169.4 81.8 174.1 86.46 193.1 90.5L215.6 95.28L196.1 107.1C179.6 117.2 160.9 126.5 144.6 133.6C150.8 134.3 156.9 135 162.8 135C180.6 134.9 197.4 131.1 218.1 116.9L234 106L234.4 81.65C208.9 76.03 187.9 69.97 165.6 62.44Z"
              className=""
              fill="#77b255"
              fillOpacity="1"
              filter="url(#shadow-3)"
            ></path>
            <path
              d="M346.8 68.93C327.3 75.62 312.4 79.9 290.4 83.09L291.3 101.9L289.6 104.4C282.8 114.4 271.2 117.7 261.7 117.1C252.2 116.5 244.1 113.2 238.3 109.5L235.1 107.4L232.9 125.4C231 142.5 230.8 153.7 227.7 167.8C242.3 157.4 252.1 148.9 264.2 130.5L271.4 119.8L279.5 129.8C290.4 142.8 308.3 152.7 328 158.8C322.3 152.3 317.1 144.3 316 133.8L314.6 119.7L328.5 124.3C349.1 130.9 355.4 130.4 362.4 128C365.3 127.1 369.1 125.4 373 123.5L292.3 95.89L319.6 87.74C333.8 83.5 340.5 78.64 344.2 73.8C345.2 72.3 346.1 70.66 346.8 68.93Z"
              className=""
              fill="#77b255"
              fillOpacity="1"
              filter="url(#shadow-4)"
            ></path>
            <path
              d="M405.5 132L403.7 132.4C386.3 136.6 379.4 141.9 368.7 145.5C361.3 147.8 353.1 148.3 342 146.4C342.4 147 343 147.6 343.5 148.2C348.5 153.7 355.7 159.8 362.3 168.4L375.5 185.6L353.6 183C324.5 179.5 294.2 169.1 273.3 150.1C257 171.5 241.8 180.5 216.1 198.7L190.3 217.1L201.6 188C210 166.9 210.9 156.7 212.3 141.7C195 150.1 178.6 153.2 162.8 153.3C144.1 153.3 126.3 149.6 107.6 146.9C107.2 146.9 106.8 147 106.4 147.1C46.56 193.3 37.46 262.6 37.53 297.4C37.7 391.6 64.26 484.1 260 487.4C408.9 490 475.4 388 474.5 293.2C473.7 232.6 462.2 168.8 405.5 132Z"
              className=""
              fill="#f44242"
              fillOpacity="1"
              filter="url(#shadow-5)"
            ></path>
            <path
              d="M147.1 166.3C160.3 166.1 173.5 170.7 175.4 178.7C83.32 220.6 83.81 276.5 70.19 335.5C59.09 278.7 62.88 213 125.4 171.9C131 168.1 139.2 166.4 147.1 166.3Z"
              className=""
              fill="#ffffff"
              fillOpacity="1"
            ></path>
          </g>
        </g>
      </svg>
    </>
  );
}

export default Tomato;
