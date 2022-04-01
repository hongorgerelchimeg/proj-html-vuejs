<template>
  <div id="app">
    <max-c-header
    />
    <max-c-main />
    <max-c-footer />
  </div>
</template>

<script>
import MaxCFooter from './components/MaxCFooter.vue'
import MaxCHeader from './components/MaxCHeader.vue'
import MaxCMain from './components/MaxCMain.vue'


export default {
  name: 'App',
  components: {
    MaxCHeader,
    MaxCMain,
    MaxCFooter
    
  }
}
</script>

<style lang="scss">
@import "../public/styles/main";

</style>
