<template>
  <input
    type="text"
    :value="props.modelValue"
    :disabled="props.disabled"
    :readonly="props.readonly"
    :tabindex="props.tabindex"
    :aria-label="props.label"
    :placeholder="placeholder"
    class="main-input"
    @input="handleInput"
    @focus="handleFocus"
    @blur="handleBlur"
    @change="handleChange"
  />
</template>

<script setup lang="ts">
import { withDefaults, defineProps, defineEmits } from 'vue';

type Props = {
  modelValue: string;
  disabled?: boolean;
  readonly?: boolean;
  tabindex?: number;
  label?: string;
  placeholder?: string;
}
const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  readonly: false,
  tabindex: 1,
  label: '',
  placeholder: ''
})

type Emit = {
  (e: 'update:modelValue', val: string): void;
  (e: 'change', val: string): void;
  (e: 'focus'): void;
  (e: 'blur'): void;
}

const emit = defineEmits<Emit>();

const handleInput = (event: Event): void => {
  const { value } = event.target as HTMLInputElement;
  emit('update:modelValue', value);
}

const handleChange = (event: Event): void => {
  const { value } = event.target as HTMLInputElement;
  emit('change', value);
}

const handleFocus = (): void => {
  emit('focus');
}

const handleBlur = (): void => {
  emit('blur');
}
</script>

<style scoped lang="scss" src="./MainInput.scss"/>