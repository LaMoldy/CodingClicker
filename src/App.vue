<template id="app">
  <div>
    <TopBarContainer />
    <br class="no-select" />
    <br class="no-select" />
    <img alt="Notepad icon" class="desktop-icon no-select" id="notepad" src="./assets/sprites/starting_os/Notepad.svg" />

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
  cursor: pointer;
}

#notepad {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

img {
  -webkit-user-drag: none;
}

.no-select {
  user-select: none;
}

</style>
