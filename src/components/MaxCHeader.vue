<template>
    <header>
        <div class="nav-holder">
            <main-nav />
        </div>
        
        <div class="logo-holder">
            <img class="logo-dark" :src="require('../../public/img/dark-logo.png')" alt="">
        </div>

        <div class="right-side-utility">
            <input type="text" class="search" placeholder="Search..">
        </div>
    </header>
    
     
 
</template>

<script>
import MainNav from './MainNav.vue'
export default {
  components: { MainNav },
    name: 'MaxCHeader',
    data () {
        return {
            
        }
    }

}
</script>

<style lang="scss" scoped>
@import "../../public/styles/main";
header {
    width: 100%;
    height: 8vh;
    display: flex;
    justify-content: space-around;
    .nav-holder {
        width: calc(80% / 2);
        display: flex;
        align-items: center;
    }
    .logo-holder {
        width: 20%;
        display: flex;
        align-items: center;
        justify-content: center;
        .logo-dark {
            max-height: 1.4rem;
        }
    }
    .right-side-utility {
        width: calc(80% / 2);
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>