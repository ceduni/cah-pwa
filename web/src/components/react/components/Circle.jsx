function Circle({ size, color }) {
    return (
        <div
            style={{
                width: `${size}px`,
                height: `${size}px`,
                borderRadius: '50%',
                backgroundColor: color,
                transition: 'width 0.3s, height 0.3s',
            }}
        ></div>
    )
}


export default Circle;