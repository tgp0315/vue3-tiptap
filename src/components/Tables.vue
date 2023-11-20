<template>
  <div v-if="editor">
  <template v-for="item in actions">
    <template v-if="item.disabled">
      <el-button @click="item.method" :disabled="item.disabled ? item.disabled() : null">{{ item.label }}</el-button>
    </template>
    <template v-else>
      <el-button @click="item.method">{{ item.label }}</el-button>
    </template>
  </template>
  </div>
  <editor-content :editor="editor" />
</template>
  
<script setup lang='ts'>
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import StarterKit from '@tiptap/starter-kit'
import { Editor, EditorContent } from '@tiptap/vue-3'
import { ref, onMounted, onBeforeUnmount } from 'vue';
const editor = ref()
const actions = [
  {
    label: 'insertTable',
    method: () => editor.value?.chain().focus().insertTable({ rows: 5, cols: 5, withHeaderRow: true }).run()
  },
  {
    label: 'addColumnBefore',
    method: () => editor.value?.chain().focus().addColumnBefore().run(),
    disabled: () => !editor.value?.can().addColumnBefore()
  },
  {
    label: 'addColumnAfter',
    method: () => editor.value?.chain().focus().addColumnAfter().run(),
    disabled: () => !editor.value?.can().addColumnBefore()
  },
  {
    label: 'deleteColumn',
    method: () => editor.value?.chain().focus().deleteColumn().run(),
    disabled: () => !editor.value?.can().deleteColumn()
  },
  {
    label: 'addRowBefore',
    method: () => editor.value?.chain().focus().addRowBefore().run(),
    disabled: () => !editor.value?.can().addRowBefore()
  },
  {
    label: 'addRowAfter',
    method: () => editor.value?.chain().focus().addRowAfter().run(),
    disabled: () => !editor.value?.can().addRowAfter()
  },
  {
    label: 'deleteRow',
    method: () => editor.value?.chain().focus().deleteRow().run(),
    disabled: () => !editor.value?.can().deleteRow()
  },
  {
    label: 'deleteTable',
    method: () => editor.value?.chain().focus().deleteTable().run(),
    disabled: () => !editor.value?.can().deleteTable()
  },
  {
    label: 'mergeCells',
    method: () => editor.value?.chain().focus().mergeCells().run(),
    disabled: () => !editor.value?.can().mergeCells()
  },
  {
    label: 'splitCell',
    method: () => editor.value?.chain().focus().splitCell().run(),
    disabled: () => !editor.value?.can().splitCell()
  },
  {
    label: 'toggleHeaderColumn',
    method: () => editor.value?.chain().focus().toggleHeaderColumn().run(),
    disabled: () => !editor.value?.can().toggleHeaderColumn()
  },
  {
    label: 'toggleHeaderRow',
    method: () => editor.value?.chain().focus().toggleHeaderRow().run(),
    disabled: () => !editor.value?.can().toggleHeaderRow()
  },
  {
    label: 'toggleHeaderCell',
    method: () => editor.value?.chain().focus().toggleHeaderCell().run(),
    disabled: () => !editor.value?.can().toggleHeaderCell()
  },
  {
    label: 'mergeOrSplit',
    method: () => editor.value?.chain().focus().mergeOrSplit().run(),
    disabled: () => !editor.value?.can().mergeOrSplit()
  },
  {
    label: 'setCellAttribute',
    method: () => editor.value?.chain().focus().setCellAttribute().run(),
    disabled: () => !editor.value?.can().setCellAttribute()
  },
  {
    label: 'fixTables',
    method: () => editor.value?.chain().focus().fixTables().run(),
    disabled: () => !editor.value?.can().fixTables()
  },
  {
    label: 'goToNextCell',
    method: () => editor.value?.chain().focus().goToNextCell().run(),
    disabled: () => !editor.value?.can().goToNextCell()
  },
  {
    label: 'goToPreviousCell',
    method: () => editor.value?.chain().focus().goToPreviousCell().run(),
    disabled: () => !editor.value?.can().goToPreviousCell()
  },
]
const CustomTableCell = TableCell.extend({
  addAttributes() {
    return {
      // extend the existing attributes …
      ...this.parent?.(),
      // and add a new one …
      backgroundColor: {
        default: null,
        parseHTML: element => element.getAttribute('data-background-color'),
        renderHTML: attributes => {
          return {
            'data-background-color': attributes.backgroundColor,
            style: `background-color: ${attributes.backgroundColor}`,
          }
        },
      }
    }
  }
})
onMounted(() => {
  editor.value = new Editor({
    extensions: [
      StarterKit,
        Table.configure({
          resizable: true,
        }),
        TableRow,
        TableHeader,
        // Default TableCell
        // TableCell,
        // Custom TableCell with backgroundColor attribute
        CustomTableCell,
    ],
    content: `
        <h3>
          Have you seen our tables? They are amazing!
        </h3>
        <ul>
          <li>tables with rows, cells and headers (optional)</li>
          <li>support for <code>colgroup</code> and <code>rowspan</code></li>
          <li>and even resizable columns (optional)</li>
        </ul>
        <p>
          Here is an example:
        </p>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th colspan="3">Description</th>
            </tr>
            <tr>
              <td>Cyndi Lauper</td>
              <td>singer</td>
              <td>songwriter</td>
              <td>actress</td>
            </tr>
            <tr>
              <td>Marie Curie</td>
              <td>scientist</td>
              <td>chemist</td>
              <td>physicist</td>
            </tr>
            <tr>
              <td>Indira Gandhi</td>
              <td>prime minister</td>
              <td colspan="2">politician</td>
            </tr>
          </tbody>
        </table>
      `,
  })
})
onBeforeUnmount(() => {
  editor.value?.destroy()
})
</script>
  
<style lang="scss">
/* Basic editor styles */
.tiptap {
  margin: 1rem 0;

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

/* Table-specific styling */
.tiptap {
  table {
    border-collapse: collapse;
    table-layout: fixed;
    width: 100%;
    margin: 0;
    overflow: hidden;

    td,
    th {
      min-width: 1em;
      border: 2px solid #ced4da;
      padding: 3px 5px;
      vertical-align: top;
      box-sizing: border-box;
      position: relative;

      > * {
        margin-bottom: 0;
      }
    }

    th {
      font-weight: bold;
      text-align: left;
      background-color: #f1f3f5;
    }

    .selectedCell:after {
      z-index: 2;
      position: absolute;
      content: "";
      left: 0; right: 0; top: 0; bottom: 0;
      background: rgba(200, 200, 255, 0.4);
      pointer-events: none;
    }

    .column-resize-handle {
      position: absolute;
      right: -2px;
      top: 0;
      bottom: -2px;
      width: 4px;
      background-color: #adf;
      pointer-events: none;
    }

    p {
      margin: 0;
    }
  }
}

.tableWrapper {
  overflow-x: auto;
}

.resize-cursor {
  cursor: ew-resize;
  cursor: col-resize;
}
</style>