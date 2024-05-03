import React from 'react'

const Button = (props) => {
  let [button, setButton] = React.useState(props.desc)  
  function changeText() {
    setButton(button = 'Text Load!')
  }
  return (
    <button onClick={changeText} className="bg-blue-400 p-5 w-1/3 text-white font-semibold hover:bg-blue-700 transition mr-3">{button}<span className="pl-2"><i className="fa-solid fa-arrow-down"></i></span></button>
  )
}

export default Button