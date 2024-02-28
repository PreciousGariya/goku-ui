<template>
    <button class ="goku-button" :style="{ backgroundColor: props.color }">
        <slot />
    </button>
</template>
<style scoped>

.goku-button {
  border: none; /* Remove border */
  border-radius: 10px; /* Round the corners */
  padding: 15px 30px; /* Padding inside the button */
  box-shadow: 5px 5px 10px #cbced1, 
              -5px -5px 10px #ffffff; /* Soft shadow */
  transition: all 0.3s ease; /* Smooth transition */

  /* Text styles */
  color: #333; /* Text color */
  font-size: 16px;
  font-weight: bold;

  /* Cursor style */
  cursor: pointer;
}

.goku-button:hover {
  box-shadow: 7px 7px 15px #cbced1, 
              -7px -7px 15px #ffffff; /* Increase shadow on hover */
  transform: translateY(-3px); /* Move button slightly up */
}

</style>
<script lang="ts" setup>
const props = defineProps({
    color: {
        type: String,
        required: false,
        default: '#053742'
    }
})
</script>