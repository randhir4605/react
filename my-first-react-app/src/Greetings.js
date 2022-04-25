function Greeting(props){
    return (
      <div className="App">
        <h2>Hello {props.toWhom} ! {props.secondParam}</h2>
      </div>
    )
  }

  export default Greeting;