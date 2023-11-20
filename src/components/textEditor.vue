<template>
  <div v-if="editor">
    <template v-for="item in actions">
      <template v-if="'disabled' in item && 'isActive' in item">
        <el-button @click="item.method" :class="{ 'is-active': item.isActive ? item.isActive() : null }" :disabled="item.disabled ? item.disabled() : null">{{ item.label }}</el-button>
      </template>
      <template v-if="!('disabled' in item) && 'isActive' in item">
        <el-button @click="item.method" :class="{ 'is-active': item.isActive ? item.isActive() : null }">{{ item.label }}</el-button>
      </template>
      <template v-if="!('disabled' in item) && !('isActive' in item)">
        <el-button @click="item.method" >{{ item.label }}</el-button>
      </template>
      <template v-if="'disabled' in item && !('isActive' in item)">
        <el-button @click="item.method" :disabled="item.disabled ? item.disabled() : null">{{ item.label }}</el-button>
      </template>
    </template>
    <editor-content :editor="editor"></editor-content>
  </div>
</template>
  
<script setup lang='ts'>
import StarterKit from '@tiptap/starter-kit';
import { Editor, EditorContent } from '@tiptap/vue-3';
import { onBeforeUnmount, onMounted, ref } from 'vue';
const editor:any = ref()
const actions = [
  {
    label: 'bold',
    disabled: () => !editor.value?.can().chain().focus().toggleBold().run(),
    isActive: () => editor.value?.isActive('bold'),
    method: () => editor.value?.chain().focus().toggleBold().run()
  },
  {
    label: 'italic',
    disabled: () => !editor.value?.can().chain().focus().toggleItalic().run(),
    isActive: () => editor.value?.isActive('italic'),
    method: () => editor.value?.chain().focus().toggleItalic().run()
  },
  {
    label: 'strike',
    disabled: () => !editor.value?.can().chain().focus().toggleStrike().run(),
    isActive: () => editor.value?.isActive('strike'),
    method: () => editor.value?.chain().focus().toggleStrike().run()
  },
  {
    label: 'code',
    disabled: () => !editor.value?.can().chain().focus().toggleCode().run(),
    isActive: () => editor.value?.isActive('code'),
    method: () => editor.value?.chain().focus().toggleCode().run()
  },
  {
    label: 'clear marks',
    method: () => editor.value?.chain().focus().unsetAllMarks().run()
  },
  {
    label: 'clear nodes',
    method: () => editor.value?.chain().focus().clearNodes().run()
  },
  {
    label: 'paragraph',
    isActive: () => editor.value?.isActive('paragraph'),
    method: () => editor.value?.chain().focus().setParagraph().run()
  },
  {
    label: 'H1',
    isActive: () => editor.value?.isActive('heading', { level: 1 }) ,
    method: () => editor.value?.chain().focus().toggleHeading({ level: 1 }).run()
  },
  {
    label: 'H2',
    isActive: () => editor.value?.isActive('heading', { level: 2 }) ,
    method: () => editor.value?.chain().focus().toggleHeading({ level: 2 }).run()
  },
  {
    label: 'H3',
    isActive: () => editor.value?.isActive('heading', { level: 3 }) ,
    method: () => editor.value?.chain().focus().toggleHeading({ level: 3 }).run()
  },
  {
    label: 'H4',
    isActive: () => editor.value?.isActive('heading', { level: 4 }) ,
    method: () => editor.value?.chain().focus().toggleHeading({ level: 4 }).run()
  },
  {
    label: 'H5',
    isActive: () => editor.value?.isActive('heading', { level: 5 }) ,
    method: () => editor.value?.chain().focus().toggleHeading({ level: 5 }).run()
  },
  {
    label: 'H6',
    isActive: () => editor.value?.isActive('heading', { level: 6 }) ,
    method: () => editor.value?.chain().focus().toggleHeading({ level: 6 }).run()
  },
  {
    label: 'bullet list',
    isActive: () => editor.value?.isActive('bulletList'),
    method: () => editor.value?.chain().focus().toggleBulletList().run()
  },
  {
    label: 'ordered list',
    isActive: () => editor.value?.isActive('orderedList') ,
    method: () => editor.value?.chain().focus().toggleOrderedList().run()
  },
  {
    label: 'code block',
    isActive: () => editor.value?.isActive('codeBlock') ,
    method: () => editor.value?.chain().focus().toggleCodeBlock().run()
  },
  {
    label: 'blockquote',
    isActive: () => editor.value?.isActive('blockquote') ,
    method: () => editor.value?.chain().focus().toggleBlockquote().run()
  },
  {
    label: 'horizontal rule',
    method: () => editor.value?.chain().focus().setHorizontalRule().run()
  },
  {
    label: 'hard break',
    method: () => editor.value?.chain().focus().setHardBreak().run()
  },
  {
    label: 'undo',
    disabled: () => !editor.value?.can().chain().focus().undo().run(),
    method: () => editor.value?.chain().focus().undo().run()
  },
  {
    label: 'redo',
    disabled: () => !editor.value?.can().chain().focus().redo().run(),
    method: () => editor.value?.chain().focus().redo().run()
  },
]


onMounted(() => {
  editor.value = new Editor({
    extensions: [
      StarterKit
    ],
    content: `
      <h2>
        Hi there,  
      </h2>
      <p>
          this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
        </p>
        <ul>
          <li>
            That’s a bullet list with one …
          </li>
          <li>
            … or two list items.
          </li>
        </ul>
        <p>
          Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
        </p>
        <pre><code class="language-css">body {
  display: none;
}</code></pre>
        <p>
          I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
        </p>
        <blockquote>
          Wow, that’s amazing. Good work, boy! 👏
          <br />
          — Mom
        </blockquote>
    `
  })

  onBeforeUnmount(() => {
    editor.value?.destroy()
  })
})
</script>
  
<style lang="scss">
.tiptap {
  > * + * {
    margin-top: 0.75em;
  }

  ul,
  ol {
    padding: 0 1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.1;
  }

  code {
    background-color: rgba(#616161, 0.1);
    color: #616161;
  }

  pre {
    background: #0D0D0D;
    color: #FFF;
    font-family: 'JetBrainsMono', monospace;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;

    code {
      color: inherit;
      padding: 0;
      background: none;
      font-size: 0.8rem;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  blockquote {
    padding-left: 1rem;
    border-left: 2px solid rgba(#0D0D0D, 0.1);
  }

  hr {
    border: none;
    border-top: 2px solid rgba(#0D0D0D, 0.1);
    margin: 2rem 0;
  }

} 
.is-active {
  background: black !important;
  color: #fff !important;
}
</style>