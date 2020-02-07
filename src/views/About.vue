

<template>
  <div class="about">
    <h1>{{$t('welcome')}}</h1>
    <h2>{{$t('gtxt')}}</h2>
    <h2>{{$t('intro', {0: 'liuqiao', 1: 31})}}</h2>
	<h3>{{$tc('car', 1)}}</h3>
	<h3>{{$tc('car', 2)}}</h3>
	<h3>{{$tc('apple', 0)}}</h3>
	<h3>{{$tc('apple', 1)}}</h3>
	<h3>{{$tc('apple', 2)}}</h3>
	<h3>{{$tc('apple', 2, {count: 5})}}</h3>
	<h4>{{$tc('banana', 1, {n: 1})}}</h4>
	<h4>{{$tc('banana', 1)}}</h4>
	<h4>{{$tc('banana', 2, {n: 'too much'})}}</h4>
	<h4>{{$t('errors[0]')}}</h4>
	<h4>{{$t('errors[1].internal1')}}</h4>
	<h4>{{$t('errors[2][0]')}}</h4>
	<h4>{{$t('huanyin')}}</h4>
	<p v-html="$t('info')"></p>
  </div>
</template>
<script>
export default {
	data(){
		return {

		}	
	},
	i18n: {
		messages: {
			'zh-cn': {
				welcome: '您好，这是关于页面',
				intro:'我是{0},今年{1}',
				info: '<span>早上好</span>',
				huanyin: '欢迎'
			},
			'en-us': {
				name: 'LQ',
				age: 31,
				welcome: 'Hi, This is an about page',
				intro:'I am @:(name). ',
				info: '<span>good morning</span>',
				car: 'car | cars',
				apple: 'no apples | one apple | {count} apples',
				banana: 'no bananas | {n} banana | {n} bananas',
				"errors": [ // 数组
						"this is 0 error code message",
						{  // 数组嵌套对象
							"internal1": "this is internal 1 error message"
						},
						[  // 数组嵌套数组
							"this is nested array error 1"
						]
					]
			}
		}
	}
}
</script>