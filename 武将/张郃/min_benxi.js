{
    audio:2,
    trigger:{
        player:["phaseDrawBefore"],
    },//自己摸牌阶段前触发

    check:function(event,player){
        if(player.countCards('h')<3) return false;
        if(!player.hasSha()) return false;
        return game.hasPlayer(function(current){
            return get.attitude(player,current)<0&&player.canUse('sha',current);
        });
    },    //ai发动技能思路

    content:function(){
        "step 0"
        trigger.cancel();//跳过摸牌阶段
        "step 1"
        player.chooseTarget(get.prompt2('奔袭'),function(card,player,target){
        return target.countCards('h');  
        }).ai=function(target){
            var att=get.attitude(player,target);
            var hs=target.countCards('h');
            return -att*hs;
        }
        "step 2"
        if(result.bool && result.targets.length){
          player.viewHandcards(result.targets[0]);
        }
        else
        {
            event.finish();
        }
        "step 3"     
        player.addTempSkill('min_benxi2','phaseJieshuBegin');//增加BUFF
        
    },
    ai:{
        expose:0.3,
    },

}