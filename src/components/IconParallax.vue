<template>
  <div>
      <img class="parallax icon-1" :src="ParalaxIcon.icon1" alt="">
      <img class="parallax icon-2" :src="ParalaxIcon.icon2" alt="">
      <img class="parallax icon-3" :src="ParalaxIcon.icon3" alt="">

  </div>
</template>

<script>
export default {
    name: 'IconParallax',
    props: {
        ParalaxIcon: {
            icon1: String,
            icon2: String,
            icon3: String,
        }
    },
}
</script>

<style lang="scss" scoped>

.parallax {
    position: absolute;
}
.icon-1 {
    right: -35px;
    top: -70px;
    z-index: -1;
}
.icon-2 {
    right: 10px;
    bottom: -50px;
    z-index: 3;
}
.icon-3 {
    left: -80px;
    top: -30px;
    z-index: 1;
}

</style>