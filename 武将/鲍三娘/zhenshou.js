{
    audio:2,
    audioname:["re_baosanniang"],
    trigger:{
        player:"phaseBefore",//自己玩家的回合开始阶段前发动
    },
    content:function(){
        "step 0"
        player.draw(3);
        "step 1"
        //跳过判定阶段，摸牌阶段，出牌阶段，弃牌阶段
        player.skip('phaseJudge');
        player.skip('phaseDraw');
        player.skip('phaseUse');
        player.skip('phaseDiscard');

    }
    check:function(event,player){
        return (player.hp<2 && player.countCards('h','tao')<1) || player.countCards('h')<1 || (player.countCards('j','lebusishu')>0
           && player.countCards('h','wuxiekeji')<1);//当ai 血量小于2且手里没桃 或者手牌数小于1 或者判定区域有乐不思蜀且手里没无邪时使用这个技能
    }//告诉ai是否发动这个技能
    ai:{
        order:3,
        threaten:0.8,

    }

}