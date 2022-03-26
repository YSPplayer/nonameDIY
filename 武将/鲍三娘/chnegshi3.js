{
    audio:2,
    audioname:["re_baosanniang"],
    enable:"chooseToUse",//挑选卡牌以使用，当做杀使用
    filterCard:function(card){
        return get.suit(card)=='club';//判断某种花色牌的条件  
    },
    viewAs:{
        name:"shan",
    },  //要转化的牌的名称、
    viewAsFilter:function(player){
        if(!player.countCards('hs',{suit:'club'})) return false;
        return true;
    },//要转换牌的条件，梅花牌
    prompt:"将一张梅花手牌当闪使用",//技能描述
    check:function(){return 1},//ai筛选条件，1
    position:"hs",//选择卡片的位置为手卡
    ai:{
        respondShan:true,//没闪也会出闪
        skillTagFilter:function(player){
            if(!player.countCards('hs',{suit:'club'})) return false;
        }, //ai什么时候用这个技能
        order:4,//使用优先级
        result:{
            player:1,
        },//选择方式
        sub:true,
    }

}