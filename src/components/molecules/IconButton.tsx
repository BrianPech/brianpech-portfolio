import { Icon } from "@/components/atoms";

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
}

export default function IconButton({
  icon,
  className = "",
  ...props
}: IconButtonProps) {
  return (
    <button
      className={`p-2 text-zinc-400 hover:bg-zinc-800/50 rounded-lg transition-all duration-300 ${className}`}
      {...props}
    >
      <Icon name={icon} />
    </button>
  );
}
