import React from "react";

type PropsType = {
    name: string
    Callback: () => void

}
export const Button = (props: PropsType) => {

    const onClickHandler = () => {
        props.Callback()
    }

    return (
        <button onClick={onClickHandler}>{props.name}</button>

    )
}