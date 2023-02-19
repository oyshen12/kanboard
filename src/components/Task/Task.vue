<template>
  <div class="task">
    <div class="task__name">Implement collector name</div>
    <div class="task__info">
      <div class="d-flex">
        <div class="task__info-img"></div>
        <div class="task__info-name">NUC-205</div>
      </div>
      <div class="task__info-priority"></div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TaskKanboard",
});
</script>

<style scoped lang="scss" src="./Task.scss">
</style>