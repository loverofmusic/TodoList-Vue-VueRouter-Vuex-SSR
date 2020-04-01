<template>
  <div class="helper">
    <div class="left">{{ unFinishedTodoLength }} items left</div>
    <div class="tabs">
      <span
        v-for="state in states"
        :key="state"
        :class="[state, filter === state ? 'on' : '']"
        @click="clickToggle(state)"
      >
        {{ state }}
      </span>
    </div>
    <div class="clear" @click="clearCompleted">Clear Completed</div>
  </div>
</template>

<script>
export default {
  props: {
    filter: {
      type: String,
      required: true
    },
    todoLists: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      states: ["all", "active", "completed"]
    };
  },
  computed: {
    unFinishedTodoLength() {
      return this.todoLists.filter(t => !t.completed).length;
    }
  },
  methods: {
    clickToggle(state) {
      this.$emit("toggle", state);
    },
    clearCompleted() {
      this.$emit('clear')
    }
  }
};
</script>

<style lang="stylus" scoped>
.helper
    font-weight 100
    display flex
    justify-content space-between
    padding 30px 0
    background-color #ffffff
    font-size 28px
    
.left, .clear, .tabs
    padding 0 10px
.left .clear
    width 150px
.left
    text-align center
.clear
    text-align right
    cursor pointer
.tabs
    display flex
    justify-content space-between
    *
        display inline-block
        padding 0 10px
        cursor pointer
        border 1px solid rgba(175,47,47,0)/* no */
        &.on
            border-color rgba(175,47,47,0.4)
            border-radius 5px
</style>
