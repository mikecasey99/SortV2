export default function HeaderComp(props){
    return (
        <div className="header-comp">
            <div className="header-buttons">
                <h1>Sorting Visualizer</h1>
                <button onClick={props.newArray}>Generate New Array</button>
                <button onClick={props.bubbleSort}>Bubble Sort</button>
            </div>
        </div>
    )
}