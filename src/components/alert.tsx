import React, { useState } from "react"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"


interface AlertProps {
    children: React.ReactNode,
    text: string
}

const Alert = (props: AlertProps) => {
    // const [inputValue, setInputValue] = useState('')
    const showSwal = () => {
        withReactContent(Swal).fire({
            title: <i>
                {props.text}
            </i>,
            // inputValue,
            // preConfirm: () => {
            //     setInputValue(Swal.getInput()?.value || '')
            // },
        })
    }

    return (
        <button
            id="alert-button"
            onClick={showSwal}>
            {props.children}
        </button>
    )
}

export default Alert