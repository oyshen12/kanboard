<template>
  <MainInput
    :model-value="props.modelValue"
    @update:model-value="onUpdate"
    placeholder="Поиск по доске"
    class="kanban-search"/>
</template>

<script setup lang="ts">
import { MainInput } from "@/ui-libary/components";
import { defineEmits, defineProps, withDefaults } from "vue";

type Props = {
  modelValue: string;
}
const props = withDefaults(defineProps<Props>(), {})

type Emit = {
  (e: 'update:modelValue', val: string): void;
}

const emit = defineEmits<Emit>();

const onUpdate = (value: string): void => {
  emit('update:modelValue', value);
}
</script>

<style scoped lang="scss" src="./KanbanSearch.scss"/>