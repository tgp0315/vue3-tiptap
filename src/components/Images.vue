<template>
  <div v-if="editor">
    <button @click="addImage">add image from URL</button>
  </div>
  <editor-content :editor="editor" />
</template>
  
<script setup lang='ts'>
import Document from '@tiptap/extension-document'
import Dropcursor from '@tiptap/extension-dropcursor'
import Image from '@tiptap/extension-image'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import { Editor, EditorContent } from '@tiptap/vue-3'
import { ref, onMounted, onBeforeUnmount } from 'vue';

const editor = ref()
const addImage = () => {
  const url = window.prompt('URL')
  if (url) {
    editor.value?.chain().focus().setImage({src: url}).run()
  }
}
onMounted(() => {
  editor.value = new Editor({
    extensions: [
      Document,
      Paragraph,
      Image,
      Dropcursor,
      Text
    ],
    content: `
        <p>This is a basic example of implementing images. Drag to re-order.</p>
        <img src="https://source.unsplash.com/8xznAGy4HcY/800x400" />
        <img src="https://source.unsplash.com/K9QHL52rE2k/800x400" />
      `
  })
})
onBeforeUnmount(() => {
  editor.value?.destroy()
})
</script>
  
<style>
  
</style>