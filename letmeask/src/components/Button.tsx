//propriedades
type ButtonProps = {
    text?: string
}

// passa como argumneto a tipagem
export function Button(props: ButtonProps) {
    return (
        <button>{props.text || 'Default'}</button>
    )
}

