import { getButtonStyles } from "./Button.styles";
import type { ButtonStylesProps } from "./Button.styles";
import { logEvent, analytics } from "../../utils/Analytics";

type ButtonProps = ButtonStylesProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    analyticsEvent?: string;
  };

export const Button: React.FC<ButtonProps> = ({
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
