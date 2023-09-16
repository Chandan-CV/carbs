import * as React from "react"
import Svg, { Path } from "react-native-svg"

function LeaderboardIcon(props) {
    return (
        <Svg
          width={31}
          height={34}
          viewBox="0 0 31 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <Path
            d="M11.847 4.139v28.249h7.062V4.138c0-1.726-.706-3.138-2.825-3.138h-1.412c-2.119 0-2.825 1.412-2.825 3.139zM1.253 13.555v18.833h6.278V13.555c0-1.726-.628-3.139-2.511-3.139H3.764c-1.883 0-2.51 1.413-2.51 3.139zM23.225 21.402v10.986h6.277V21.402c0-1.726-.628-3.139-2.51-3.139h-1.256c-1.884 0-2.511 1.413-2.511 3.139z"
            stroke="#1E1E1E"
            strokeWidth={1.46}
          />
        </Svg>
      )
}

export default LeaderboardIcon
