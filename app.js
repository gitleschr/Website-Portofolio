new Vue({
    el:'#app',
    data: {
        nama: 'Charles Siagian',
        about_us: 'I am looking for a job',
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