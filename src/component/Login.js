import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { islogin } from "../store/actions"
export default function Login(props) {
  const dispatch = useDispatch()
  return (
    <>
      <button onClick={() => dispatch(islogin())}>Login</button>
    </>
  )
}
