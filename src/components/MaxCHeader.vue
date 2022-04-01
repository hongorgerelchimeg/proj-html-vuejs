<template>
    <header>
        <ul>
            <li v-for="link in linkArr" :key="link.id">
                <a href="#!">{{link.text}}</a>
            </li>
        </ul>
        <div class="logo-holder">
            <img class="logo-dark" :src="require('../../public/img/dark-logo.png')" alt="">
        </div>
        <div class="right-side-utility">
            <input type="text" class="search" placeholder="Search..">
        </div>
    </header>
    
     
 
</template>

<script>
export default {
    name: 'MaxCHeader',
    data () {
        return {
            linkArr: [
                {
                    text: 'Home',
                    type: 'Normal',
                    id: 1,
                },
                 {
                    text: 'Pages',
                    type: 'Normal',
                    id: 2,
                },
                 {
                    text: 'Courses',
                    type: 'Normal',
                    id: 3,
                },
                 {
                    text: 'Features',
                    type: 'Normal',
                    id: 4,
                },
                 {
                    text: 'Blog',
                    type: 'Normal',
                    id: 5,
                },
                 {
                    text: 'Shop',
                    type: 'Normal',
                    id: 6,
                },
            ]
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
    ul {
        width: calc(75% / 2);
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;
        li {
            margin-right: 2rem;
        }
        a {
            color: $StormDust;
            text-decoration: none;
            // &::after {
            //     content: 
            // }
        }
    }
    .logo-holder {
        width: 25%;
        display: flex;
        align-items: center;
        justify-content: center;
        .logo-dark {
            max-height: 1.6rem;
        }
    }
    .right-side-utility {
        width: calc(75% / 2);
        display: flex;
        align-items: center;
        justify-content: center;

    }
}

</style>