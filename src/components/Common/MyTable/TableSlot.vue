<script lang="ts">
import {defineComponent} from 'vue'


export default defineComponent({
  name: 'TableSlot',
  props: {
    row: {
      type: Object,
      required: true
    },
    renderFn: {
      type: Function,
      required: true
    },
    index: {
      type: [String, Number],
      required: true
    },
    column: {
      type: Object,
      required: true
    }
  },

  render() {
    return this.renderFn({
      row: this.row,
      index: this.index,
      column: this.column
    })
  }
})

</script>

<style lang="scss" scoped>


</style>
