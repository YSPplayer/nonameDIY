{
    shaRelated:true,//和杀相关的技能
    audio:2,//s这个是和武将配音相关的，2默认是从文件夹中读取武将的配音
    trigger:{
        global:"shaMiss",
    },//全局玩家的杀被抵消时触发
    filter:function(event,player){
        if(event.player==player)//如果被抵消的玩家是自己
        {
         return _status.currentPhase==player;//返回当前自己的回合
        }
        if(event.player!=player && event.targets.contains(player) )//如果被抵消玩家不是自己且抵消的对象包含玩家
        {
            return _status.currentPhase!=player;//返回对方的回合
        }

    },//检查当前是否是玩家的回合
    content:function(event,player){
        if(event.player==player)
        {
          player.addTempSkill('chengshi2'); //设置直到结束阶段的技能
        }
        else
        {
          player.addTempSkill('chengshi3'); //设置直到结束阶段的技能
       }
    },

}