const array=["North","South","East","West"];
const word="News";

function Comp()
{
    function myfunction(string)
    {
        return string.concat(" ",word);
    }
    let a1=[]
    a1=array.map(myfunction)
    let array1 = () =>{console.log(a1)}
    let array2 = () =>{console.log(array.join())}
    return (<div>
    <button onClick={array1}>Array</button>
    <br></br>
    <button onClick={array2}>Refresh Array</button>
    </div>);
}

ReactDOM.render(<Comp/>,document.getElementById("mydiv"));