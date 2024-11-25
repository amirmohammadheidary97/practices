import * as React from "react"
import AppErrorBoundary from './AppErrorBoundary'
import Repos from './Repos'

export default function App() {
  return (
    <AppErrorBoundary>
      <React.Suspense fallback={<p>...</p>}>
        <div id="app">
          <Repos />
        </div>
      </React.Suspense>
    </AppErrorBoundary>
  )
}
