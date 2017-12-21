<template>
    <div class="ttc-iconList">
        <ul>
            <li v-for="(pic, index) in list" :key="index">
                <a href="pic.href">
                    <div class="pic">
                        <img :src="pic.img" alt="">
                    </div>
                    <p class="title">{{pic.title}}</p>
                </a>
            </li>
        </ul>


    </div>
</template>

<script>
    /* eslint-disable indent */
    /* eslint-disable */

    export default {
        props: {
            list: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        data() {
            return {
                pics: [
                    {
                        url: '/1',
                        src: require('@/assets/img/logo.png'),
                        title: 1
                    },
                    {
                        url: '/2',
                        src: require('@/assets/img/lifeService.png'),
                        title: 2
                    },
                    {
                        url: '/3',
                        src: require('@/assets/img/logo.png'),
                        title: 3
                    },
                    {
                        url: '/4',
                        src: require('@/assets/img/lifeService.png'),
                        title: 4
                    },
                    {
                        url: '/5',
                        src: require('@/assets/img/logo.png'),
                        title: 5
                    }
                ]
            }
        }
    }
</script>

<style lang="scss">
    @import '../../assets/css/rem';

    .ttc-iconList {
        height: 180px;
        width: 100%;
        ul {
            align-items: center;
            justify-content: center;
            display: flex;
            flex-wrap: wrap;

            li {
                width: 20%;

                .pic {
                    width: .81rem;
                    height: .81rem;
                    margin: 0 auto;
                    padding: rem(30);
                    background: yellowgreen;
                    border-radius: 50%;
                }
                .title {
                    text-align: center;
                    height: 25px;
                    line-height: 25px;
                }
            }
        }
    }


</style>
