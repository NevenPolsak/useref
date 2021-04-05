import React,{useEffect,useRef} from 'react'

const UseRef = () => {
    const refContainer = useRef(null);
    const handleSubmit = (e) =>{
        e.preventDeafult();
    }
    useEffect(()=>{
        refContainer.current.focus();
    })
    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <input type="text" ref={refContainer}/>
                    <button type='submit'>submit</button>
                </div>
            </form>
        </div>
    )
}

export default UseRef
