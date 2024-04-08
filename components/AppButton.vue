<template>
  <component :is="type" :to="to" :class="classes" :style="style" @click="onClick">
    {{ label }}
  </component>
</template>

<script lang="ts" setup>
import './AppButton.scss';

interface AppButtonInterface {
  backgroundColor?: string,
  label?: string,
  to?: string
}

const props = withDefaults(defineProps<AppButtonInterface>(), {});

const emit = defineEmits<{(e: 'click'): void;}>();

const type = computed(() => props.to ? 'router-link' : 'button');

const classes = computed(() => ({
  button: true
}));

const style = computed(() => ({
  backgroundColor: props.backgroundColor
}));

const onClick = () => {
  emit('click');
};
</script>
