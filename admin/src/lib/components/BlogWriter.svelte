<script lang="ts">
    import { onMount, onDestroy } from 'svelte'
    import { Editor } from '@tiptap/core'
    import StarterKit from '@tiptap/starter-kit';
    import Images from '@tiptap/extension-image';
    //@ts-ignore
    import Underline from '@tiptap/extension-underline';
    
    let element:HTMLElement;
    let editor:Editor;
    let editorButtons:{label: string, click: Function, name: string, attr: any, class?: string, disabled?: boolean}[]=[];
  
    onMount(() => {
      editor = new Editor({
        element: element,
        extensions: [
          StarterKit,
          Images,
          Underline,
        ],
        content: '',
        onTransaction: () => {
          // force re-render so `editor.isActive` works as expected
          editor = editor
        },
        onUpdate: () => {
				console.log(editor.getHTML());
			}
      })
    })
    
    onDestroy(() => {
      if (editor) {
        editor.destroy()
      }
    })

    $:{
      if(editor)
   editorButtons = [
    {
      label: "P",click: () => editor.chain().focus().setParagraph().run(),name: "paragraph",attr: {}, class: ""
    },
    {
      label: "H1", click: () => editor.chain().focus().toggleHeading({ level: 1 }).run(), name: "heading", attr: { level: 1 }, class: ""
    },
    {
      label: "H2", click: () => editor.chain().focus().toggleHeading({ level: 2 }).run(), name: "heading", attr: { level: 2 }, class: ""
    },
    {
      label: "H3", click: () => editor.chain().focus().toggleHeading({ level: 3 }).run(), name: "heading", attr: { level: 3 }, class: ""
    },
    {
      label: "H4", click: () => editor.chain().focus().toggleHeading({ level: 4 }).run(), name: "heading", attr: { level: 4 }, class: ""
    },
    { 
      label: "H5", click: () => editor.chain().focus().toggleHeading({ level: 5 }).run(), name: "heading", attr: { level: 5 }, class: ""
    },
    {
      label: "H6", click: () => editor.chain().focus().toggleHeading({ level: 6 }).run(), name: "heading", attr: { level: 6 }, class: ""
    },
    {
      label: "B", click: () => editor.chain().focus().toggleBold().run(), name: "bold", attr: {}, class: "font-bold"
    },
    {
      //@ts-ignore
      label: "U", click: () => editor.chain().focus().toggleUnderline().run(), name: "underline", attr: {}, class: "underline"
    },
    {
      label: "I", click: () => editor.chain().focus().toggleItalic().run(), name: "italic", attr: {}, class: "italic"
    },
    {
      label: "S", click: () => editor.chain().focus().toggleStrike().run(), name: "strike", attr: {}, class: "line-through"
    },
    {
      label: "●", click: () => editor.chain().focus().toggleBulletList().run(), name: "bulletList", attr: {}, class: ""
    },
    {
      label: "1.", click: () => editor.chain().focus().toggleOrderedList().run(), name: "orderedList", attr: {}, class: ""
    },
    {
      label: "</>", click: () => editor.chain().focus().toggleCodeBlock().run(), name: "codeBlock", attr: {}, class: "font-medium"
    },
    {
      label: "bq", click: () => editor.chain().focus().toggleBlockquote().run(), name: "blockquote", attr: {}, class: ""
    },
    {
      label: "hr", click: () => editor.chain().focus().setHorizontalRule().run(), name: "horizontalRule", attr: {}, class: ""
    },
    {
      label: "\\n", click: () => editor.chain().focus().setHardBreak().run(), name: "hardBreak", attr: {}, class: ""
    },
    {
      label: "Image", click: () => editor.chain().focus().setImage({ src: "/iutcs-logo-black.svg", alt: "" }).run(), name: "image", attr: {}, class: "ipx-4"
    },
    {
      label: "↩", click: () => editor.chain().focus().undo().run(), name: "undo", attr: {}, class: "ipx-4", disabled: !editor.can().chain().focus().undo().run()
    },
    {
      label: "↪", click: () => editor.chain().focus().redo().run(), name: "redo", attr: {}, class: "ipx-4", disabled: !editor.can().chain().focus().redo().run()
    }
];
    }
    </script>
  
  
  
  
  <div class="rounded-md shadow bg-secondary p-4 max-w-xl">
      <h2 class="text-xl font-semibold pb-4">Write a blog</h2>
      <input class="my-1 p-2 border shadow-sm w-full bg-primary-800" placeholder="Title" type="text" name="title" id="title">
      <input class="my-1 p-2 border shadow-sm w-full bg-primary-800" placeholder="URL" type="text" name="url" id="title">
      <div class="text-xs editor-toolbox text-center">
        {#if editor}
        {#each editorButtons as btn}
          <button
            on:click={() => btn.click()}
            disabled={btn.disabled}
            class:active={editor.isActive(btn.name, btn.attr)}
            class={btn.class}
            >
            {btn.label}
          </button>
        {/each}
        {/if}
      </div>

      <div bind:this={element} class="shadow bg-secondary border editor" />
      <div class="flex gap-4 my-8 justify-end">
        <button class="px-4 py-1 bg-orange-400">Draft</button>
        <button class="px-4 py-1 bg-red-600">Publish</button>
      </div>
</div>

<style>
    button.active {
        background: white;
       color: black;
    }
    .editor-toolbox {
        padding: 2rem 0 0.5rem 0;
    }
    .editor-toolbox button {
      padding: 0.25rem 0.5rem;
      margin: 0.25rem;
      border: 1px solid white;
      border-radius: 5px;
    }
</style>