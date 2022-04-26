function EventTest(){
    const myalert = (message) =>{
        alert(message);
    }

    return (
        <button onClick={() => { myalert("You have clicked me!")}}>Click here !</button> 
    );
}

export default EventTest;