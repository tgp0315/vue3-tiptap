<template>
  <editor-content :editor="editor" />
</template>
  
<script setup lang='ts'>
import Document from '@tiptap/extension-document'
import Placeholder from '@tiptap/extension-placeholder'
import StarterKit from '@tiptap/starter-kit'
import { Editor, EditorContent } from '@tiptap/vue-3'
import { onBeforeUnmount, onMounted, ref } from 'vue';
const editor: any = ref()
const CustomDocument = Document.extend({
  content: 'heading block*',
})
onMounted(() => {
  editor.value = new Editor({
    extensions: [
      CustomDocument,
      StarterKit.configure({
        document: false,
      }),
      Placeholder.configure({
        placeholder: ({ node }) => {
          if (node.type.name === 'heading') {
            return 'What’s the title?'
          }

          return 'Can you add some further context?'
        },
      }),
    ],
    content: `
      <h1>
        It’ll always have a heading …
      </h1>
      <p>
        … if you pass a custom document. That’s the beauty of having full control over the schema.
      </p>
    `,
  })
})
onBeforeUnmount(() => {
  editor.value.destroy()
})
</script>
  
<style>
  
</style>