import React, { useRef, useState } from "react";

function InputSample() {
    const [inputs, SetInputs] = useState({
        name: '',
        nickname: ''
    })
    const nameInput = useRef()
    const {name, nickname} = inputs

    const onChange = (e) => {
        console.log(e.target)
        const {value, name} = e.target
        SetInputs({
            ...inputs,
            [name] : value
        })
    }
    const onReset = () => {
        SetInputs({
            name: '',
            nickname: ''
        })
        nameInput.current.focus()
    }

    return (
        <div>
            <input 
            name="name" 
            onChange={onChange} 
            placeholder="이름" 
            value={name}
            ref={nameInput}
            />

            <input 
            name="nickname" 
            onChange={onChange} 
            placeholder="닉네임" 
            value={nickname}
            />

            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 : {}</b>
                {name} ({nickname})
            </div>
        </div>
    )
}

export default InputSample