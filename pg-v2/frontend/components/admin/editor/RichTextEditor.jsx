"use client";

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Placeholder from '@tiptap/extension-placeholder';
import styles from './Editor.module.scss';

// --- THE TOOLBAR ---
const MenuBar = ({ editor }) => {
  if (!editor) return null;

  const addImage = async () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    
    input.onchange = async (event) => {
      const file = event.target.files[0];
      if (!file) return;

      const formData = new FormData();
      formData.append('file', file);

      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";
        
        const res = await fetch(`${baseUrl}/api/posts/upload-image`, {
          method: 'POST',
          body: formData,
          credentials: 'include', 
        });

        if (!res.ok) throw new Error('Upload failed');
        
        const data = await res.json();
        
        // Inject the secure Cloudinary URL directly where the cursor is
        editor.chain().focus().setImage({ src: data.url }).run();
      } catch (error) {
        alert('Failed to upload image. Please try again.');
        console.error(error);
      }
    };

    input.click();
  };

  return (
    <div className={styles.toolbar} role="toolbar" aria-label="Text formatting">
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`${styles.toolbarBtn} ${editor.isActive('bold') ? styles.active : ''}`}
      >
        Bold
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`${styles.toolbarBtn} ${editor.isActive('italic') ? styles.active : ''}`}
      >
        Italic
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`${styles.toolbarBtn} ${editor.isActive('heading', { level: 2 }) ? styles.active : ''}`}
      >
        H2
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={`${styles.toolbarBtn} ${editor.isActive('heading', { level: 3 }) ? styles.active : ''}`}
      >
        H3
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`${styles.toolbarBtn} ${editor.isActive('blockquote') ? styles.active : ''}`}
      >
        Quote
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={`${styles.toolbarBtn} ${editor.isActive('codeBlock') ? styles.active : ''}`}
      >
        Code
      </button>
      <button type="button" onClick={addImage} className={styles.toolbarBtn}>
        🖼 Image
      </button>
    </div>
  );
};

// --- THE MAIN EDITOR COMPONENT ---
export default function RichTextEditor({ content = '', onChange }) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image.configure({
        HTMLAttributes: {
          class: 'content-image',
        },
      }),
      Placeholder.configure({
        placeholder: 'Start writing your plog post here...',
      }),
    ],
    content: content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    // NEW: Intercept Drag and Drop events inside the editor
    editorProps: {
      handleDrop: function (view, event, slice, moved) {
        // If the user is just moving existing text around, ignore it
        if (!event.dataTransfer || !event.dataTransfer.files || !event.dataTransfer.files[0] || moved) {
          return false; 
        }

        const file = event.dataTransfer.files[0];
        
        // Ensure it is actually an image
        if (!file.type.startsWith('image/')) {
          return false; 
        }

        event.preventDefault(); // Stop the browser from opening the image

        // Define the upload logic inside the drop handler
        const uploadDroppedImage = async () => {
          const formData = new FormData();
          formData.append('file', file);

          try {
            const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";
            const res = await fetch(`${baseUrl}/api/posts/upload-image`, {
              method: 'POST',
              body: formData,
              credentials: 'include',
            });

            if (!res.ok) throw new Error('Upload failed');
            
            const data = await res.json();
            
            // Get the exact coordinates of where the user dropped the mouse pointer
            const coordinates = view.posAtCoords({ left: event.clientX, top: event.clientY });
            
            if (coordinates) {
              // Inject the image at that exact spot
              view.dispatch(
                view.state.tr.insert(
                  coordinates.pos,
                  view.state.schema.nodes.image.create({ src: data.url })
                )
              );
            }
          } catch (error) {
            alert('Failed to upload dropped image.');
            console.error(error);
          }
        };

        // Trigger the async upload
        uploadDroppedImage();

        return true; // Tell Tiptap we successfully handled the drop
      },
    },
  });

  return (
    <div className={styles.container}>
      <MenuBar editor={editor} />
      <div className={styles.editorArea}>
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
// export default function RichTextEditor({ content = '', onChange }) {
//   const editor = useEditor({
//     extensions: [
//       StarterKit,
//       Image.configure({
//         HTMLAttributes: {
//           class: 'content-image',
//         },
//       }),
//       Placeholder.configure({
//         placeholder: 'Start writing your plog post here...',
//       }),
//     ],
//     content: content,
//     onUpdate: ({ editor }) => {
//       // Passes the raw HTML up to the parent form component
//       onChange(editor.getHTML());
//     },
//   });

//   return (
//     <div className={styles.container}>
//       <MenuBar editor={editor} />
//       <div className={styles.editorArea}>
//         <EditorContent editor={editor} />
//       </div>
//     </div>
//   );
// }