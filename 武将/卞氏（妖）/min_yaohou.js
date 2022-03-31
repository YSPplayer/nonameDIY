{

    audio:"ext:民间武将/audio:1",
    trigger:{
        global:"damageSource",
        //damageEnd
    },
    filter:function(event,player){
        //trigger.source：是触发该技能的伤害来源的玩家
        //event可能是触发该事件的牌啥东东
        //trigger.player为触发该技能的玩家
        //trigger应该是受伤的数值
        //如果没有伤害来源或者伤害来源不是主公或者伤害来源不是男或者伤害来源是自己，返回假
        return (event.source && event.source!=player && event.source.hasSex('male') && event.source.isZhu);
    },
    check:function(event,player){
       return true;
    },
    content:function(){
        "step 0"
        if(trigger.player && trigger.player.countCards('he')>0 && trigger.player!=player){
        player.chooseControl("获得受伤角色的一张牌","摸一张牌").ai=function(event,player){
            var target=trigge.player;
            var att=get.attitude(player,target);
            if(att<=0 && target.countCards('he')>0)return 0;//如果受伤者是敌人且牌数大于0
            return 1;
            }
         }
         else
         {
             player.draw();
             return false;//如果受伤者没卡或受伤者是自己，则不选择而直接抽卡
         }
         "step 1"
         if(result.control=="获得受伤角色的一张牌")player.gainPlayerCard(true,trigger.player,'he');
         if(result.control=="摸一张牌")  player.draw();
    },
    ai:{
        //看司马懿的，不知是否正确
        expose:0.2,
        target:function(card,player,target){
            if(get.attitude(target,player)<0) return [1,1];
        }
    }
}