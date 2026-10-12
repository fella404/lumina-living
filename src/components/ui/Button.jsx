import { Link } from "react-router";
import { cn } from "../../lib/utils";

const variantClasses = {
  primary: "bg-primary text-primary-foreground hover:opacity-90",
  secondary: "bg-secondary text-secondary-foreground shadow-card hover:opacity-90",
  outline:
    "border border-border bg-transparent text-foreground hover:border-primary/40",
};

const sizeClasses = {
  sm: "px-4 py-2 text-xs",
  md: "px-5 py-3 text-sm",
  lg: "px-6 py-3 text-sm",
  icon: "p-4 text-sm",
};

const Button = ({
  variant = "primary",
  size = "md",
  to,
  href,
  className = "",
  children,
  onClick,
  type,
  ...rest
}) => {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all disabled:pointer-events-none disabled:opacity-50",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (href) {
    const anchorProps = rest;
    return (
      <a href={href} className={classes} onClick={onClick} {...anchorProps}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;
