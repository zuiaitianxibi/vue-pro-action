<template>
    <div>
        <h2 v-t="'name'"></h2>
        <h2 v-t="myname"></h2>
        <p v-t="{path: 'intro', args: {name: 'ZZ'}}"></p>
        <p v-t="{path: myintro, args: {name: 'ZZ'}}"></p>
        <h3>{{$t('term1')}} <a href="/term"> {{$t('term2')}}</a></h3>
        <i18n path="term0" tag="p">
            <a href="/term">{{$t('term2')}}</a>
            <span>{{$t('term3')}}</span>
            {{count}}
        </i18n>
        <i18n path="info" tag="p">
            <a place="action" :href="changeUrl">{{$t('change')}}</a>
            <span place="limit">{{changeLimit}}</span>
        </i18n>
        <i18n path="info" tag="p" :places="{limit: refundLimit}">
            <a place="action" :href="changeUrl">{{$t('change')}}</a>
        </i18n>
    </div>
</template>
<script>
export default {
    data(){
        return {
            myname: 'name',
            myintro: 'intro',
            count: 3,
            changeLimit: 30,
            refundLimit: 60,
            changeUrl: '/change'
        }
    },
    i18n:{
        messages: {
            'zh-cn': {
                name: '刘桥',
                intro: '你好 {name}'
            },
            'en-us': {
                name: 'ziv',
                intro: 'hi {name}',
                term0: 'I Accept xxx\'s {0} {1} {2}',
                term1: 'I Accept xxx\'s',
                term2: 'Terms of Service Agreement',
                term3: 'Ctcloud terms',
                info: 'You can {action} until {limit} minutes from departure.',
                change: 'change your flight'
            }
        }
        
    }
}
</script>