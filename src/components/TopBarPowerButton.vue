<template>
    <div id="power-off-icon">
        <p><font-awesome-icon :icon="['fas', 'power-off']" /></p>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'TopBarPowerButton',
})
</script>

<style scoped>
p {
    color: white;
}

#power-off-icon:hover {
    cursor: pointer;
}
</style>