import { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import UnderlineExt from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Placeholder from "@tiptap/extension-placeholder";
import { TextStyle } from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";
import {
    Bold,
    Italic,
    Underline as UnderlineIcon,
    Strikethrough,
    AlignLeft,
    AlignCenter,
    AlignRight,
    List,
    ListOrdered,
    Palette,
    Highlighter as HighlighterIcon,
} from "lucide-react";
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

const CommonTextEditor = ({ label, placeholder = "Type description...", onContentChange }) => {
    const [openPicker, setOpenPicker] = useState(null);

    const editor = useEditor({
        extensions: [
            StarterKit,
            UnderlineExt,
            TextStyle,
            Color,
            Highlight.configure({ multicolor: true }),
            TextAlign.configure({ types: ["heading", "paragraph"] }),
            Placeholder.configure({ placeholder }),
        ],
        content: "",
        onUpdate: ({ editor }) => {
            onContentChange?.(editor.getHTML());
        },
        editorProps: {
            attributes: {
                class: "min-h-[100px] w-full px-3 py-2 text-sm font-sans focus:outline-none prose prose-sm max-w-none [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_li]:ml-4",
            },
        },
    });

    return (
        <div className="space-y-1.5">
            {label && (
                <label className="text-xs font-semibold text-dark-gray">{label}</label>
            )}
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
                            onClick={() => setOpenPicker(openPicker === "color" ? null : "color")}
                            isActive={openPicker === "color"}
                            title="Text Color"
                        >
                            <Palette className="w-4 h-4" />
                        </ToolbarBtn>
                        {openPicker === "color" && (
                            <div
                                className="absolute top-full left-0 mt-1 z-50 p-2 bg-white rounded-lg shadow-lg border border-border grid grid-cols-7 gap-1"
                                style={{ minWidth: "140px" }}
                            >
                                {[
                                    "#000000", "#434343", "#666666", "#999999", "#b7b7b7", "#cccccc", "#ffffff",
                                    "#DC2626", "#EA580C", "#D97706", "#65A30D", "#16A34A", "#2563EB", "#9333EA",
                                    "#EC4899", "#FF6B6B", "#FFA500", "#FFD93D", "#6BCB77", "#4D96FF", "#A29BFE",
                                ].map((c) => (
                                    <button
                                        key={c}
                                        type="button"
                                        onClick={() => {
                                            editor?.chain().focus().setColor(c).run();
                                            setOpenPicker(null);
                                        }}
                                        className="w-5 h-5 rounded border border-border cursor-pointer hover:scale-110 transition-transform"
                                        style={{ backgroundColor: c, border: c === "#ffffff" ? "1px solid #ddd" : undefined }}
                                        title={c}
                                    />
                                ))}
                                <button
                                    type="button"
                                    onClick={() => {
                                        editor?.chain().focus().unsetColor().run();
                                        setOpenPicker(null);
                                    }}
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
                            onClick={() => setOpenPicker(openPicker === "highlight" ? null : "highlight")}
                            isActive={openPicker === "highlight"}
                            title="Highlight"
                        >
                            <HighlighterIcon className="w-4 h-4" />
                        </ToolbarBtn>
                        {openPicker === "highlight" && (
                            <div
                                className="absolute top-full left-0 mt-1 z-50 p-2 bg-white rounded-lg shadow-lg border border-border grid grid-cols-7 gap-1"
                                style={{ minWidth: "140px" }}
                            >
                                {[
                                    "#FFFF00", "#FFD93D", "#FF9F43", "#FF6B6B", "#A29BFE", "#55EFC4",
                                    "#81ECEC", "#74B9FF", "#FDA7DF", "#E17055", "#DFE6E9", "#B2BEC3",
                                ].map((c) => (
                                    <button
                                        key={c}
                                        type="button"
                                        onClick={() => {
                                            editor?.chain().focus().toggleHighlight({ color: c }).run();
                                            setOpenPicker(null);
                                        }}
                                        className="w-5 h-5 rounded border border-border cursor-pointer hover:scale-110 transition-transform"
                                        style={{ backgroundColor: c }}
                                        title={c}
                                    />
                                ))}
                                <button
                                    type="button"
                                    onClick={() => {
                                        editor?.chain().focus().unsetHighlight().run();
                                        setOpenPicker(null);
                                    }}
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
    );
};

export default CommonTextEditor;
