<template>
    <div>
        <Header />
        <section class="container">
            <div class="pricing">
                <!--         <div class="pricing__title"><h1>Solar energy market</h1></div>-->
                <div  class="pricing__items">
                    <div v-for="i in info" :key="i" class="pricing__item">

                        <div class="pricing__item-card-img">
                            <svg xmlns="http://www.w3.org/2000/svg" width="62" height="63" viewBox="0 0 62 63" fill="none">
                                <path
                                        d="M13.2857 17.5932L6.99714 11.2716L11.16 7.06711L17.419 13.4186L13.2857 17.5932ZM33.9524 0V8.9457H28.0476V0H33.9524ZM55.0029 11.2716L48.7143 17.5932L44.581 13.4186L50.84 7.06711L55.0029 11.2716ZM8.85714 28.3281V34.2919H0V28.3281H8.85714ZM53.1429 28.3281H62V34.2919H53.1429V28.3281ZM13.2857 56.6561H48.7143C50.2803 56.6561 51.7822 57.2845 52.8896 58.4029C53.9969 59.5213 54.619 61.0382 54.619 62.6199H7.38095C7.38095 61.0382 8.00306 59.5213 9.11042 58.4029C10.2178 57.2845 11.7197 56.6561 13.2857 56.6561ZM31 11.9276C35.6981 11.9276 40.2038 13.8126 43.5259 17.1679C46.848 20.5232 48.7143 25.0739 48.7143 29.819V53.6742H13.2857V29.819C13.2857 25.0739 15.152 20.5232 18.4741 17.1679C21.7962 13.8126 26.3019 11.9276 31 11.9276Z"
                                        fill="#03D6F3" />
                            </svg>
                        </div>
                        <div class="pricing__item-text">
                            <h2>{{$t(i.name_en)}}</h2>
                            <p>{{$t(i.description_en)}}</p>
                        </div>
                        <div class="pricing__item-card-info">
                            <a href="">Learn More</a>
                            <b class="price">{{$t(i.price)}}</b>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        <Footer />
    </div>
</template>

<script>
    import Header from "@/components/Header.vue";
    import Footer from "@/components/Footer.vue";
    import axios from 'axios'


    export default {
        name: "Pricing",
        components: {
            Header,
            Footer,
        },
        data() {
            return {
                info :[]
            }
        },
        mounted(){
            axios
                .get('https://pvbatt.herokuapp.com/api/v1/pricing-list')
                .then(response => {
                    console.log(response)
                    this.info = response.data
                })
        }
    };
</script>

<style lang="scss" scoped>

    .container {
        max-width: 1440px;
        margin: 0 auto;
    }


    .pricing {
        padding: 160px 20px 170px;

        &__title {
            max-width: 558px;
            width: 100px;
            margin-bottom: 52px;
            & h1{
                font-family: Montserrat;
                font-style: normal;
                font-weight: normal;
                font-size: 64px;
                line-height: 104px;
                letter-spacing: 0.065em;
                text-transform: uppercase;
            }
        }

        &__items {
            display: flex;
            justify-content: center;
            /*flex-wrap: wrap;*/
            max-width: 1500px;
            width: 100%;
            @media (max-width: 1100px){
                flex-direction: column;
                align-items: center;
            }
        }

        &__item {
            margin: 10px;
            background-image: linear-gradient(to top, #fff, #fff);
            box-shadow: 0 0 38px 5px #000019;
            border-radius: 10px;
            transition: 2s ease;
            padding: 60px 60px 45px 60px;
            max-width: 445px;
            width: 100%;
            cursor: pointer;
            position: relative;
            &:hover {
                background-image: linear-gradient(230.95deg, #CB1AE8 -0.37%, #37BDA6 100%);
                .pricing__item-text h2,p,a{
                    color: #fff;
                }
                .pricing__item-card-img svg path{
                    fill: #fff;
                }
            }
            &-card {
                display: inline-block;
                position: relative;
                /*background-image: linear-gradient(to top, #fff, #fff);*/
                /*-webkit-backface-visibility: hidden;*/
                z-index: 1;

                border-radius: 10px;
                transition: 0.3s ease;
                padding: 60px 60px 45px 60px;
                max-width: 445px;
                transition: opacity 0.5s ease-out;
                cursor: pointer;
                @media (max-width: 500px) {
                    padding: 20px 10px 14px 10px;
                }



                /*&:hover::after {*/
                /*   opacity: 1;*/
                /*}*/

                &:hover {
                    .pricing__item-text h2,p,a{
                        color: #fff;
                    }
                    .pricing__item-card-img svg path{
                        fill: #fff;
                    }
                }

                &-img {
                    overflow: hidden;
                    width: 100%;

                    & img {
                        display: block;
                        width: 100%;
                        height: auto;
                        transition: 0.3s ease;
                    }
                }

                &:hover {
                    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);

                    & img {

                        transform: scale(1.05);
                    }
                }
                &-info {
                    position: absolute;
                    display: flex;
                    width: 100%;
                    justify-content: space-between;
                    bottom: 10px;
                    left:0;
                    padding:0 60px ;
                }
            }

            &-text {
                margin-top: 40px;
                transition: opacity 0.5s ease-out;

                & h2 {
                    font-family: Poppins, Arial, sans-serif;
                    font-weight: bold;
                    font-size: 30px;
                    line-height: 33px;
                    letter-spacing: 0.1px;
                    margin-bottom: 30px;
                }

                & p {
                    font-family: Poppins, Arial, sans-serif;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 18px;
                    line-height: 27px;
                    letter-spacing: 0.2px;

                    color: #5C5C5C;
                }
                & b {
                    margin-left:auto;
                }
            }
        }

    }
</style>
