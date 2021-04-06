export const textMixin = {
  computed: {
    reversedText() {
      return this.text.split("").reverse().join("")
    },
    textWithLength() {
      return `${this.text} (${this.text.length})`
    },
  },
}
