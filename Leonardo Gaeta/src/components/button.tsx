type props = {
    counter:        any,
    setCounter:     any,
    increment:      number,
    text:           string,
}

export const Button = (Props: props) => {
    return (
        <button onClick={
                            () => {
                                Props.setCounter(Props.counter+Props.increment)
                            }
                        } >
            {Props.text}
        </button>
    )
}