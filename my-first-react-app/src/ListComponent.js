function ListComponent(){
    const arr=['Apple','Ball','Cat'];
    return (
        <>
            <div>
                <ul>
                    {arr.map((item) => <li>{item}</li>)}
                </ul>
            </div>
        </>
    );
}

export default ListComponent;

// for(let i of arr){
//     <li>arr[i]</li>            
// }