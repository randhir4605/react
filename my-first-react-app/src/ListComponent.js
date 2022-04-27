function ListItem(props){
    return <li>{props.value}</li>
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
                    {arr.map((i) => <ListItem key={i.id} value={i.item}/>)}
                </ul>
            </div>
        </>
    );
}

export default ListComponent;

// for(let i of arr){
//     <li>arr[i]</li>            
// }