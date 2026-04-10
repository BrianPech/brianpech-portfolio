type ButtonVariant = "primary" | "ghost" | "submit";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary:
    "px-10 py-5 rounded-full bg-gradient-to-r from-primary to-primary-container text-on-primary font-headline font-bold text-lg transition-transform active:scale-95 shadow-xl shadow-primary/20",
  ghost:
    "px-10 py-5 rounded-full bg-surface-container-high/40 backdrop-blur-xl text-white font-headline font-bold text-lg border border-outline-variant/15 hover:bg-surface-container-high transition-all active:scale-95",
  submit:
    "w-full py-5 rounded-full bg-primary text-on-primary font-headline font-bold text-lg hover:brightness-110 transition-all",
};

export default function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button className={`${VARIANT_STYLES[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
