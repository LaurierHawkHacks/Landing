import { getButtonStyles } from "./Button.styles";
import type { ButtonStylesProps } from "./Button.styles";
import { logEvent, analytics } from "../../utils/Analytics";

/*
 *
 * @description Button props
 * @props {string} analyticsEvent (optional)
 * 
 */
type ButtonProps = ButtonStylesProps & React.ButtonHTMLAttributes<HTMLButtonElement> & {
    analyticsEvent?: string;
};

/*
 *
 * @description Button component
 * @props {string} analyticsEvent (optional)
 * 
 */
const Button: React.FC<ButtonProps> = ({
    children,
    intent,
    className,
    analyticsEvent,
    ...props
}) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (analyticsEvent) {
            console.log(analyticsEvent);
            logEvent(analytics, analyticsEvent);
        }

        if (props.onClick) {
            props.onClick(e);
        }  
    };

    return (
        <button
            className={getButtonStyles({ intent, className })}
            {...props}
            onClick={handleClick}
        >
            {children}
        </button>
    );
};

export { Button };