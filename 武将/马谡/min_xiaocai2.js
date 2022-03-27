{
    trigger:{
        gloabl:"phaseJieshuBegin"
    },
    check:function(event,player){
        return true;//ai默认发动
    },
    content:function(){
        player.draw();//结束阶段摸牌
    }
}