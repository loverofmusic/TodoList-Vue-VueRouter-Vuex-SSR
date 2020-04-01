<template>
  <div :class="['todo-item', todo.completed ? 'completed' : '']">
    <input type="checkbox" class="toggle" v-model="todo.completed" />
    <label for="">{{ todo.content }}</label>
    <button class="destroy" @click="clickDelete(todo.id)"></button>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    clickDelete(id) {
      this.$emit("del", id);
    }
  }
};
</script>

<style lang="stylus" scoped>
.todo-item
    display flex
    flex-direction row
    align-items center
    height 90px
    background-color #fff
    font-size 38px
    border-bottom 1px solid #eee;/* no */
    label
        white-space pre-line
        word-break break-all
        transition color 0.4s
        margin-left 20px
        margin-right auto
    &.completed
        label
            color #d9d9d9
            text-decoration line-through
    .toggle
        width 70px
        display flex
        height 100%
        margin 0
        align-items center
        margin 0 0px 0 10px
        border none
        appearance none
        outline none
        background url('../../assets/images/round.svg') 0px 10px no-repeat
        background-size contain
        &:checked
            background url('../../assets/images/done.svg') 0px 10px no-repeat
            background-size contain
  .destroy
      display flex
      align-items center
      padding-right 20px
      color #cc9a9a
      background-color transparent
      appearance none
      border-width 0
      cursor pointer
      outline none
      &:after
          font-size 46px
          content 'x'
</style>
