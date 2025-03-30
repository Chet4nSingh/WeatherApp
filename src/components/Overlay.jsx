import React from 'react'

function Overlay({ classes, children}) {
  return (
    <div className={`bg-sky-950/40 dark:bg-slate-100/10 ${classes}`}>{children}</div>
  )
}

export default Overlay