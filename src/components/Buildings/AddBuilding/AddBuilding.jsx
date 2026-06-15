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
    Indent,
    Outdent,
    Heading1,
    Upload,
    X,
} from "lucide-react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import UnderlineExt from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Placeholder from "@tiptap/extension-placeholder";
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
    const [uploadedImage, setUploadedImage] = useState(null);
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
            TextAlign.configure({ types: ["heading", "paragraph"] }),
            Placeholder.configure({ placeholder: "Type  description..." }),
        ],
        content: "",
        editorProps: {
            attributes: {
                class: "min-h-[100px] w-full px-3 py-2 text-sm font-sans focus:outline-none prose prose-sm max-w-none",
            },
        },
    });

    const onSubmit = (data) => {
        const description = editor?.getHTML() || "";
        console.log("Building data:", { ...data, description, uploadedImage });
        setOpen(false);
        methods.reset();
        editor?.commands.clearContent();
        setUploadedImage(null);
    };

    const handleOpenChange = (value) => {
        setOpen(value);
        if (!value) {
            methods.reset();
            editor?.commands.clearContent();
            setUploadedImage(null);
        }
    };

    const handleImageUpload = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setUploadedImage({ file, url });
        }
    };

    const removeImage = () => {
        if (uploadedImage?.url) URL.revokeObjectURL(uploadedImage.url);
        setUploadedImage(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
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
                                        <Select
                                            value={field.value}
                                            onValueChange={field.onChange}
                                        >
                                            <SelectTrigger className="w-full h-auto py-3 px-4 text-sm !bg-input-bg !shadow-none !border-none rounded-md">
                                                <SelectValue placeholder="Select status" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="active">Active</SelectItem>
                                                <SelectItem value="inactive">Inactive</SelectItem>
                                                <SelectItem value="under-construction">Under Construction</SelectItem>
                                            </SelectContent>
                                        </Select>
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

                                    <ToolbarBtn
                                        onClick={() => editor?.chain().focus().sinkListItem("listItem").run()}
                                        title="Indent"
                                    >
                                        <Indent className="w-4 h-4" />
                                    </ToolbarBtn>
                                    <ToolbarBtn
                                        onClick={() => editor?.chain().focus().liftListItem("listItem").run()}
                                        title="Outdent"
                                    >
                                        <Outdent className="w-4 h-4" />
                                    </ToolbarBtn>

                                    <div className="w-px h-4 bg-border mx-1" />

                                    <ToolbarBtn
                                        onClick={() => editor?.chain().focus().toggleHeading({ level: 1 }).run()}
                                        isActive={editor?.isActive("heading", { level: 1 })}
                                        title="Heading"
                                    >
                                        <Heading1 className="w-4 h-4" />
                                    </ToolbarBtn>
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

                            {/* Preview thumbnail */}
                            {uploadedImage && (
                                <div className="relative inline-block">
                                    <img
                                        src={uploadedImage.url}
                                        alt="Preview"
                                        className="w-12 h-12 object-cover rounded border border-border"
                                    />
                                    <button
                                        type="button"
                                        onClick={removeImage}
                                        className="absolute -top-1.5 -right-1.5 bg-primary text-white rounded-full p-0.5 cursor-pointer hover:bg-primary/80 transition-colors"
                                    >
                                        <X className="w-3 h-3" />
                                    </button>
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