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
            },
            relation: {
                project: [
                    {
                        code: 'P-000001',
                        projectName: '初期システム開発',
                        charge: '須磨和久',
                        startDate: '2018-12-01',
                        endDate: '2019-02-28',
                        sales: '20,000'
                    },
                    {
                        code: 'P-000001',
                        projectName: '初期システム開発',
                        charge: '須磨和久',
                        startDate: '2018-12-01',
                        endDate: '2019-02-28',
                        sales: '20,000'
                    }
                ],
                customerDealing: [
                    {
                        date: '2018-12-31',
                        kind: '問合せ対応',
                        charge: '須磨和久',
                        question: 'どうやったら利用を開始できますか？',
                        answer: '下記のホームページを参考にしてください。https://google.com/'
                    },
                    {
                        date: '2018-12-31',
                        kind: '問合せ対応',
                        charge: '須磨和久',
                        question: 'どうやったら利用を開始できますか？',
                        answer: '下記のホームページを参考にしてください。https://google.com/'
                    }
                ]
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
