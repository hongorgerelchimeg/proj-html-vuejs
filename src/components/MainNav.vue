<template>
    <ul>
        <li v-for="link in linkArr" :key="link.id">
            <a href="#!">{{link.text}}</a>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'MainNav',
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
ul {
    margin-left: 2rem;
    width: 100%;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    li {
        margin-right: 1.5rem;
    }
    a {
        
        // &::after {
        //     content: 
        // }
    }
}
</style>