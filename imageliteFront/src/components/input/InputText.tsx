import React from "react";

interface InputTextProps {
    style?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string;
}

export const InputText: React.FC<InputTextProps> = ({
    style, ...outrasProps //onChange, placeholder
} : InputTextProps) => {
    return(
        <input type='text'
                {...outrasProps} //{...} - spred operator
                //onChange={onChange}
                //placeholder={placeholder}
                className={`${style} border px-5 py-2 rounded-lg text-gray-900`}/>
        
    )
}