import { useRef } from "react";
import { Upload, X } from "lucide-react";

const CommonImageUpload = ({
    label,
    images = [],
    onImagesChange,
    accept = "image/*",
    multiple = true,
    placeholder = "Upload image",
}) => {
    const fileInputRef = useRef(null);

    const handleImageUpload = (e) => {
        const files = e.target.files;
        if (files?.length) {
            const newImages = Array.from(files).map((file) => ({
                file,
                url: URL.createObjectURL(file),
            }));
            if (multiple) {
                onImagesChange?.([...images, ...newImages]);
            } else {
                onImagesChange?.(newImages.slice(0, 1));
            }
        }
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    const removeImage = (index) => {
        const img = images[index];
        if (img?.url) URL.revokeObjectURL(img.url);
        onImagesChange?.(images.filter((_, i) => i !== index));
    };

    return (
        <div className="space-y-1.5">
            {label && (
                <label className="text-xs font-semibold text-dark-gray">{label}</label>
            )}

            {/* Preview thumbnails row */}
            {images.length > 0 && (
                <div className="flex flex-wrap items-center gap-2">
                    {images.map((img, idx) => (
                        <div key={idx} className="relative inline-block">
                            <img
                                src={img.url}
                                alt={`Upload ${idx + 1}`}
                                className="w-12 h-12 object-cover rounded border border-border"
                            />
                            <button
                                type="button"
                                onClick={() => removeImage(idx)}
                                className="absolute -top-1.5 -right-1.5 bg-primary text-white rounded-full p-0.5 cursor-pointer hover:bg-primary/80 transition-colors"
                            >
                                <X className="w-3 h-3" />
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {/* Upload area */}
            <div
                onClick={() => fileInputRef.current?.click()}
                className="flex flex-col items-center justify-center gap-2 py-6 rounded-md border border-dashed border-border bg-input-bg cursor-pointer hover:border-primary/40 transition-colors"
            >
                <Upload className="w-5 h-5 text-dark-gray" />
                <span className="text-sm text-dark-gray font-sans">{placeholder}</span>
            </div>
            <input
                ref={fileInputRef}
                type="file"
                accept={accept}
                multiple={multiple}
                className="hidden"
                onChange={handleImageUpload}
            />
        </div>
    );
};

export default CommonImageUpload;
