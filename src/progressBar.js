const ProgressBar = ({percentage}) => {
    console.log('percentage', percentage)
    let res = percentage+'%'
    
    return (
        <div className="progressContainer">
            <div className="innerDiv" style={{ width: res }}>{res}</div>
        </div >
    )
}

export default ProgressBar