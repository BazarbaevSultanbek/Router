

function Protected({ status, setStatus }) {

    return (
        <div>
            <p>{status === true ? 'Protected' : 'You must logged in to view the page at protected'}</p>
            <button onClick={() => setStatus(true)} style={{ display: status === true ? 'none' : 'block' }}>Log in</button>
        </div>
    )
}

export default Protected