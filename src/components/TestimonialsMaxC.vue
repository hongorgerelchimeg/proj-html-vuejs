<template>
<div class="testimonials">
    <div class="testimonials-holder testi1">
        <div class="title">
            <span>Professional team of specialists and passionate mentors at reach</span>
        </div>
        <div class="paragraph">
            <span>I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.</span>
        </div>
        <div class="user-holder">
                <div class="img-holder">
                    <img :src="require('../../public/img/testimonial-avata-01.jpg')" alt="">
                </div>
                <div class="user-profile">
                    <div class="user-name">Madley Pondor</div>
                    <div>/ IT Specialist</div>
                </div>
        </div>
    </div>
    <div class="testimonials-holder testi2">
        <div class="title">
            <span>Professional team of specialists and passionate mentors at reach</span>
        </div>
        <div class="paragraph">
            <span>I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.</span>
        </div>
        <div class="user-holder">
            <div class="img-holder">
                <img :src="require('../../public/img/testimonial-avata-01.jpg')" alt="">
            </div>
            <div class="user-profile">
                <div class="user-name">Madley Pondor</div>
                <div>/ IT Specialist</div>
            </div>
        </div>
    </div>
    <div class="testimonials-holder testi3">
        <div class="title">
            <span>Professional team of specialists and passionate mentors at reach</span>
        </div>
        <div class="paragraph">
            <span>I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.</span>
        </div>
        <div class="user-holder">
            <div class="img-holder">
                <img :src="require('../../public/img/testimonial-avata-02.jpg')" alt="">
            </div>
            <div class="user-profile">
                <div class="user-name">Minna Hollace</div>
                <div>/ Freelancer</div>
            </div>
        </div>
    </div>

</div>
  
</template>

<script>
export default {
    name: 'TestimonialsMaxC',

}
</script>

<style lang="scss" scoped>
@import "../../public/styles/main";
.testimonials {
    position: relative;
    .testi1 {
        position: absolute;
        top: 50%;
        right: 5%;
        transform: translateY(-50%);
        width: 90%;
        filter: opacity(.4);
        z-index: 0;

    }
    .testi2 {
        position: absolute;
        top: -60px;
        right: 0;
        z-index: 1;
    }
    .testi3 {
        position: absolute;
        top: 50px;
        right: 5%;
        width: 90%;
        filter: opacity(.4);
        z-index: 0;
    }
}
.testimonials-holder {
    background-color: $White;
    padding: 3.5rem;
    box-shadow: 0px 0px 20px 1px rgba(90, 90, 90, 0.1);
    .title {
        font-size: 1.2rem;
        font-weight: 600;
        color: $MainBlack;
        margin-bottom: 1rem;
    }
    .user-holder {
        margin-top: 2rem;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 20px;

        .img-holder {    
            height: 4rem;
            width: 4rem;
            overflow: hidden;
            border-radius: 50%;
            img {
                width: 100%;
                object-fit: cover;

            }
        }
        .user-profile {
            font-size: .8rem;
            .user-name {
                text-transform: uppercase;
                font-size: 1rem;
                color: $MainBlack;
                font-weight: 600;
                line-height: 2;
            }
        }
    }

}

</style>