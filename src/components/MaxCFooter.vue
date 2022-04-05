<template>
    <footer>
        <div class="container-fluid bg-black">
            <div class="container wrapper">
                <div class="left">
                    <div class="sub-title">
                        Address
                    </div>
                    <div class="text">
                        <a target="_blank" href="https://www.google.it/maps/place/382+NE+191st+St,+Miami,+FL+33179,+USA/@25.9499413,-80.1954298,17z/data=!3m1!4b1!4m5!3m4!1s0x88d9ae86ab7e96f3:0xad6afccfbc8fca5a!8m2!3d25.9499365!4d-80.1932358">382 NE 191st St # 87394 Miami, FL 33179-3899</a> 
                    </div>
                    <div class="text">
                        <a target="_blank" href="tel:+1 (305) 547-9909">+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)</a> 
                    </div>
                    <div class="text">
                    <a target="_blank" href="mailto:support@maxcoach.com">support@maxcoach.com</a> 
                    </div>
                    <div class="social-links">
                        <font-awesome-icon icon="fa-brands fa-instagram" />
                        <font-awesome-icon icon="fa-brands fa-twitter" />
                        <font-awesome-icon icon="fa-brands fa-linkedin" />
                        <font-awesome-icon icon="fa-brands fa-youtube" />
                    </div>

                </div>
                <div class="center">
                    <div class="sub-title">
                        Explore
                    </div>
                     <div class="text">
                        <a  href="#!">Start here</a> 
                    </div>
                    <div class="text text-inline">
                        <a  href="#!"><span> Success story</span></a> 
                    </div>
                    <div class="text">
                        <a  href="#!">Blog</a> 
                    </div>
                     <div class="text text-inline">
                        <a  href="#!">Courses</a> 
                    </div>
                    <div class="text">
                        <a  href="#!">About us</a> 
                    </div>
                    <div class="text text-inline">
                        <a  href="#!">Contact us</a> 
                    </div>
                </div>
                <div class="right">
                    <div class="sub-title">
                        Information
                    </div>
                     <div class="text">
                        <a  href="#!">Membership</a> 
                    </div>
                    <div class="text text-inline">
                        <a  href="#!"><span>Purchase guide</span></a> 
                    </div>
                    <div class="text">
                        <a  href="#!">Privacy policy</a> 
                    </div>
                    <div class="text">
                        <a  href="#!">Terms of service</a> 
                    </div>
                </div>
            </div>
            <div class="container text-center trade-marks">
                <a href="#!">
                    © 2020 Maxcoach. All Rights Reserved
                </a>
            </div>
        </div>
    </footer>
    
     
 
</template>

<script>
export default {
    name: 'MaxCFooter',
}
</script>

<style lang="scss" scoped>
@import "../../public/styles/main";
.bg-black {
    background-color: $MainBlack;
    padding: 3rem 0;
    line-height: 2.5;
    font-size: 13px;
}
.wrapper {
    display: flex;
    align-items: flex-start;
    margin: 0 auto;
    gap: 30px;
    .sub-title {
        color: $White;
        font-size: 1.2rem;
        font-weight: 700;
    }
    a {
        color: $FooterText;
        &:hover {
            color: $MainGreen;
        }
    }
    .left {
        width: 50%;
        margin-left: 2rem;
    }
    .center,.right {
        margin-left: 2rem;
        width: 25%;
        display: flex;
        flex-wrap: wrap;
        .sub-title {
            flex-basis: 100%;
        }
        .text {
            flex-basis: 50%
        }
        
    }
    .right {
        .text {
            flex-basis: 100%
        }
    }
    .text-inline {
        display: inline-block;
    }
    .social-links {
        margin-top: 1rem;
        display: flex;
        align-items: center;
        gap: 2rem;
        font-size: 1.5rem;
        & svg {
            transition: color .5s ease;
        }
        & >:hover  {
            color: $White;
            cursor: pointer;
        }
    }
}
.trade-marks {
    width: 100%;
    margin: 3rem auto 0;
    text-align: center;
    a {
        color: $FooterText;
        
    }
}
.text-center {
    
}

</style>