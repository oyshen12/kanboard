<template>
  <Kanban />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Kanban from "@/components/Kanban/Kanban.vue";

export default defineComponent({
  name: "App",
  components: {
    Kanban,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
