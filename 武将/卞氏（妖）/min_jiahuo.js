{
    audio:"ext:民间武将/audio:2",
    enable:"phaseUse",
    usable:1,//出牌阶段限一次
    filterCard:function (card){
        return get.suit(card)=='spade'|| get.suit(card)=='club';//转化条件
    },
    viewAs:{
        name:"jiedao",
    },
    viewAsFilter:function(player){
        if(!player.countCards('hes',{suit:['spade','club']})) return false;//转化前提条件
    },
    position:"hes",
    prompt:"将一张♣或♠牌当借刀杀人使用",
    check:function(card){
        return 4-get.value(card);//AI选卡思路
    },
    ai:{
        //改的诸葛亮火攻
        basic:{
            order:5,
            value:[4,1],
            useful:1,
        },
        result:{
            //ai 发动思路
            target:function(player,target){
                if(!target.getEquip(1)) return 0;//对方玩家没有武器牌时不发动;
                if(player.countCards('h')<=1 || (player.countCards('e')<=1 && player.countCards('h')<=player.hp)) return 0;
                if(target.getEquip(1) && target.countCards('h')<=1) return -3;
                return -1.5;
            },                        
        },
    }

}