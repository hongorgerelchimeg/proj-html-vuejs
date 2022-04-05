<template>
  <div class="card">
      <div class="img-holder">
          <img :src="BlogCardProp.image" alt="">
      </div>
      
      <div class="text-content">
            <div class="price">
            <span>{{BlogCardProp.category}}</span>
            </div>
            <div class="card-title">
                <span>{{BlogCardProp.title}}</span>
            </div>
            <div class="card-item-counter">
                <span>{{BlogCardProp.counter1}}</span>
                <span>{{BlogCardProp.counter2}} views</span>
            </div>
      </div>
      
  </div>
</template>

<script>

export default {
    name: 'BlogCardMaxC',
    props: {
        BlogCardProp: {
            image: String,
            category: String,
            title: String,
            counter1: String,
            counter2: String,
            cardTagShow: {
                type: Boolean,
                default: false,
            }
        },
    }
}
</script>

<style lang="scss" scoped>
@import "../../public/styles/main";

.card {
    position: relative;
    min-width: 30%;
    text-align: start;
    padding-bottom: 4rem;
    cursor: pointer;
    .text-content {
        padding: 0 2rem;
    }
    .img-holder {
        height: 200px;
        overflow: hidden;
        border-top-right-radius: 6px;
        border-top-left-radius: 6px;
    }
    & img {
        width: 100%;
        overflow: hidden;
        object-fit: cover;
        border-top-right-radius: 6px;
        border-top-left-radius: 6px;
        transition: transform 2s ease;
    }
    &.card:hover img{
        transform: scale(1.2);
    }
    .price {
        padding-top: 1rem;
    }
    .price span {
        
        color: $StormDust;
        font-size: 1rem;
        font-weight: 500;
    }
    .card-title {
        color: $MainBlack;
        font-size: 1.2rem;
        font-weight: 600;
    }

    div+div{
        margin-top: .5rem;
    }
    .card-item-counter {
        position: absolute;
        left: 2rem;
        bottom: 1.2rem;
        & > span {
            margin-right: 1rem
        }
    }
    .card-tag-free {
        margin-top: 0;
        border-top-right-radius: 6px;
        padding: .3rem .8rem;
        position: absolute;
        top: 0;
        right: 0;
        background-color: $FreeTagColor;
        color: $White;
        span {
            font-weight: 700;
        }
        &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            border-top: 14px solid $FreeTagColor;
            transform: translateX(-50%);
            border-left: 8px solid transparent;
            border-right: 8px solid transparent;
        }
        &::after {
            
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            border-bottom: 14px solid $FreeTagColor;
            transform: translateX(-50%);
            border-left: 8px solid transparent;
            border-right: 8px solid transparent;
        }
    }
}
</style>

