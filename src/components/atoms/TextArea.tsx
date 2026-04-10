interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export default function TextArea({ label, id, ...props }: TextAreaProps) {
  const textareaId = id || label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div>
      <label
        htmlFor={textareaId}
        className="font-label text-xs uppercase text-zinc-500 mb-2 block"
      >
        {label}
      </label>
      <textarea
        id={textareaId}
        className="w-full bg-surface-container-lowest border-none rounded-lg focus:ring-1 focus:ring-primary text-white p-4"
        {...props}
      />
    </div>
  );
}
