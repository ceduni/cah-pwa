function TextField({text, handleTextChange, handleClear}) {
    return (
        <>
            <textarea className='textarea' value={text} onChange={handleTextChange} />
            <button className='button' onClick={handleClear}>Reset</button>
        </>
    )
}

export default TextField;