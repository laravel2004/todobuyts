import { ReactNode } from "react";

interface Props  {
    children : ReactNode,
    onClick : () => void,
    className? : string
}

const Button = ({children, onClick, className}:Props) => {
    return (
        <button
            onClick={onClick}
            className = {`${className} bg-primary px-5 text-slate-50 rounded-xl p-3 hover:shadow-md`}
        >
            {children}
        </button>
    )
}

export default Button;