<script setup lang="ts">
// import { Editor } from '@tiptap/core'
// import Document from '@tiptap/extension-document'
// import Paragraph from '@tiptap/extension-paragraph'
// import Text from '@tiptap/extension-text'
// import Heading from '@tiptap/extension-heading'
// import StarterKit from '@tiptap/starter-kit'
// import Note from './components/Note.vue'
// import { TNote } from './type/types'
// import { onMounted, ref } from 'vue'
// const content = ref()
// const notes: TNote[] = [
//   { id: 'note-1', content: 'some random note text<code>11</code>' },
//   { id: 'note-2', content: 'some really random note text' },
// ]
// import { Editor, useEditor, EditorContent } from '@tiptap/vue-3'
// import EditorContent from './components/Editor.vue'

// const content = '<p>A Vue.js wrapper component for tiptap to use <code>v-model</code>.</p>'
// import StarterKit from '@tiptap/starter-kit'
// import { ref, onMounted, onBeforeUnmount } from 'vue';

  // const editor: any = ref(null)

  // onMounted(() => {
    // const editor = useEditor({
    //   content: '<p>I’m running Tiptap with Vue.js. 🎉</p>',
    //   extensions: [
    //     StarterKit,
    //   ],
    // })
    // console.log(editor.value)
  // })
  // onMounted(() => {
  //   new Editor({
  //     element: content.value,
  //     extensions: [
  //       Document,
  //       Paragraph,
  //       Text,
  //       Heading.configure({
  //         levels: [1, 2, 3],
  //       })
  //     ],
  //     content: '<p>Example Text</p>',
  //     autofocus: true,
  //     editable: true,
  //     injectCSS: false,
  //   })
  // })
</script>

<template>
  <div>
  <router-view></router-view>
    <!-- <div v-for="note in notes" :key="note.id">
      <Note :note="note"/>
    </div> -->
  </div>
</template>

<style lang="scss">
/* Basic editor styles */
.tiptap {
  > * + * {
    margin-top: 0.75em;
  }

  code {
    background-color: rgba(#616161, 0.1);
    color: #616161;
  }
}

.content {
  padding: 1rem 0 0;

  h3 {
    margin: 1rem 0 0.5rem;
  }

  pre {
    border-radius: 5px;
    color: #333;
  }

  code {
    display: block;
    white-space: pre-wrap;
    font-size: 0.8rem;
    padding: 0.75rem 1rem;
    background-color:#e9ecef;
    color: #495057;
  }
}
</style>
