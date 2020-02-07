<i18n src="./../assets/lang/btn.json"/>
<i18n src="./../assets/lang/intro-en.json"/>
<i18n src="./../assets/lang/intro-zh.json"/>
<i18n>
{
    "zh-cn": {
        "btnTxt": "您好，世界"
    },
    "en-us": {
        "btnTxt": "hello world"
    }
}
</i18n>
<template>
    <div>
        <button>{{$t('btnTxt')}}</button>
        <p>{{$t('btnType')}}</p>
        <p>{{$t('btnValue')}}</p>
    </div>
</template>



<script>
export default {
    
}
</script>