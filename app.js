new Vue({
    el:'#app',
    data: {
        nama: 'Charles Siagian',
        about_us: 'Business Management and Marketing',
        website : 'https://www.mokapos.com/',
        websiteTag: '<a href="https://www.qiscus.com/">kuro'
    },
    methods:{
        openInNewTab: function(url) {
            var win = window.open(url, '_blank');
            win.focus()
        }
    }

})