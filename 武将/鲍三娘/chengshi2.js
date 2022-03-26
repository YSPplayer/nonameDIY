{
    audio:2,
    audioname:["re_baosanniang"],
    enable:"chooseToUse",//挑选卡牌以使用，当做杀使用
    filterCard:function(card){
        return get.suit(card)=='heart';//判断某种花色牌的条件  
    },
    viewAs:{
        name:"sha",
    },  //要转化的牌的名称、
    viewAsFilter:function(player){
        if(!player.countCards('hs',{suit:'heart'})) return false;
        return true;
    },//要转换牌的条件，红桃牌
    position:"hs",//转换的牌的位置
    prompt:"将一张红桃手牌当杀使用",//技能描述
    //AI选卡思路
    check:function(player,card){
      if(player.getCardUsable('sha')>1||player.countCards('he','zhuge')>0)//如果玩家的杀使用数大于1且手卡或装备区域有ak，让ai选择价值小于10的牌
      {
        return 10-get.value(card);
      }
      else
      {
      return 4-get.value(card);//让AI选择价值小于4的卡牌 
      }
    },
    ai:{
        threaten:0.5,//技能嘲讽值
        order:function(){//设置技能使用的优先级
            return get.order({name:'sha'})+0.1;//优先级=杀的优先级+0.1
        }
        respondShan:true,//告诉AI在手牌中没杀的情况下也可能会出杀
        expose:0.5, //发动技能时身份暴露度
        skillTagFilter:function(player){//视为技专属，ai什么时候可以发动视为技
            if(!player.countCards('hs',{suit:'heart'})) return false;//ai手中没有红桃牌时不发动
        }
        result:{
            target:function(player,target,card,isLink){
                var eff=function(){
                    if(!isLink&&player.hasSkill('jiu')){
                        if(!target.hasSkillTag('filterDamage',null,{
                            player:player,
                            card:card,
                            jiu:true,
                        })){
                            if(get.attitude(player,target)>0){
                                return -7;
                            }
                            else{
                                return -4;
                            }
                        }
                        return -0.5;
                    }
                    return -1.5;
                }();
                if(!isLink&&target.mayHaveShan()&&!player.hasSkillTag('directHit_ai',true,{
                    target:target,
                    card:card,
                },true)) return eff/1.2;
                return eff;
            },
        }, //这个是“龙胆”的选择目标方式，直接牛过来
        tag:{
            respond:1,
            respondShan:1,
            damage:function(card){
                if(card.nature=='poison') return;
                return 1;
            },
            natureDamage:function(card){
                if(card.nature) return 1;
            },
            fireDamage:function(card,nature){
                if(card.nature=='fire') return 1;
            },
            thunderDamage:function(card,nature){
                if(card.nature=='thunder') return 1;
            },
            poisonDamage:function(card,nature){
                if(card.nature=='poison') return 1;
            },
        }, //技能标签
        sub:true,
    },

    }

}