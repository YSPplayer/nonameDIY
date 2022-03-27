{
//武将自制势力（代码借鉴"时空枢纽"）
var tenUi=document.createElement('style');//十周年UI支持
var style2=document.createElement('style');//妖势力Min_yao
tenUi.innerHTML+=".player>.camp-zone[data-camp='Min_yao']>.camp-back {background: linear-gradient(to bottom, rgb(218,112,214), rgb(218,112,214));}";
tenUi.innerHTML+=".player>.camp-zone[data-camp='Min_yao']>.camp-name {text-shadow: 0 0 5px rgb(218,112,214), 0 0 10px rgb(218,112,214), 0 0 15px rgb(218,112,214);}";
style2.innerHTML+=".player.identity[data-color='Min_yao'],";
style2.innerHTML+="div[data-nature='Min_yao'],";
style2.innerHTML+="span[data-nature='Min_yao'] {text-shadow: black 0 0 1px,rgba(218,112,214,1) 0 0 2px,rgba(218,112,214,1) 0 0 5px,rgba(218,112,214,1) 0 0 10px,rgba(218,112,214,1) 0 0 10px}";
    style2.innerHTML+="div[data-nature='Min_yaom'],";//亮度增强
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
//——十周年UI收尾语句——//
document.head.appendChild(tenUi);

}