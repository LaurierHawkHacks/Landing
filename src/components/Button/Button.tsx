import { getButtonStyles } from "@components";

import type { ButtonStylesProps } from "@components";

type ButtonProps = ButtonStylesProps &
    React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({
    children,
    intent,
    className,
    ...props
}) => {
    return (
        <button className={getButtonStyles({ intent, className })} {...props}>
            {children}
        </button>
    );
};
