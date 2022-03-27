{
    audio:2,
    trigger:{
        player:["useCardAfter","respondAfter"],
    },//使用或者打出了一张手牌之后
    filter:function(event,player){
        return player.countCards('h')<=player.getAttackRange() && player.isPhaseUsing();//手牌数小于或等于自己的攻击范围且自己在当前的出牌阶段
    },
    check:function(event,player){
        return game.hasPlayer(function(current){
            return get.attitude(player,current)<0&& current.countCards('he')
                    && player.inRange(current);//如果目标玩家在自己的攻击范围内且有牌且是敌人就发动
        });
    },//ai 选择发动技能的条件
    content:function(){
        "step0"
        player.chooseTarget(get.prompt2('汗颜'),function(card,player,target){
          return target!=player && player.inRange(target);
        }).ai=function(target){
            var att=get.attitude(player,target);
            return -att;
        }
        "step 1"
        if(result.bool && result.targets[0].countCards('he')){
            result.targets[0].chooseToDiscard('he',1,true).set('ai',function(card){
                if(card.name=='tao') return -10;
                if(card.name=='jiu'&&_status.event.player.hp==1) return -10;
                return get.unuseful(card)+2.5*(5-get.owner(card).hp);
            });
        }
   },  
   ai:{
    threaten:1.2,//技能嘲讽值
    expose:0.4,//发动技能时身份暴露度
   },
}