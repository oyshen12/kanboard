<template>
  <div class="task" v-draggable="props.task.id">
    <div class="task__name">{{ props.task.description }}</div>
    <div class="task__info">
      <div class="task__info-block">
        <div class="task__info-block-img"></div>
        <div class="task__info-block-name">{{ props.task.name }}</div>
      </div>
      <div class="task__info-priority" :class="props.task.priority"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { withDefaults, defineProps } from "vue";
import { Task } from '@/stores/kanban-store/types'

type Props = {
  task: Task
}
const props = withDefaults(defineProps<Props>(), {})


</script>

<style scoped lang="scss" src="./Task.scss"/>