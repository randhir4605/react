function ListItem(props){
    return <li>{props.element.item}</li>
}
function ListComponent(){
    const arr=[
        {id:1,item:'Apple'},
        {id:2,item:'Ball'},
        {id:3,item:'Cat'}
    ];
    return (
        <>
            <div>
                <ul>
                    {arr.map((i) => <ListItem element={i}/>)}
                </ul>
            </div>
        </>
    );
}

export default ListComponent;

// for(let i of arr){
//     <li>arr[i]</li>            
// }