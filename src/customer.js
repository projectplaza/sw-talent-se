import Vue from 'vue/dist/vue.esm'

const customer = new Vue({
    el: '#customer',
    data: {
        mode: {
            show: true,
            edit: false
        },
        customer: {
            base: {
                companyName: 'ABC株式会社',
                address: '東京都中央区日本橋１−１−１',
                mainTelNo: '0120-00-00000'
            },
            charge: {
                name: '須磨和久',
                nameKana: 'スマワク',
                department: '営業本部 第一営業部',
                email: 'suma@sumawaku.com',
                telNo: '123-456-7890'
            }
        }
    },
    methods: {
        edit: () => {
            customer.mode.show = false
            customer.mode.edit = true
        },
        cancel: () => {
            customer.mode.show = true
            customer.mode.edit = false
        }
    }
})
