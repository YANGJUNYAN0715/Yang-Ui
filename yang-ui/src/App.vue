<template>
  <m-card
    imgSrc="1.jpg"
    summary="天高散孤云,落日澄空故乡影,飘摇游子心"
    width="150"
  >
    <template v-slot>
      <div class="footer">
        <a href="https://ys.mihoyo.com/" style="text-decoration: none"
          >Genshin Impact</a
        >
      </div>
    </template>
  </m-card>
</template>

<script>
export default {};
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
