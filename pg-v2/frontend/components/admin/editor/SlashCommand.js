import { Extension } from '@tiptap/core';
import Suggestion from '@tiptap/suggestion';
import { ReactRenderer } from '@tiptap/react';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import SlashCommandList from './SlashCommandList';

const SLASH_COMMANDS = [
  { title: 'Heading 1', command: ({ editor, range }) => editor.chain().focus().deleteRange(range).toggleHeading({ level: 1 }).run() },
  { title: 'Heading 2', command: ({ editor, range }) => editor.chain().focus().deleteRange(range).toggleHeading({ level: 2 }).run() },
  { title: 'Heading 3', command: ({ editor, range }) => editor.chain().focus().deleteRange(range).toggleHeading({ level: 3 }).run() },
  { title: 'Bold',      command: ({ editor, range }) => editor.chain().focus().deleteRange(range).toggleBold().run() },
  { title: 'Italic',    command: ({ editor, range }) => editor.chain().focus().deleteRange(range).toggleItalic().run() },
  { title: 'Blockquote', command: ({ editor, range }) => editor.chain().focus().deleteRange(range).toggleBlockquote().run() },
  { title: 'Bullet List', command: ({ editor, range }) => editor.chain().focus().deleteRange(range).toggleBulletList().run() },
  { title: 'Ordered List', command: ({ editor, range }) => editor.chain().focus().deleteRange(range).toggleOrderedList().run() },
  { title: 'Code Block', command: ({ editor, range }) => editor.chain().focus().deleteRange(range).toggleCodeBlock().run() },
];

export const SlashCommand = Extension.create({
  name: 'slashCommand',

  addOptions() {
    return {
      suggestion: {
        char: '/',
        command: ({ editor, range, props }) => {
          props.command({ editor, range });
        },
      },
    };
  },

  addProseMirrorPlugins() {
    return [
      Suggestion({
        editor: this.editor,
        ...this.options.suggestion,
        items: ({ query }) =>
          SLASH_COMMANDS.filter(item =>
            item.title.toLowerCase().includes(query.toLowerCase())
          ).slice(0, 9),

        render: () => {
          let component;
          let popup;

          return {
            onStart: (props) => {
              component = new ReactRenderer(SlashCommandList, {
                props,
                editor: props.editor,
              });

              popup = tippy('body', {
                getReferenceClientRect: props.clientRect,
                appendTo: () => document.body,
                content: component.element,
                showOnCreate: true,
                interactive: true,
                trigger: 'manual',
                placement: 'bottom-start',
              });
            },

            onUpdate: (props) => {
              component.updateProps(props);
              popup[0].setProps({ getReferenceClientRect: props.clientRect });
            },

            onKeyDown: (props) => {
              if (props.event.key === 'Escape') {
                popup[0].hide();
                return true;
              }
              return component.ref?.onKeyDown(props);
            },

            onExit: () => {
              popup[0].destroy();
              component.destroy();
            },
          };
        },
      }),
    ];
  },
});