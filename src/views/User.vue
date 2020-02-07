<i18n>
    {
        "zh-cn": {
            "address": "广州",
            "company": "中国<span>电信</span>"
        },
        "en-us": {
            "address": "Guang Zhou",
            "company": "China<span>telecom</span>"
        }
    }
</i18n>
<template>
    <div class="container">
        <div class="name">{{$t("user.name")}}</div>
        <div class="nickName">{{$t("user.nickName")}}</div>
        <div class="address">{{$t('address')}}</div>
        <div class="company" v-html="$t('company')"></div>
    </div>
</template>
<style  lang="scss">
    .container{
        .name{
            color: red;
            font-size: 18px;
        }
        .nickName{
            color: aquamarine;
            border: 1px solid yellowgreen;
        }
        .address{
            font-size: 18px;
            font-style: italic;
            color: goldenrod;
        }
        .company  span{
                color: greenyellow;
                font-size: 18px;
            }
        
    }
</style>