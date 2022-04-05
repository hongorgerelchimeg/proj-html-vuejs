<template>
    <header>
        <div class="nav-holder">
            <main-nav />
        </div>
        
        <div class="logo-holder">
            <img class="logo-dark" :src="require('../../public/img/dark-logo.png')" alt="">
        </div>

        <div class="right-side-utility">
            <font-awesome-icon icon="fa-solid fa-cart-shopping" />
            <font-awesome-icon icon="fa-regular fa-circle-user" />
            <div class="search-bar">
                <form role="search" method="get" action="">
                    <input type="text" class="search" placeholder="Search..">
                    <button type="submit" class="search-btn">
                        <font-awesome-icon icon="fas fa-search" />
                    </button>
                </form>
                
                
            </div>
            
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
    height: 10vh;
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
            max-height: 1.6rem;
        }
    }
    .right-side-utility {
        color: $MainBlack;
        font-size: 1.3rem;
        width: calc(80% / 2);
        display: flex;
        align-items: center;
        justify-content: center;
        display: flex;
        align-items: center;
        gap: 1.5rem;
        .search-bar {
            position: relative;
            overflow: hidden;
            button {
                position: absolute;
                z-index: 0;
                width: 2.5rem;
                height: 2.8rem;
                right: 0;
                border: none;
                border-top-right-radius: 5px;
                border-bottom-right-radius: 5px;
                background-color: transparent;
                &:hover {
                    background-color: $MainGreen;
                    svg {
                        color: $White;
                        
                    }
                }
            }
            border-radius: 5px;
            background-color: $SearchBackgroundColor;
            .search-btn {
                display: inline-block;
               
            svg {
                color: $MainGreen;
                font-size: 1rem;
                
            }
            
            }
            input {
                border-radius: 5px;
                padding: 0 45px 0 10px;
                font-size: .9rem;
                color: $MainGreen;
                line-height: 3;
                background-color: transparent;
                border: 1px solid transparent;
                &:focus-visible {
                    outline: none;
                }
                &:focus {
                    border-radius: 5px;
                    border: 1px solid $MainGreen;
            }
                
            }
        }
    }
}
</style>