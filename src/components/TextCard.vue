<template>
  <div class="text-card">
      <div class="sub-title">
          <span>{{TextCardContent.subTitle}}</span>
          <span><strong> {{TextCardContent.subTitleBold}}</strong></span>
      </div>
      <div class="title">
          <span>{{TextCardContent.Title}}</span>
          <div class="styled-text">
              <span> {{TextCardContent.Title2}}</span>
          </div>
          <span> {{TextCardContent.Title3}}</span>
      </div>
      <div class="paragraph">
        <p>{{TextCardContent.Paragraph}}</p>
      </div>
      <div class="call-to-action">
          <span>{{TextCardContent.CallToAction}} </span>
          <div class="cta-link">
              <a :href="TextCardContent.Link"> {{TextCardContent.CallToActionLink}} <font-awesome-icon icon="fa-solid fa-arrow-right-long" /></a>
          </div>
          
      </div>
  </div>
</template>

<script>
export default {
    name: 'TextCard',
    props: {
        TextCardContent: {
            subTitle: String,
            subTitleBold: String,
            Title: String,
            Title2: String,
            Title3: String,
            Paragraph: String,
            CallToAction: String,
            CallToActionLink: String,
            Link: String,
        }
      
    }
}
</script>

<style lang="scss" scoped>
@import "../../public/styles/main";
.text-card {
    width: 100%;
    height: auto;
    .sub-title {
        text-transform: uppercase;
        line-height: 1.5;
    }
    strong {
        color: $StormDust;
    }
    .title {
        font-size: 2.6rem;
        line-height: 1.3;
        font-weight: 700;
        color: $MainBlack;
    }
    .paragraph {
        margin-top: .5rem;
    }
    .styled-text {
        display: inline;
        color: $MainGreen;
        font-weight: 300;
    }
    .call-to-action {
        margin-top: .5rem;
        .cta-link {
            display: inline;
            a {
                color: $MainGreen;
                cursor: pointer;
            }
            text-decoration: underline;
        }
    }
}

.title {
    margin-top: .6rem;
}

</style>