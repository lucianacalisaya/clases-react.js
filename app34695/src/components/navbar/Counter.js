const Counter = () => {
    let add = 0
    const increment = () => {
        count++
    }
    return (
        <div>
            <h1>{count}</h1>
            <button>Decrementar</button>
            <button onClick={increment}>Incrementar</button>
        </div>
    )
}

export default Counter