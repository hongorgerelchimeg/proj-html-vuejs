<template>
    <main>
        <div class="container-fluid container-gradient">
            <!-- HERO SECTION -->
            <div class="section">
                <div class="hero-section text-white">
                    <div class="hero-title">
                        <div class="sub-title">
                            <p>Commence Business</p>
                        </div>
                        <h1>Distant Mentoring Program</h1>
                        <div class="call-to-action">
                            <button class="btn">Donwload free guidebook <font-awesome-icon icon="fa-solid fa-arrow-right-long" /></button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Work Culture Section 1  -->
            <div class="container ">
                <div class="section section-1">
                    <div class="content-holder">
                        <div class="left-side-holder right-padding">
                            <text-card :TextCardContent="arrTextCardContent[0]" />
                        </div>
                        <div class="right-side-holder">
                            <div class="img-holder">
                                <img :src="require('../../public/img/stock-full-hd-10-ohki1ayywq3cqutettrncduujpoaorifqu4relt2ts.jpg')" alt="">
                                <div class="img-absolute right">
                                    <img :src="require('../../public/img/about-us-01-ohkia3qg98rq9vg3s0mn2hkflr1migdqdw370qnegc.jpg')" alt="">
                                </div>
                                <icon-parallax :ParalaxIcon="arrParalaxIcons[0]"/>
                            </div>
                            

                        </div>
                    </div>
                </div>

                <!-- Animated Counter -->
                <div class="section section-2">
                    <div class="counter-holder">
                        <div class="enrolled-learners">
                            <div class="counter">
                                <p>{{objCounter.EnrolledLearners}}</p>
                            </div>
                            <p>Enrolled Learners</p>
                        </div>
                        <div class="finished-sessions">
                            <div class="counter">
                                <p>{{objCounter.FinishedSessions}}</p>
                            </div>
                            <p>Finished sessions</p>
                        </div>
                        <div class="satisfaction-rate">
                            <div class="counter">
                                <p>{{objCounter.SatisfactionRate}}</p>
                            </div>
                            <p>Satisfaction-rate</p>
                        </div>
                    </div>
                </div>

                <!-- Youtube Video Section 3 -->
                <div class="section section-3">
                    <div class="content-holder">
                        <div class="left-side-holder">
                            <div class="img-holder ">
                                <div class="video-player-holder">
                                    <img style="video-cover" :src="require('../../public/img/stock-full-hd-11-670x450.jpg')" alt="video cover">
                                </div>
                                
                                <div class="img-absolute center call-video-player">
                                    <img :src="require('../../public/img/icon-youtube-play.png')" alt="youtube.logo" width="60px">
                                </div>
                                <icon-parallax :ParalaxIcon="arrParalaxIcons[1]"/>
                            </div>
                            
                        </div>
                        <div class="right-side-holder left-padding " >
                            <text-card class="text-card" :TextCardContent="arrTextCardContent[1]" />
                        </div>
                    </div>
                </div>

                <!-- Latest Online Courses Section 4 -->
                <div class="section section-4">
                    <div class="content-holder">
                        <div class="full text-center text-capitalize">
                            <span>JOIN MAXCOACH AT BEST</span>
                            <div class="title">
                                <span>Latest Online</span>
                                <div class="styled-text">
                                    <span> Courses</span>
                                </div>
                            </div>

                            <div class="card-holder">
                                    <card-max-c v-for="(card, index) in arrCard" :key="index" :CardProp="card" />
                            </div>
                            <div class="under-card-text">
                                <span>Control your personal preference settings to get notified about appropriate courses. <a href="#!">View all courses</a></span>
                            </div>
                            

                        </div>
                    </div>
                </div>
            </div>

            <!-- svg Section Divider -->
            <div class="divider">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" height="100">
                    <path class="fill-divider" d="M 0 0 L0 100 L100 100 L100 0 Q 50 200 0 0"></path>
                </svg>
            </div>
        </div>

        <!-- New Container Background Gradient in 3 colors -->
        <div class="container-fluid container-gradient-triple">

            <!-- Testimonials Section 5 -->
            <div class="container">
                <div class="section section-5">
                    <div class="content-holder">
                        <div class="left-side-holder right-padding">
                            <text-card :TextCardContent="arrTextCardContent[2]" />
                        </div>
                        <div class="right-side-holder">
                            
                            <testimonials-max-c />

                        </div>
                    </div>
                </div>
            </div>

            <!-- Get Guide Section 6  -->
            <div class="container">
                <div class="section section-6">
                    <div class="content-holder aling-center">
                        <div class="left-side-holder">
                           <div class="img-holder">
                               <img src="../../public/img/home-3-team-image.png" alt="team">
                               <icon-parallax :ParalaxIcon="arrParalaxIcons[1]"/>
                           </div>
                        </div>
                        <div class="right-side-holder left-padding">
                            
                            <text-card :TextCardContent="arrTextCardContent[3]" />

                            <div class="btn-holder background-green">
                                <button class="btn">Get Free Guide</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- New Container Background Grey -->
        <div class="container-fluid container-grey">
            <!-- Blog Posts Section 7 -->
            <div class="container">
                <div class="section section-7">
                    <div class="content-holder padding-top">
                        <div class="full text-center text-capitalize">
                            <span class="text-uppercase">read for more joyment</span>
                            <div class="title">
                                <span>Latest From</span>
                                <div class="styled-text">
                                    <span> Our Blogs</span>
                                </div>
                            </div>

                            <div class="card-holder">
                                    <blog-card-max-c v-for="(card, index) in arrBlogCard" :key="index" :BlogCardProp="card" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Container Background White -->
        <div class="container-fluid">
             <!-- Newsletters signup-->
            <div class="container">
                <div class="section section-newsletters">
                    <div class="content-holder">
                        <div class="full text-center text-capitalize">
                            <div class="title">
                                <span>Subscribe</span>
                                <div class="styled-text">
                                    <span> Newsletters</span>
                                </div>
                            </div>
                            <span class="">Enter your email address to register to our newsletter subscription delivered on a regular basis!</span>

                            <div class="form-holder">
                                   <form role="newsletters" method="get" action="">
                                        <input type="text" class="newsletters" placeholder="Enter your email">
                                        <button type="submit" class="subscribe-btn">
                                            Subscribe
                                        </button>
                                    </form>
                            </div>

                        </div>
                       
                    </div>
                    <!-- ICONS for Newsletter Section -->
                    <div class="icon-absolute">
                            <div class="icon-right">
                                <img :src="require('../../public/img/maxcoach-shape-02.png')" alt="">
                            </div>
                             <div class="icon-right-2">
                                <img :src="require('../../public/img/maxcoach-shape-09.png')" alt="">
                            </div>
                            <div class="icon-left">
                                <img :src="require('../../public/img/maxcoach-shape-05-100x100.png')" alt="">
                            </div>
                    </div>
                </div>

            </div>
        </div>
    </main>
    
     
 
</template>

<script>
import IconParallax from './IconParallax.vue'
import TextCard from './TextCard.vue'
import CardMaxC from './CardMaxC.vue'
import anime from 'animejs';
import TestimonialsMaxC from './TestimonialsMaxC.vue'
import BlogCardMaxC from './BlogCardMaxC.vue'

//IMAGES AND ICONS
import icon1 from '../../public/img/maxcoach-shape-08.png'
import icon2 from '../../public/img/maxcoach-shape-02.png'
import icon3 from '../../public/img/maxcoach-shape-05-100x100.png'
import icon4 from '../../public/img/maxcoach-shape-07-150x150.png'
import icon5 from '../../public/img/maxcoach-shape-05-150x150.png'
import cardImage1 from '../../public/img/course-02-480x298.jpg'
import cardImage2 from '../../public/img/stock-full-hd-03-480x298.jpg'
import cardImage3 from '../../public/img/stock-full-hd-04-480x298.jpg'
import blogCardImage1 from '../../public/img/artist-blog-03-480x325.jpeg'
import blogCardImage2 from '../../public/img/artist-blog-01-480x325.jpg'
import blogCardImage3 from '../../public/img/artist-blog-02-480x325.jpg'
// ///////////////


export default {
    components: { TextCard, IconParallax, CardMaxC, TestimonialsMaxC, BlogCardMaxC },
    name: 'MaxCMain',
    data () {
        return {
            // Blog Card Array Simulation API
            arrBlogCard: [
                {
                    image: blogCardImage1,
                    category: 'ARTIST',
                    title: 'Brush Strokes Energize Trees in Paintings',
                    counter1: 'May 15, 2020',
                    counter2: '688',
                },
                {
                    image: blogCardImage2,
                    category: 'ARTIST',
                    title: 'Brush Strokes Energize Trees in Paintings',
                    counter1: 'May 17, 2022',
                    counter2: '601',
                },
                 {
                    image: blogCardImage3,
                    category: 'ARTIST',
                    title: 'Learning to Write as a Professional Author',
                    counter1: 'May 10, 2022',
                    counter2: '397',
                },
            ],
            // Card Array Simulation API
            arrCard: [
                {
                    image: cardImage1,
                    price: '$40.00',
                    title: 'Learning to Write as a Professional Author',
                    counter1: '20 Lessons',
                    counter2: '56 Students',
                    cardTagShow: false,
                },
                {
                    image: cardImage2,
                    price: '$0.00',
                    title: 'Customer-centric Info-Tech Strategies',
                    counter1: '24 Lessons',
                    counter2: '769 Students',
                    cardTagShow: false,
                },
                {
                    image: cardImage3,
                    price: '$19.00',
                    title: 'Open Programming Courses for Everyone: Python',
                    counter1: '17 Lessons',
                    counter2: '62 Students',
                    cardTagShow: false,
                },
                  {
                    image: cardImage1,
                    price: '$40.00',
                    title: 'Learning to Write as a Professional Author',
                    counter1: '20 Lessons',
                    counter2: '56 Students',
                    cardTagShow: false,
                },
                {
                    image: cardImage2,
                    price: '$0.00',
                    title: 'Customer-centric Info-Tech Strategies',
                    counter1: '24 Lessons',
                    counter2: '769 Students',
                    cardTagShow: true,
                },
                {
                    image: cardImage3,
                    price: '$19.00',
                    title: 'Open Programming Courses for Everyone: Python',
                    counter1: '17 Lessons',
                    counter2: '62 Students',
                    cardTagShow: false,
                }
            ],
            arrParalaxIcons: [
                {
                    icon1: icon1,
                    icon2: icon2,
                    icon3: icon3,
                },
                {
                    icon1: icon4,
                    icon2: icon5,
                    icon3: icon3,
                }
            ],
            // Texts Array Simulation API
            arrTextCardContent: [
                {
                    subTitle: 'EVERYTHING IN',
                    subTitleBold: 'MAXCOACH',
                    Title: 'Learn about our',
                    Title2: 'Work Culture',
                    Title3: 'at MaxCoach',
                    Paragraph: "Spend some time to visit our website or head office and discover our current courses, enrollment procedure, and registration deadline. We're opening new classes every beginning of each month.",
                    CallToAction: 'Have questions?',
                    CallToActionLink: 'Get Free Guide ',
                    Link: '#!',
                },
                {
                    subTitle: 'How we work',
                    subTitleBold: '',
                    Title: 'Upgrade Your Skills',
                    Title2: ' Upgrade Your Life',
                    Title3: '',
                    Paragraph: "Opening up more opportunities in front of you to get the ticket to more enjoyable door in life. Getting equipped with new skills for new sets of insights into your career. MaxCoach accompany learners in every stage of learning.",
                    CallToAction: '',
                    CallToActionLink: ' Download free guidebook',
                    Link: '#!',
                },
                {
                    subTitle: 'TESTIMONIALS',
                    subTitleBold: '',
                    Title: 'Why Do People',
                    Title2: ' *Hearts*',
                    Title3: 'Us?',
                    Paragraph: "Seeking for verbals of our service quality? Find them here. Everything is transparent and straightforward for your sense of jusitifcation.",
                    CallToAction: '',
                    CallToActionLink: ' View All',
                    Link: '#!',
                },
                {
                    subTitle: 'EVERYTHING IN',
                    subTitleBold: 'MAXCOACH',
                    Title: "We're Here To",
                    Title2: 'Transform',
                    Title3: 'You!',
                    Paragraph: "As learners, people can enjoy great companionship from MaxCoach mentors and educators. We can help you develop and grow at your best.",
                    CallToAction: '',
                    CallToActionLink: '',
                    Link: '#!',
                },

            ],
            objCounter: {
                EnrolledLearners: 0,
                FinishedSessions: 0,
                SatisfactionRate: 0,
            },
            // Insert counter numbers here! 
            arrCounter: [129, 80, 4],
        }
    },
    methods: {
        freeTagShowCheck () {
        this.arrCard.forEach(card => {
            if(card.price === "$0.00") {
            return card.cardTagShow = true;
            } 
        })
        }
    },
    created () {
        anime({
            targets: this.objCounter,
            EnrolledLearners: this.arrCounter[0] + '+',
            FinishedSessions: this.arrCounter[1],
            SatisfactionRate: this.arrCounter[2] + '%',
            round: 1,
            delay: 20000,
            offset: '50%',
            easing: 'linear',
        });
    },
    mounted () {
        this.freeTagShowCheck();
    }
}
</script>

<style lang="scss" scoped>
@import "../../public/styles/main";
.container-gradient {
    background: rgb(246,246,246);
    background: linear-gradient(0deg, rgba(246,246,246,1) 0%, rgba(255,255,255,1) 100%);
}
.container-gradient-reverse {
    background: rgba(255,255,255,1);
    background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 100%,);
}
.container-gradient-triple {
    background: rgb(255,255,255);
    background: linear-gradient(0deg, rgba(255,255,255,1) 20%, rgba(240,240,240,1) 50%, rgba(255,255,255,1) 100%);
}

.container-grey {
    background: rgb(246,246,246);
}

.hero-section {
    position: relative;
    height: 70vh;
    background-image: url('../../public/img/home-3-hero-bg.jpg');
    background-position: center;
    background-size: cover;
    text-align: center;
    .hero-title {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        h1 {
            font-weight: 300;
        }
        .sub-title {
            font-weight: 700;
            font-size: 2.2rem;
            line-height: 1;
        }
        .call-to-action {
            margin-top: 1rem;
        }
    }
}

.section {
    .content-holder {
        margin-top: 15vh;
        display: flex;
        .full {
            flex-basis: 100%;
            .under-card-text {
                margin: 0 auto;
                text-align: center;
                width: 50%;
                a {
                    text-decoration: underline;
                }
            }
        }
        .left-side-holder {
            flex-basis: 40%;
        }
        .right-side-holder {
            flex-basis: 60%;
        }
        .right-padding {
            padding-right: 4rem;
        }
        .left-padding {
            padding-left: 4rem;
        }
    }
    
}

.divider {
    width: 100%;
    height: 100px;
    svg {
        width: 100%;
        fill: white;
    }
}

.img-holder {
    position: relative;
    img {
        max-width: 100%;
        height: auto;
        border-radius: 3%;
    }
    .img-absolute {
        position: absolute;
        z-index: 1;
        max-width: 150px;
        
        img {
            border-radius: 3%;
        }
       
    }
    & .right {
        right: -73px;
        top: -73px;
    }
    & .center {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}

.counter-holder {
    max-width: 70%;
    margin: 10vh auto 0;
    display: flex;
    align-items: center;
    text-align: center;
    gap: 4rem;
    .counter {
        color: $MainGreen;
        font-size: 3rem;
        font-weight: 700;
    }
    p {
        text-transform: uppercase;
        font-weight: 700;
        line-height: 1.5;
    }
}

.card-holder {
    margin-top: 2rem;
    display: flex;
    gap: 1.5rem;
    align-items: stretch;
    margin-bottom: 10vh;
    overflow: hidden;
}

.section-3,.section-6 {
    .content-holder {
        .left-side-holder {
        flex-basis: 60%;
        }
        .right-side-holder {
            flex-basis: 40%;
        }
    }
}

.section-5 {
    padding: 6rem 0 8rem;
}

.section-6 {
    padding: 0rem 0 8rem;
}

.section-newsletters {
    max-width: 50%;
    margin: 0 auto;
    position: relative;
    .icon-absolute {
        
        .icon-right {
            position: absolute;
            right: -70%;
            top: 20%;
        }
        .icon-right-2 {
            position: absolute;
            right: -70%;
            top: -10%;
        }
        .icon-left {
            position: absolute;
            left: -50%;
            top: 20%;
        }
    }
}


// Utility
.title {
    font-size: 2.6rem;
    font-weight: 700;
    color: $MainBlack;
}

.styled-text {
    display: inline;
    color: $MainGreen;
    font-weight: 300;
}

.text-capitalize {
    text-transform: capitalize;
}

.text-center {
    text-align: center;
}

.text-uppercase {
    text-transform: uppercase;
}

.video-player-holder {
    border-radius: 3%;
    overflow: hidden;
    
    img {
        transition: transform 2s ease;
    }
    img:hover {
        transform: scale(1.2);
    }
}

.call-video-player {
    cursor: pointer;
}

.aling-center {
    align-items: center;
}

.background-green {
    margin-top: 2rem;
    button {
        background-color: $MainGreen;
        color: $White;
        &:hover {
            background-color: $White;
            color: $MainGreen;
        }
    }
}

// Newsletter Form Formatting 

.form-holder {
    margin: 3rem 0 15vh;
    position: relative;
    overflow: hidden;
    button {
        position: absolute;
        z-index: 0;
        padding: 0 1rem;
        height: 2.8rem;
        right: 0;
        border: none;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        background-color: $MainGreen;
        color: white;
        cursor: pointer;
        &:hover {
            background-color: rgb(1, 114, 86);
            color: rgb(130, 130, 130);
        }
    }
    border-radius: 5px;
    background-color: $SearchBackgroundColor;
    .subscribe-btn {
        display: inline-block;
    }
    input {
        border-radius: 5px;
        width: 100%;
        padding: 0 45px 0 20px;
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

// Margin & Padding
.padding-top {
    padding-top: 15vh;
}
span+.title {
    margin-top: .6rem;
}

</style>