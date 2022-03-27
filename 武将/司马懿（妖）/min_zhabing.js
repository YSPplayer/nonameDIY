{
    audio:1,
    trigger:{
        player:"phaseJieshuBegin",
    },
    check:function(event,player){
        if(player.hp<2 && player.countCards('h','tao')<1)return false;
        return true;
    },    //ai发动技能
    content:function(){
        "step 0"
        player.loseHp(1);
        "step 1"
        player.addTempSkill('min_zhabing2',{player:'phaseBefore'});//直至下个回合开始时适用
    },
    ai:{
        threaten:0.9,//技能嘲讽值
        order:7,
    }
}