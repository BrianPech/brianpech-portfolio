interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function InputField({ label, id, ...props }: InputFieldProps) {
  const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div>
      <label
        htmlFor={inputId}
        className="font-label text-xs uppercase text-zinc-500 mb-2 block"
      >
        {label}
      </label>
      <input
        id={inputId}
        className="w-full bg-surface-container-lowest border-none rounded-lg focus:ring-1 focus:ring-primary text-white p-4"
        {...props}
      />
    </div>
  );
}
