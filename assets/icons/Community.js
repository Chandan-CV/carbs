import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Community(props) {
    return (
        <Svg
          width={30}
          height={31}
          viewBox="0 0 30 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <Path
            d="M23.64 8.302a.856.856 0 00-.27 0 3.642 3.642 0 01-3.51-3.65A3.642 3.642 0 0123.513 1a3.65 3.65 0 013.65 3.651 3.664 3.664 0 01-3.523 3.651zM22.181 18.605c1.94.325 4.076-.015 5.576-1.02 1.995-1.33 1.995-3.509 0-4.84-1.514-1.004-3.68-1.343-5.618-1.004M6.615 8.302a.857.857 0 01.268 0 3.642 3.642 0 003.51-3.65A3.642 3.642 0 006.742 1 3.65 3.65 0 003.09 4.651a3.664 3.664 0 003.524 3.651zM8.072 18.605c-1.939.325-4.076-.015-5.576-1.02-1.995-1.33-1.995-3.509 0-4.84 1.515-1.004 3.68-1.343 5.619-1.004M15.148 18.874a.854.854 0 00-.269 0 3.642 3.642 0 01-3.51-3.652 3.642 3.642 0 013.652-3.65 3.651 3.651 0 013.651 3.65c-.014 1.982-1.57 3.595-3.524 3.652zM11.03 23.331c-1.996 1.33-1.996 3.51 0 4.84 2.264 1.514 5.972 1.514 8.236 0 1.996-1.33 1.996-3.51 0-4.84-2.25-1.5-5.972-1.5-8.236 0z"
            stroke="#1E1E1E"
            strokeWidth={1.46}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      )
}

export default Community