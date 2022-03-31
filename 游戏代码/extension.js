game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"民间武将",content:function(config,pack){

     //武将评级，参考"时空枢纽"//
     if(lib.rank){
        //默认不评级为A+，自下分别为 A,S,SS,SSS
         lib.rank.rarity.junk.addArray(['min_zhanghe']);
         lib.rank.rarity.rare.addArray(['min_simayi']);
         lib.rank.rarity.epic.addArray([]);
         lib.rank.rarity.legend.addArray([]);
    }
    //武将阵亡配音：参考阳光包
    lib.skill._minzhenwangpeiyin={
        trigger:{player:'dieBegin',},
        priority:2,
        forced:true,
        unique:true,
        popup:false,
        content:function(){                 
            game.playAudio('..','extension','民间武将/audio',trigger.player.name);                                                                          
        }
    }
    //自定义势力写法参考"时空枢纽"  
    var tenUi=document.createElement('style');//十周年UI支持
    var style2=document.createElement('style');//妖势力Min_yao
    //自定义势力//
    //妖//  218,112,214
    style2.innerHTML+=".player.identity[data-color='Min_yao'],";
    style2.innerHTML+="div[data-nature='Min_yao'],";
    style2.innerHTML+="span[data-nature='Min_yao'] {text-shadow: black 0 0 1px,rgba(218,112,214,1) 0 0 2px,rgba(218,112,214,1) 0 0 5px,rgba(218,112,214,1) 0 0 10px,rgba(218,112,214,1) 0 0 10px}";
    style2.innerHTML+="div[data-nature='Min_yaom'],";
    style2.innerHTML+="span[data-nature='Min_yaom'] {text-shadow: black 0 0 1px,rgba(218,112,214,1) 0 0 2px,rgba(218,112,214,1) 0 0 5px,rgba(218,112,214,1) 0 0 5px,rgba(218,112,214,1) 0 0 5px,black 0 0 1px;}";
    style2.innerHTML+="div[data-nature='Min_yaomm'],";
    style2.innerHTML+="span[data-nature='Min_yaomm'] {text-shadow: black 0 0 1px,rgba(218,112,214,1) 0 0 2px,rgba(218,112,214,1) 0 0 2px,rgba(218,112,214,1) 0 0 2px,rgba(218,112,214,1) 0 0 2px,black 0 0 1px;}";
    document.head.appendChild(style2);
    lib.group.add('Min_yao');
    lib.translate.Min_yao='妖';
    lib.translate.Min_yao2='妖';
    lib.groupnature.Min_yao='Min_yao';
    tenUi.innerHTML+=".player>.camp-wrap[data-camp='Min_yao']>.camp-back {background: linear-gradient(to bottom, rgb(218,112,214), rgb(218,112,214));}";
    tenUi.innerHTML+=".player>.camp-wrap[data-camp='Min_yao']>.camp-name {text-shadow: 0 0 5px rgb(218,112,214), 0 0 10px rgb(218,112,214), 0 0 15px rgb(218,112,214);}";
//十周年结尾
document.head.appendChild(tenUi);        
},

precontent:function(minjianwujiang){
    //插入角色分类(参考时空枢纽)
    if(minjianwujiang.enable){
    game.import('character',function(){	
        var minjianwujiang={
            name:'minjianwujiang',
            connect:true,
           //角色分栏
           characterSort:{
                minjianwujiang:{
                "min_shu":["min_baosanniang","min_masu"],
                "min_wei":["min_zhanghe"],
                "min_yao":["min_simayi"],
                },
            },	
            //武将
            character:{
                "min_baosanniang":["female","shu",3,["chengshi","zhenshou"],["die_audio"]],
                "min_zhanghe":["male","wei",4,["min_benxi"],["die_audio"]],
                "min_masu":["male","shu",4,["min_hanyan","min_xiaocai","min_caoyong"],["die_audio"]],
                "min_simayi":["male","Min_yao",3,["min_zhabing","min_guimo"],["die_audio"]],
                
            },

            //武将文本描述
            characterIntro:{
                //<br>表示换行
                "min_baosanniang":"鲍三娘，鲍家庄鲍员外的小女儿。后来与关索成亲，关羽自传授其武艺，因此也造就了鲍三娘的文武双全。荆州失守之后鲍三娘就跟随关索一同投奔蜀汉，并随诸葛亮征讨南蛮。平定了南蛮之后，夫妻二人就此一直替诸葛亮镇守着南中，他们也的确留下了许多脍炙人口的行侠仗义故事，在民间广为流传。",
                "min_zhanghe":"张郃，字儁乂，河间鄚人。三国时期魏国名将。官渡之战时，本为袁绍部将的张郃投降了曹操，并在曹操帐下多立功勋，于曹魏建立后加封为征西车骑将军。诸葛亮六出祁山之间，张郃多次抵御蜀军的进攻，于公元231年在木门道被诸葛亮设伏射死。后谥曰壮侯。为曹魏“五子良将”之一。",
                "min_masu":"马谡，字幼常，襄阳宜城人，三国时期蜀汉大臣，侍中马良之弟。初以荆州从事跟随刘备取蜀入川，曾任绵竹、成都令、越嶲太守。诸葛亮北伐时因作战失误而失守街亭，因而被诸葛亮所斩。",
                "min_simayi":"三国时期魏国杰出的政治家、军事家，西晋王朝的奠基人。曾任职过曹魏的大都督，大将军，太尉，太傅。是辅佐了魏国四代的托孤辅政之重臣，后期成为掌控魏国朝政的权臣。善谋奇策，多次征伐有功，其中最显著的功绩是两次率大军成功对抗诸葛亮北伐和远征平定辽东。对屯田、水利等农耕经济发展有重要贡献。73岁去世，辞郡公和殊礼，葬于首阳山。谥号“宣文”；次子司马昭封晋王后，追封司马懿为宣王；司马炎称帝后，追尊司马懿为宣皇帝。",
            },
            //武将技能
                 skill:{
            chengshi:{
                shaRelated:true,
                forced:true,
                audio:"ext:民间武将/audio:2",
                trigger:{
                    global:"shaMiss",
                },
                filter:function(event,player){
        if(event.player==player)//如果被抵消的玩家是自己
        {
         return _status.currentPhase==player;//返回当前自己的回合
        }
        if(event.player!=player && event.targets.contains(player) )//如果被抵消玩家不是自己且抵消的对象包含玩家
        {
            return _status.currentPhase!=player;//返回对方的回合
        }

    },
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
            },
            "chengshi2":{
                audio:"ext:民间武将/audio:2",
                enable:"chooseToUse",
                filterCard:function(card){
        return get.suit(card)=='heart';//判断某种花色牌的条件  
    },
                viewAs:{
                    name:"sha",
                },
                viewAsFilter:function(player){
        if(!player.countCards('hs',{suit:'heart'})) return false;
        return true;
    },
                position:"hs",
                prompt:"将一张红桃手牌当杀使用",
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
                    threaten:0.5,
                    expose:0.5,
                    order:function(){//设置技能使用的优先级
            return get.order({name:'sha'})+0.1;//优先级=杀的优先级+0.1
        },
                    skillTagFilter:function(player){//视为技专属，ai什么时候可以发动视为技
            if(!player.countCards('hs',{suit:'heart'})) return false;//ai手中没有红桃牌时不发动
        },
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
                    },
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
                    },
                    sub:true,
                    yingbian:function(card,player,targets,viewer){
            if(get.attitude(viewer,player)<=0) return 0;
            var base=0,hit=false;
            if(get.cardtag(card,'yingbian_hit')){
                hit=true;
                if(targets.filter(function(target){
                    return target.hasShan()&&get.attitude(viewer,target)<0&&get.damageEffect(target,player,viewer,get.nature(card))>0;
                })) base+=5;
            }
            if(get.cardtag(card,'yingbian_all')){
                if(game.hasPlayer(function(current){
                    return !targets.contains(current)&&lib.filter.targetEnabled2(card,player,current)&&get.effect(current,card,player,player)>0;
                })) base+=5;
            }
            if(get.cardtag(card,'yingbian_damage')){
                if(targets.filter(function(target){
                    return get.attitude(player,target)<0&&(hit||!target.mayHaveShan()||player.hasSkillTag('directHit_ai',true,{
                    target:target,
                    card:card,
                    },true))&&!target.hasSkillTag('filterDamage',null,{
                        player:player,
                        card:card,
                        jiu:true,
                    })
                })) base+=5;
            }
            return base;
        },
                    canLink:function(player,target,card){
            if(!target.isLinked()&&!player.hasSkill('wutiesuolian_skill')) return false;
            if(target.mayHaveShan()&&!player.hasSkillTag('directHit_ai',true,{
                target:target,
                card:card,
            },true)) return false;
            if(player.hasSkill('jueqing')||player.hasSkill('gangzhi')||target.hasSkill('gangzhi')) return false;
            return true;
        },
                    basic:{
                        useful:[5,3,1],
                        value:[5,3,1],
                    },
                },
            },
            "chengshi3":{
                audio:"ext:民间武将/audio:2",
                enable:"chooseToUse",
                filterCard:function(card){
        return get.suit(card)=='club';//判断某种花色牌的条件  
    },
                viewAs:{
                    name:"shan",
                },
                viewAsFilter:function(player){
        if(!player.countCards('hs',{suit:'club'})) return false;
        return true;
    },
                check:function(){return 1},
                position:"hs",
                prompt:"将一张梅花手牌当闪使用",
                ai:{
                    order:4,
                    respondShan:true,
                    skillTagFilter:function(player){
            if(!player.countCards('hs',{suit:'club'})) return false;
        },
                    basic:{
                        useful:[7,5.1,2],
                        value:[7,5.1,2],
                    },
                    result:{
                        player:1,
                    },
                    sub:true,
                },
            },
            zhenshou:{
                audio:"ext:民间武将/audio:2",
                trigger:{
                    player:"phaseBefore",
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

    },
                check:function(event,player){
        return (player.hp<2 && player.countCards('h','tao')<1) || player.countCards('h')<1 || (player.countCards('j','lebusishu')>0
           && player.countCards('h','wuxiekeji')<1);
    },
                ai:{
                    order:3,
                    threaten:0.8,
                },
            },
            "min_benxi":{
                audio:"ext:民间武将/audio:2",
                trigger:{
                    player:["phaseDrawBefore"],
                },
                check:function(event,player){
        if(player.countCards('h')<3) return false;
        if(!player.hasSha()) return false;
        return game.hasPlayer(function(current){
            return get.attitude(player,current)<0&&player.canUse('sha',current);
        });
    },
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
            },
            "min_benxi2":{
                mod:{
                    targetInRange:function (card,player,target){
                return true;
        },
                },
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
                    damageBonus:true,
                },
            },
            "min_hanyan":{
                audio:"ext:民间武将/audio:2",
                trigger:{
                    player:["useCardAfter","respondAfter"],
                },
                filter:function(event,player){
        return player.countCards('h')<=player.getAttackRange()&& player.isPhaseUsing();//手牌数小于或等于自己的攻击范围
    },
                check:function(event,player){
        return game.hasPlayer(function(current){
            return get.attitude(player,current)<0&& current.countCards('he')
                    && player.inRange(current);//如果目标玩家在自己的攻击范围内且有牌且是敌人就发动
        });
    },
                content:function(){
        "step 0"
        player.chooseTarget(get.prompt2('汗颜'),function(card,player,target){
        return target!=player && player.inRange(target) && target.countCards('he');
        }).ai=function(target){
            var att=get.attitude(player,target);
            return -att;
        }
        "step 1"
        if(result.bool && result.targets.length && result.targets[0].countCards('he')){
           result.targets[0].chooseToDiscard('he',1,true).set('ai',function(card){
                if(card.name=='tao') return -10;
                if(card.name=='jiu'&&_status.event.player.hp==1) return -10;
                return get.unuseful(card)+2.5*(5-get.owner(card).hp);
            });
        }
        else
        {
            event.finish();
        }
   },
                ai:{
                    threaten:1.2,
                    expose:0.4,
                },
            },
            "min_caoyong":{
                mod:{
                    cardEnabled:function(card){
            if(card.name=='wuxie') return false;
        },
                },
            },
            "min_xiaocai":{
                audio:"ext:民间武将/audio:2",
                trigger:{
                    player:"discardAfter",
                },
                forced:true,
                filter:function(event,player){
         var cards= event.cards;
        if(cards.length<=1) return false;
        var color=get.suit(cards[0],player);//判断花色
      for(var i=1;i<cards.length;i++){
        if(get.suit(cards[i],player)!=color) return false;
     }
        return cards.length>1;
    },
                content:function(){
      player.addTempSkill('min_xiaocai2','phaseEnd');
    },
            },
            "min_xiaocai2":{
                audio:"ext:民间武将:1",
                trigger:{
                    global:"phaseJieshuBegin",
                },
                check:function(event,player){
        return true;//ai默认发动
    },
                content:function(){
        player.draw();//结束阶段摸牌
    },
            },
            "min_guimo":{
                audio:"ext:民间武将/audio:2",
                trigger:{
                    player:"phaseDrawBegin2",
                },
                filter:function(event,player){
        return !event.numFixed&&player.hp<player.maxHp;//没有放弃摸牌且hp小于最大值
    },
                forced:true,
                content:function(){
        trigger.num+=(player.getDamagedHp());
    },
            },
            "min_zhabing":{
                audio:"ext:民间武将/audio:1",
                trigger:{
                    player:"phaseJieshuBegin",
                },
                check:function(event,player){
        if(player.hp<2 && player.countCards('h','tao')<1)return false;
        return true;
    },
                content:function(){
        "step 0"
        player.loseHp(1);
        "step 1"
        player.addTempSkill('min_zhabing2',{player:'phaseBefore'});//直至下个回合开始时适用
    },
                ai:{
                    threaten:0.2,
                    order:7,
                },
            },
            "min_zhabing2":{
                audio:"ext:民间武将/audio:1",
                trigger:{
                    player:"damageBegin4",
                },
                filter:function(event){
        return true;
    },
                forced:true,
                content:function(){
        trigger.cancel();
    },
                ai:{
                    nofire:true,
                    nodamage:true,
                    effect:{
                        target:function(card,player,target,current){
             if(get.tag(card,'damage'))
                return [0,0];
            },
                    },
                },
            },
    },
    translate:{
         ///角色分栏
         "min_shu":"<b>·<font color=#FF0000>民间·蜀</font></b>",
         "min_wei":"<b>·<font color=#4169E1>民间·魏</font></b>",
         "min_yao":"<b>·<font color=#DA70D6>民间·妖</font></b>",

        //武将
        "min_baosanniang":"★鲍三娘",
        "min_zhanghe":"★张郃",
        "min_masu":"★马谡",
        "min_simayi":"★司马懿",
        //技能
        chengshi:"承师",
        "chengshi_info":"出牌阶段，若你使用的【杀】被【闪】抵消后，你的红心手牌可以当杀使用，直到回合结束。回合外，任意角色对你使用【杀】，你用【闪】抵消后，你的梅花手牌可以当【闪】使用，直到该角色回合结束。",
        "chengshi2":"承师",
        "chengshi2_info":"",
        "chengshi3":"承师",
        "chengshi3_info":"",
        zhenshou:"镇守",
        "zhenshou_info":"回合开始阶段，你可摸3张牌，并跳过判定阶段，摸牌阶段，出牌阶段和弃牌阶段，直接回合结束。",
        "min_benxi":"奔袭",
        "min_benxi_info":"你可以选择跳过摸牌阶段，并观看一次任意一名角色的手牌；若如此做，该回合的出牌阶段，你使用【杀】无距离且造成的伤害+1。",
        "min_benxi2":"奔袭",
        "min_benxi2_info":"",
        "min_hanyan":"汗颜",
        "min_hanyan_info":"出牌阶段，当你的手牌数小于或等于你的攻击范围时，你每使用或打出一张手牌便可指定你的攻击范围内的一名角色弃一张牌。",
        "min_caoyong":"草用",
        "min_caoyong_info":"锁定技，你不能使用【无懈可击】。",
        "min_xiaocai":"小才",
        "min_xiaocai_info":"当你的弃牌数大于等于2且花色相同时，回合结束阶段可以摸一张牌。",
        "min_xiaocai2":"小才",
        "min_xiaocai2_info":"",
        "min_guimo":"鬼谋",
        "min_guimo_info":"摸牌阶段，摸'X+2'张牌，X为当前损失的体力值。",
        "min_zhabing":"诈病",
        "min_zhabing_info":"回合结束阶段，自减一点体力，至自己下一回合开始前不受任何伤害。",
        "min_zhabing2":"诈病",
        "min_zhabing2_info":"",
    }
        }
        for(var i in minjianwujiang.character){
            minjianwujiang.character[i][4].push('ext:民间武将/image/character/'+i+'.jpg')
         }
         return minjianwujiang;   

    });
    //参考阳光包
    lib.config.all.characters.push('minjianwujiang');
    lib.translate['minjianwujiang_character_config']="民间武将";
    }

    
},

help:{},config:{},package:{
    character:{
    },
    card:{
        card:{
        },
        translate:{
        },
        list:[],
    },
    skill:{
    },
    intro:"",
    author:"神数不神",
    diskURL:"",
    forumURL:"",
    version:"1.0",
},files:{"character":[],"card":[],"skill":[]}}})