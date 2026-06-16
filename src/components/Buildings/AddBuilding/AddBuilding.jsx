import { useState, useRef } from "react";
import { useForm, FormProvider, Controller } from "react-hook-form";
import {
    PlusCircle,
    Bold,
    Italic,
    Underline as UnderlineIcon,
    Strikethrough,
    AlignLeft,
    AlignCenter,
    AlignRight,
    List,
    ListOrdered,
    Upload,
    X,
    Palette,
    Highlighter as HighlighterIcon,
} from "lucide-react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import UnderlineExt from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Placeholder from "@tiptap/extension-placeholder";
import { TextStyle } from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";
import { Button } from "@/components/ui/button";
import { BuildingsIcon } from "@/components/SvgIcons/BuildingsIcon";
import CommonInput from "@/components/shared/Form/FormInput/CommonInput";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
    DialogClose,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import CommonSelect from "@/components/shared/CommonSelect/CommonSelect";

/* ── Toolbar Button ── */
const ToolbarBtn = ({ onClick, isActive, children, title }) => (
    <button
        type="button"
        onClick={onClick}
        title={title}
        className={cn(
            "p-1.5 rounded hover:bg-slate-200 transition-colors cursor-pointer",
            isActive && "bg-slate-200 text-primary"
        )}
    >
        {children}
    </button>
);

const AddBuilding = () => {
    const [open, setOpen] = useState(false);
    const [uploadedImages, setUploadedImages] = useState([]);
    const [openPicker, setOpenPicker] = useState(null);
    const fileInputRef = useRef(null);

    const methods = useForm({
        defaultValues: {
            buildingName: "",
            address: "",
            city: "",
            state: "",
            country: "",
            googleMapLink: "",
            totalFloors: "",
            parkingDetails: "",
            status: "active",
        },
    });

    const editor = useEditor({
        extensions: [
            StarterKit,
            UnderlineExt,
            TextStyle,
            Color,
            Highlight.configure({ multicolor: true }),
            TextAlign.configure({ types: ["heading", "paragraph"] }),
            Placeholder.configure({ placeholder: "Type  description..." }),
        ],
        content: "",
        editorProps: {
            attributes: {
                class: "min-h-[100px] w-full px-3 py-2 text-sm font-sans focus:outline-none prose prose-sm max-w-none [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_li]:ml-4",
            },
        },
    });

    const onSubmit = (data) => {
        const description = editor?.getHTML() || "";
        console.log("Building data:", { ...data, description, uploadedImages });
        methods.reset();
        editor?.commands.clearContent();
        setUploadedImages([]);
        toast.warning("Feature not implemented yet!")
        // setOpen(false);
    };

    const handleOpenChange = (value) => {
        setOpen(value);
        if (!value) {
            methods.reset();
            editor?.commands.clearContent();
            setUploadedImages([]);
            setOpenPicker(null);
        }
    };

    const handleImageUpload = (e) => {
        const files = e.target.files;
        if (files?.length) {
            const newImages = Array.from(files).map((file) => ({
                file,
                url: URL.createObjectURL(file),
            }));
            setUploadedImages((prev) => [...prev, ...newImages]);
        }
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    const removeImage = (index) => {
        setUploadedImages((prev) => {
            const img = prev[index];
            if (img?.url) URL.revokeObjectURL(img.url);
            return prev.filter((_, i) => i !== index);
        });
    };

    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
            <Button onClick={() => setOpen(true)}>
                <PlusCircle className="w-4 h-4" />
                Add New Buildings
            </Button>

            <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-xl font-semibold text-primary font-['Adobe_Aldine']">
                        Add New Buildings
                    </DialogTitle>
                </DialogHeader>

                <FormProvider {...methods}>
                    <form
                        onSubmit={methods.handleSubmit(onSubmit)}
                        className="flex flex-col gap-4"
                    >
                        {/* Building Name - full width */}
                        <CommonInput
                            name="buildingName"
                            label="Building Name*"
                            placeholder="Type your building name..."
                            className="pl-4"
                        />

                        {/* Address - full width */}
                        <CommonInput
                            name="address"
                            label="Address*"
                            placeholder="Type your building address..."
                            className="pl-4"
                        />

                        {/* City, State, Country - 3 columns */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <CommonInput
                                name="city"
                                label="City*"
                                placeholder="Type your city address..."
                                className="pl-4"
                            />
                            <CommonInput
                                name="state"
                                label="State*"
                                placeholder="Type your state address..."
                                className="pl-4"
                            />
                            <CommonInput
                                name="country"
                                label="country*"
                                placeholder="Type your country ..."
                                className="pl-4"
                            />
                        </div>

                        {/* Google Map Link, Total Floors - 2 columns */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <CommonInput
                                name="googleMapLink"
                                label="Google Map Link*"
                                placeholder="Type your city address..."
                                className="pl-4"
                            />
                            <CommonInput
                                name="totalFloors"
                                label="Total Floors*"
                                placeholder="Type your country ..."
                                className="pl-4"
                            />
                        </div>

                        {/* Parking Details, Status - 2 columns */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <CommonInput
                                name="parkingDetails"
                                label="Parking Details*"
                                placeholder="Type parking details..."
                                className="pl-4"
                            />

                            {/* Status Dropdown */}
                            <div className="space-y-1.5">
                                <label className="text-xs font-semibold text-dark-gray">
                                    Status*
                                </label>
                                <Controller
                                    name="status"
                                    control={methods.control}
                                    render={({ field }) => (
                                        <CommonSelect
                                            options={[
                                                { label: "Active", value: "active" },
                                                { label: "Inactive", value: "inactive" },
                                                { label: "Under Construction", value: "under-construction" },
                                            ]}
                                            value={field.value}
                                            onValueChange={field.onChange}
                                            placeholder="Select status"
                                            triggerClassname="w-full py-5.5 border-none"
                                        />
                                    )}
                                />
                            </div>
                        </div>

                        {/* Description - Tiptap Rich Text Editor */}
                        <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-dark-gray">
                                Description*
                            </label>
                            <div className="rounded-md border border-border bg-input-bg overflow-hidden">
                                {/* Toolbar */}
                                <div className="flex items-center gap-0.5 px-2 py-1.5 border-b border-border flex-wrap">
                                    <ToolbarBtn
                                        onClick={() => editor?.chain().focus().toggleBold().run()}
                                        isActive={editor?.isActive("bold")}
                                        title="Bold"
                                    >
                                        <Bold className="w-4 h-4" />
                                    </ToolbarBtn>
                                    <ToolbarBtn
                                        onClick={() => editor?.chain().focus().toggleItalic().run()}
                                        isActive={editor?.isActive("italic")}
                                        title="Italic"
                                    >
                                        <Italic className="w-4 h-4" />
                                    </ToolbarBtn>
                                    <ToolbarBtn
                                        onClick={() => editor?.chain().focus().toggleUnderline().run()}
                                        isActive={editor?.isActive("underline")}
                                        title="Underline"
                                    >
                                        <UnderlineIcon className="w-4 h-4" />
                                    </ToolbarBtn>
                                    <ToolbarBtn
                                        onClick={() => editor?.chain().focus().toggleStrike().run()}
                                        isActive={editor?.isActive("strike")}
                                        title="Strikethrough"
                                    >
                                        <Strikethrough className="w-4 h-4" />
                                    </ToolbarBtn>

                                    <div className="w-px h-4 bg-border mx-1" />

                                    <ToolbarBtn
                                        onClick={() => editor?.chain().focus().setTextAlign("left").run()}
                                        isActive={editor?.isActive({ textAlign: "left" })}
                                        title="Align Left"
                                    >
                                        <AlignLeft className="w-4 h-4" />
                                    </ToolbarBtn>
                                    <ToolbarBtn
                                        onClick={() => editor?.chain().focus().setTextAlign("center").run()}
                                        isActive={editor?.isActive({ textAlign: "center" })}
                                        title="Align Center"
                                    >
                                        <AlignCenter className="w-4 h-4" />
                                    </ToolbarBtn>
                                    <ToolbarBtn
                                        onClick={() => editor?.chain().focus().setTextAlign("right").run()}
                                        isActive={editor?.isActive({ textAlign: "right" })}
                                        title="Align Right"
                                    >
                                        <AlignRight className="w-4 h-4" />
                                    </ToolbarBtn>

                                    <div className="w-px h-4 bg-border mx-1" />

                                    <ToolbarBtn
                                        onClick={() => editor?.chain().focus().toggleBulletList().run()}
                                        isActive={editor?.isActive("bulletList")}
                                        title="Bullet List"
                                    >
                                        <List className="w-4 h-4" />
                                    </ToolbarBtn>
                                    <ToolbarBtn
                                        onClick={() => editor?.chain().focus().toggleOrderedList().run()}
                                        isActive={editor?.isActive("orderedList")}
                                        title="Ordered List"
                                    >
                                        <ListOrdered className="w-4 h-4" />
                                    </ToolbarBtn>

                                    <div className="w-px h-4 bg-border mx-1" />

                                    {/* Text Color Picker */}
                                    <div className="relative">
                                        <ToolbarBtn
                                            onClick={() => setOpenPicker(openPicker === 'color' ? null : 'color')}
                                            isActive={openPicker === 'color'}
                                            title="Text Color"
                                        >
                                            <Palette className="w-4 h-4" />
                                        </ToolbarBtn>
                                        {openPicker === 'color' && (
                                            <div className="absolute top-full left-0 mt-1 z-50 p-2 bg-white rounded-lg shadow-lg border border-border grid grid-cols-7 gap-1" style={{ minWidth: '140px' }}>
                                                {['#000000', '#434343', '#666666', '#999999', '#b7b7b7', '#cccccc', '#ffffff', '#DC2626', '#EA580C', '#D97706', '#65A30D', '#16A34A', '#2563EB', '#9333EA', '#EC4899', '#FF6B6B', '#FFA500', '#FFD93D', '#6BCB77', '#4D96FF', '#A29BFE'].map(c => (
                                                    <button
                                                        key={c}
                                                        type="button"
                                                        onClick={() => { editor?.chain().focus().setColor(c).run(); setOpenPicker(null); }}
                                                        className="w-5 h-5 rounded border border-border cursor-pointer hover:scale-110 transition-transform"
                                                        style={{ backgroundColor: c, border: c === '#ffffff' ? '1px solid #ddd' : undefined }}
                                                        title={c}
                                                    />
                                                ))}
                                                <button
                                                    type="button"
                                                    onClick={() => { editor?.chain().focus().unsetColor().run(); setOpenPicker(null); }}
                                                    className="col-span-full text-xs text-dark-gray hover:text-primary cursor-pointer mt-1"
                                                >
                                                    Remove color
                                                </button>
                                            </div>
                                        )}
                                    </div>

                                    {/* Highlight Picker */}
                                    <div className="relative">
                                        <ToolbarBtn
                                            onClick={() => setOpenPicker(openPicker === 'highlight' ? null : 'highlight')}
                                            isActive={openPicker === 'highlight'}
                                            title="Highlight"
                                        >
                                            <HighlighterIcon className="w-4 h-4" />
                                        </ToolbarBtn>
                                        {openPicker === 'highlight' && (
                                            <div className="absolute top-full left-0 mt-1 z-50 p-2 bg-white rounded-lg shadow-lg border border-border grid grid-cols-7 gap-1" style={{ minWidth: '140px' }}>
                                                {['#FFFF00', '#FFD93D', '#FF9F43', '#FF6B6B', '#A29BFE', '#55EFC4', '#81ECEC', '#74B9FF', '#FDA7DF', '#E17055', '#DFE6E9', '#B2BEC3'].map(c => (
                                                    <button
                                                        key={c}
                                                        type="button"
                                                        onClick={() => { editor?.chain().focus().toggleHighlight({ color: c }).run(); setOpenPicker(null); }}
                                                        className="w-5 h-5 rounded border border-border cursor-pointer hover:scale-110 transition-transform"
                                                        style={{ backgroundColor: c }}
                                                        title={c}
                                                    />
                                                ))}
                                                <button
                                                    type="button"
                                                    onClick={() => { editor?.chain().focus().unsetHighlight().run(); setOpenPicker(null); }}
                                                    className="col-span-full text-xs text-dark-gray hover:text-primary cursor-pointer mt-1"
                                                >
                                                    Remove highlight
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Editor Area */}
                                <EditorContent editor={editor} />
                            </div>
                        </div>

                        {/* Upload Building Image */}
                        <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-dark-gray">
                                Upload Building image*
                            </label>

                            {/* Preview thumbnails row */}
                            {uploadedImages.length > 0 && (
                                <div className="flex flex-wrap items-center gap-2">
                                    {uploadedImages.map((img, idx) => (
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
                                <span className="text-sm text-dark-gray font-sans">Upload image</span>
                            </div>
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/*"
                                multiple
                                className="hidden"
                                onChange={handleImageUpload}
                            />
                        </div>

                        {/* Footer Actions */}
                        <DialogFooter className="grid grid-cols-2 gap-4 pt-2">
                            <DialogClose
                                render={<Button variant="outline" type="button" className="w-full" />}
                            >
                                <X className="w-4 h-4" />
                                Cancel
                            </DialogClose>
                            <Button type="submit" className="w-full">
                                <BuildingsIcon className="w-4 h-4" />
                                Add New Building
                            </Button>
                        </DialogFooter>
                    </form>
                </FormProvider>
            </DialogContent>
        </Dialog>
    );
};

export default AddBuilding;