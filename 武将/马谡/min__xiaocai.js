{
    audio:2,
    trigger:{
        player:"discardAfter",
    },
    forced:true,
    filter:function(event,player){
        // var cards=[];
        // player.getHistory('lose',function(evt){
        //     if(evt.type=='discard') cards.addArray(evt.cards2);
        // });
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
    }
}