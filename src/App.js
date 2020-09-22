import React from "react"
import "./App.css"
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "./store/actions"
import CounterPage from "./component/counterPage"
import Login from "./component/Login"

function App() {
  const counter = useSelector(state => state.counterReducer)
  const isLogged = useSelector(state => state.loggedReducer)
  return (
    <div className="App">
      <header className="App-header">
        <div>
          Hello React Redux----<small>SK</small>
          <div>Counter {counter}</div>
          <CounterPage></CounterPage>
          {isLogged ? (
            <div>Logged in</div>
          ) : (
            <div>
              Please login <Login />
            </div>
          )}
        </div>
      </header>
    </div>
  )
}

export default App
