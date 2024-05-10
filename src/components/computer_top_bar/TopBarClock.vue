<template>
    <p class="no-select">{{ time }}</p>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'TopBarClock',
    methods: {
    },
    data() {
        return {
            timer: null,
            time: (new Date(Date.now() - (new Date()).getTimezoneOffset())).toLocaleTimeString([], { hour: '2-digit', minute:  '2-digit', hour12: true })
        }
    },
    mounted() {
        this.timer = setInterval(() => {
            this.time = (new Date(Date.now() - (new Date()).getTimezoneOffset())).toLocaleTimeString([], { hour: '2-digit', minute:  '2-digit', hour12: true })
        }, 1000)
    },
    beforeUnmount() {
        clearInterval(this.timer);
    }
});
</script>

<style scoped>
p {
    color: white;
}
</style>