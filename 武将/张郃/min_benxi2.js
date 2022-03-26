{
    mod:{
        targetInRange:function (card,player,target){
                return true;
        },
    },//使用杀没距离限制
    audio:2,
    trigger:{
        source:"damageBegin1",
    },
    filter:function(event){
        return event.card&&(event.card.name=='sha')&&event.notLink();
    },
    forced:true,
    content:function(){
        trigger.num++;
    },
    ai:{
        damageBonus:true, //使用杀伤害+1
    },
}