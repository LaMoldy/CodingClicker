<template id="app">
  <div>
    <TopBarContainer />
    <br />
    <br />
    <img alt="Notepad icon" class="desktop-icon" src="./assets/sprites/starting_os/Notepad.svg" />

  </div>
</template>

<script>
import TopBarContainer from './components/computer_top_bar/TopBarContainer.vue';

export default {
  name: 'App',
  components: {
    TopBarContainer,
  }
};
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: black;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
}

.desktop-icon {
  width: 128px;
  height: 128px;
}
</style>
