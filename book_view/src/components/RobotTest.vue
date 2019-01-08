<template>
  <div id>
    <p>
      提问
      <input v-model='question'>
    </p>
    <p>{{answer}}</p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      question: '',
      answer: '你还没有问人家呀~'
    }
  },
  watch: {
    question: function () {
      this.answer = '等待发问'
      this.getAnswer()
    }
  },
  methods: {
    getAnswer: function () {
      if (this.question.indexOf('?') !== -1) {
        this.answer = '思考中'
        let that = this
        that.$http
          .post('http://robottest.uneedzf.com/api/talk2Robot', {
            token: 'b0c3c047b8bfedff2b544d5150cfc469',
            message: that.question
          })
          .then(function (res) {
            if (res.data.code === 0) {
              that.answer = res.data.data
            } else {
              that.answer = res.data.message
            }
          })
      } else {
        this.answer = '一个问题一般由？结尾哦'
        return 0
      }
    }
  }
}
</script>
