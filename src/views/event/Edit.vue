<template>
  <p>Edit for the event here</p>
</template>

<script>
export default {
  props: ['event'],
  data() {
    return {
      unsavedChanges: true
    }
  },
  beforeRouteLeave() {
    if (this.unsavedChanges) {
      const answer = window.confirm(
        'Do you really want to leave? You have unsaved change'
      )

      if (!answer) {
        return false
      }
    }
  }
}
</script>
