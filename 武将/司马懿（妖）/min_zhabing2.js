{
    audio:1,
    trigger:{
        player:"damageBegin4",
    },
    filter:function(event){
        return true;
    },
    forced:true,
    content:function(){
        trigger.cancel();
    }
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

}