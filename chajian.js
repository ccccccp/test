window.cp={
    scrList:function(opt){
        var defaults={
            dom:opt.dom,
            lineHeight:opt.lineHeight||30,
            height:opt.height||200,
            delay:opt.delay||2000
        }
        // var defaults=extend(defaults,opt);
        var scrollBox=defaults.dom;
        if(!scrollBox){
            return;
        }
        var delay=defaults.delay;
        var myul=scrollBox.getElementsByTagName("ul")[0];
        scrollBox.appendChild(myul.cloneNode(true));
        var smallTimer;
        var lineHeight=defaults.lineHeight;
        var bigTimer=setTimeout(scrollBig,delay);//2秒之后向上滚动一个行高的距离
        function scrollBig(){

            smallTimer=setInterval(scrollSmall,10);
        }
        function scrollSmall(){
            scrollBox.scrollTop++;
            console.log(scrollBox.scrollTop);
            if(scrollBox.scrollTop%lineHeight==0){
                clearInterval(smallTimer);
                bigTimer=setTimeout(scrollBig,delay);
            }
            if(scrollBox.scrollTop==myul.offsetHeight){
                scrollBox.scrollTop=0;
            }
        }
    }
}