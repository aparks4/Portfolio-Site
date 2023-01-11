function Test(props) {
    const divStyle = {
        backgroundImage: `url(${props.background})`
    }
    return (
        <div  style={divStyle} id="test">

        </div>
    )
}

export default Test;