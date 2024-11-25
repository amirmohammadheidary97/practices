import * as React from "react"

const toneMap = {
  0: '👋',
  1: '👋🏻',
  2: '👋🏼',
  3: '👋🏽',
  4: '👋🏾',
  5: '👋🏿',
}

function Wave ({ onClick, options }) {
  console.count("Rendering Wave")
  return (
    <button 
      onClick={onClick}
      className={options.animate ? "wave" : null} role="img" 
      aria-label="hand waving"
    >
      {toneMap[options.tone || 0]}
    </button>
  )
}

export default React.memo(Wave)