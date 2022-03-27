{
    audio:2,
    trigger:{
        player:"phaseDrawBegin2",
    },
    filter:function(event,player){
        return !event.numFixed&&player.hp<player.maxHp;//没有放弃摸牌且hp小于最大值
    },
    forced:true,
    content:function(){
        trigger.num+=(player.getDamagedHp());
    },

}