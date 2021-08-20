<template>
    <div>
        <Header />
        <section class="container">
            <!--        <div class="dashboardContent">-->
            <!--&lt;!&ndash;            <router-link :to="{ name: 'CreateNewFeatures' }" class="dashboardBTN">{{$t('Create new feature')}}</router-link>&ndash;&gt;-->
            <!--        </div>-->
            <div class="features">
                <div  v-for="i in info" :key="i"  class="features__item">
                    <div class="features__item-card">
                        <div class="features__item-card-img"><img src="@/assets/features.png" alt="Img" ></div>
                        <div class="features__item-container">
                            <h2>{{$t(i.name_en)}}</h2>
                            <p>{{$t(i.description_en)}}</p>
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
        name: "Features",
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
                .get('https://pvbatt.herokuapp.com/api/v1/feature-list')
                .then(response => {
                    this.info = response.data
                })
        }
    };
</script>

<style lang="scss" scoped>
    .features {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        padding: 100px 130px;

        &__item {
            margin: 20px;
            @media (max-width: 501px){
                margin: 10px 0;
            }

            &-card {
                background: #FFFFFF;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                transition: 0.3s ease;
                max-width: 300px;
                border-radius: 6px;
                @media (max-width: 501px){
                    width: 100%;
                }

                &-img {
                    overflow: hidden;
                    width: 100%;
                    border-radius: 6px 6px 0 0;
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
            }

            &-container {
                padding: 13px 17px 28px 17px;
                height:200px;

                & h2 {
                    font-family: Montserrat, Arial, sans-serif;
                    // font-family: $ff-2;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 24px;
                    line-height: 40px;
                }
            }
        }

    }
    .dashboardContent{
        max-width: 1200px;
        padding-bottom: 90px;
        padding-left: 214px;
        padding-top: 100px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .dashboardBTN{
        background-color: #008B8B;
        color: #FFF;
        padding: 15px 69px;
        border-radius: 9px;
    }
</style>
