<template>
    <div class="container">
        <div id="leftGroup">
            <TopBarPowerButton />
        </div>
        <div id="rightGroup">
            <font-awesome-icon class="icon" :icon="['fas', 'wifi']" />
            <TopBarClock />
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue"
import TopBarClock from "./TopBarClock.vue";
import TopBarPowerButton from "../TopBarPowerButton.vue";

export default defineComponent({
  name: 'TopBarContainer',
  components: {
    TopBarClock,
    TopBarPowerButton
  },
});

</script>

<style scoped>
.container {
    display: flex;
    position: fixed;
    background-color: #3d3d3d;
    width: 100vw;
    max-height: 0.25rem;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
}

.icon {
    position: relative;
    color: white;
}

#rightGroup {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: fit-content;
    align-items: center;
    gap: 1rem;
    margin-right: 25px;
}
</style>