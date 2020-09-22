import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { increment, decrement } from "../store/actions"
const CounterPage = () => {
  const dispatch = useDispatch()
  return (
    <>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </>
  )
}

export default CounterPage
