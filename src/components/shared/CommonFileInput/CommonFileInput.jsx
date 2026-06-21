import { useRef } from "react";
import { Paperclip } from "lucide-react";

const CommonFileInput = ({
  label,
  value,
  onChange,
  placeholder = "Attach receipt or evidence",
  accept = ".pdf,.jpg,.jpeg,.png",
}) => {
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file && onChange) {
      onChange(file);
    }
  };

  return (
    <div className="space-y-1.5 relative">
      {label && (
        <label className="text-xs font-semibold text-dark-gray">{label}</label>
      )}
      <div
        onClick={() => fileInputRef.current?.click()}
        className="flex items-center gap-2 py-3.5 px-4 rounded-md bg-input-bg border-none text-sm text-dark-gray cursor-pointer hover:bg-input-bg/80 transition-colors w-full"
      >
        <Paperclip className="w-4 h-4 text-dark-gray flex-shrink-0" />
        <span className="truncate font-sans text-dark-gray text-xs">
          {value ? value.name : placeholder}
        </span>
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default CommonFileInput;