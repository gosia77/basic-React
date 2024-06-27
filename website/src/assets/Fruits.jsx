

function Fruits(){

    const food1 = "Orange";
    const food2 = "kiwi";
    const food3 = "dragon fruit"



    return(
       <ul>
        <li>Apple</li>
        <li>{food1}</li>
        <li>{food2}</li>
        <li>{food3.toUpperCase()}</li>
        <li>strawberry</li>
       </ul> 
    );
}

export default Fruits