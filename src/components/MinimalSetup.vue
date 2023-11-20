<template>
  <editor-content :editor="editor" />
</template>
  
<script setup lang='ts'>
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import { Editor, EditorContent } from '@tiptap/vue-3'
import { onBeforeUnmount, onMounted, ref } from 'vue';
const editor: any = ref()

onMounted(() => {
  editor.value = new Editor({
    extensions: [
      Document,
      Paragraph,
      Text,
    ],
    content: `
      <p>
        This is a radically reduced version of tiptap. It has support for a document, with paragraphs and text. That’s it. It’s probably too much for real minimalists though.
      </p>
      <p>
        The paragraph extension is not really required, but you need at least one node. Sure, that node can be something different.
      </p>
    `,
  })
})

onBeforeUnmount(() => {
  editor.value.destroy()
})
</script>
  
<style lang="scss">
.tiptap {
  > * + * {
    margin-top: 0.75em;
  }
}
</style>