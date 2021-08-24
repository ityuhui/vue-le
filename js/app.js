
new Vue({
    el: '#app',
    data: {
            value1: '',
            afirm : '1',
    },
    methods: {
        onConfirm : function () {
            //console.log("yes")
            this.afirm = "yes"
        },
        onCancel : function () {
            //console.log("no")
            this.afirm = "no"
        },
    }
})
