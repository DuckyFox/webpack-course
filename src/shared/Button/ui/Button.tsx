import React from 'react';

type Variant = 'primary' | 'secondary';

type ButtonProps = {
    variant: Variant;
    label: string;
}

const Button = (props: ButtonProps) => {
    const { variant, label } = props;
    const style = {
        primary: { backgroung: 'blue'},
        secondary: { background: 'grey'},
    }[variant];
    return (
        <button style={style}>
            {label}
        </button>
    );
};

export default Button;
2