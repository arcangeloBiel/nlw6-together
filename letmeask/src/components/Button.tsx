import {ButtonHTMLAttributes} from 'react';
import '../styles/button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

// passa como argumneto a tipagem
export function Button(props: ButtonProps) {
    return (
        <button className="button" {...props} />
    )
}

