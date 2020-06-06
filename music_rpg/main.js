let mapArray,ctx,currentImgMainX,currentImgMainY;
let imgMountain,imgMain;

$(document).ready(function(){
   mapArray=[0,0,0,1,0,0,0,4,0,0,2,0,0,0,6,0,0,7,8,0,0,5,0,0,0,9,0,0,10,0,0,0,3,0,0,11];  //遊戲地圖，0:可走、1:障礙、2:終點、3:敵人
   ctx = $("#myCanvas")[0].getContext("2d");  //Canvas是畫布，用平面(2d)的方式來作畫

   imgMain = new Image();    //把主角擺上去
   imgMain.src = "music_rpg/images/nots1.png";
   currentImgMainX = 0;      //設定主角的x,y座標
   currentImgMainY = 0;
   imgMain.onload = function(){
       ctx.drawImage(imgMain,40,30,150,150,currentImgMainX,currentImgMainY,150,150);
   };

   imgMountain = new Image();  //把障礙物擺上去
   imgMountain.src = "music_rpg/images/nots2.png";
   imgEnd = new Image();  //把障礙物擺上去
   imgEnd.src = "music_rpg/images/piano.png";
   imgMountain.onload = function(){
            for(let x in mapArray)
            {
                if(mapArray[x]==1)    //若位置對應到1:障礙的話，就把山放上去
                {
                    ctx.drawImage(imgMountain,70,35,90,160,x%6*150,Math.floor(x/6)*150,150,150);
                }
                else if(mapArray[x]==2)  //若位置對應到3:敵人的話，就把敵人放上去
                {
                    ctx.drawImage(imgMountain,220,50,160,130,x%6*150,Math.floor(x/6)*150,150,150);
                }
                else if(mapArray[x]==3)
                {
                    ctx.drawImage(imgMountain,425,40,150,150,x%6*150,Math.floor(x/6)*150,150,150);
                }
                else if(mapArray[x]==4)
                {
                    ctx.drawImage(imgMountain,630,40,160,160,x%6*150,Math.floor(x/6)*150,150,150);
                }
                else if(mapArray[x]==5)
                {
                    ctx.drawImage(imgMountain,800,20,300,140,x%6*150,Math.floor(x/6)*150,150,150);
                }
                else if(mapArray[x]==6)
                {
                    ctx.drawImage(imgMountain,40,200,140,180,x%6*150,Math.floor(x/6)*150,150,150);
                }
                else if(mapArray[x]==7)
                {
                    ctx.drawImage(imgMountain,250,200,120,160,x%6*150,Math.floor(x/6)*150,150,150);
                }
                else if(mapArray[x]==8)
                {
                    ctx.drawImage(imgMountain,435,200,120,160,x%6*150,Math.floor(x/6)*150,150,150);
                }
                else if(mapArray[x]==9)
                {
                    ctx.drawImage(imgMountain,660,210,130,160,x%6*150,Math.floor(x/6)*150,150,150);
                }
                else if(mapArray[x]==10)
                {
                    ctx.drawImage(imgMountain,900,190,120,170,x%6*150,Math.floor(x/6)*150,150,150);
                }
                else if(mapArray[x]==11)
                {
                    ctx.drawImage(imgEnd,2,4,125,130,x%6*150,Math.floor(x/6)*150,150,150);
                }
            }
       };
});

//當有人按下鍵盤時要做的事情
$(document).keydown(function(event){
    let targetImgMainX,targetImgMainY,targetBlock;  //主角即將要移動過去的目標位置、主角即將要移動過去的那一格編號、依據主角朝什麼方向而決定的圖片
    event.preventDefault();  //可以避免點擊鍵盤出現瀏覽器的其他行為，例:捲動、放大、換頁
    //console.log(event.code);

    //依據使用者按鍵指示，對應計算目標位置，主角新的方向圖片
    switch(event.originalEvent.code){        //人物上下左右變動時的位置
        case "ArrowLeft":
            targetImgMainX = currentImgMainX-150;
            targetImgMainY = currentImgMainY; 
            break;
        case "ArrowUp":
            targetImgMainX = currentImgMainX;
            targetImgMainY = currentImgMainY-150;
            break;
        case "ArrowRight":
            targetImgMainX = currentImgMainX+150;
            targetImgMainY = currentImgMainY;
            break;
        case "ArrowDown":
            targetImgMainX = currentImgMainX;
            targetImgMainY = currentImgMainY+150;
            break; 
        default:    //其他按鍵不回應
            return;
    }

    //在邊界內
    if(targetImgMainX <=750 && targetImgMainX >=0 && targetImgMainY <=750 && targetImgMainY >=0)
    {
        targetBlock = targetImgMainX/150 + targetImgMainY/150*6;
    }else{   //超出邊界
        targetBlock = -1;
    }

    ctx.clearRect(currentImgMainX,currentImgMainY,150,150);   //清除主角原本所在的位置
    if(targetBlock == -1 || mapArray[targetBlock]== 1 || mapArray[targetBlock] ==2 || mapArray[targetBlock]==3 || mapArray[targetBlock]==4 || mapArray[targetBlock]==5 || mapArray[targetBlock]==6 || mapArray[targetBlock]==7 || mapArray[targetBlock]==8 || mapArray[targetBlock]==9 || mapArray[targetBlock]==10 || mapArray[targetBlock]==11){  //所有異常(出界、遇到敵人、遇到障礙物都不動)
    }else{   //若遇到正常情況就設定新位置
        $("#talkBox").empty();
        currentImgMainX = targetImgMainX;
        currentImgMainY = targetImgMainY;
    }
    ctx.drawImage(imgMain,40,30,150,150,currentImgMainX,currentImgMainY,150,150);  //在新的位置上畫上主角
    
    //用文字對應顯示狀態
    switch(mapArray[targetBlock]){
        case undefined:
            $("#talkBox").text("這個音域超過我能負擔的範圍了");
            break;
        case 1:
            $("#talkBox").text("你好~我是高音譜記號，我代表的是高音階的部分，每一種譜號(共三種)表示了接下來的音符所在的位置代表了什麼音高。如果要回家的話要往下走喔!");
            break;
        case 2:
            $("#talkBox").text("小妹妹你好，我是四分音符，我的音長是全音符的四分之一，即4/4拍中的一拍。如果要回家的話要往下走喔!");
            break;
        case 3:
            $("#talkBox").text("Hello~我是八分音符，我的音長是全音符的八分之一，即4/4拍中的半拍，3/8或6/8拍中的一拍。這麼晚了你應該回家吧!");
            break;
        case 4:
            $("#talkBox").text("嗨，我是低音譜號，我代表的是低音階的部分，每一種譜號(共三種)表示了接下來的音符所在的位置代表了什麼音高。你的媽媽叫你趕快回家吃飯喔~");
            break;
        case 5:
            $("#talkBox").text("哈囉~我是還原記號，又稱本位記號，是在樂譜中，放在音符前面的變音記號，被還原的音符稱為還原音或本位音。你是新搬來的嗎?都沒有看過你耶");
            break;
        case 6:
            $("#talkBox").text("Hi~我們是八分音符的雙胞胎，當兩個帶有符尾的八分音符連在一起，可以用符槓代替符尾，把彼此連在一起。要回家的話可以試試看別條路喔~");
            break;
        case 7:
            $("#talkBox").text("你好，我們是十六分音符的雙胞胎，當兩個帶有符尾的十六分音符連在一起，可以用符槓代替符尾，把彼此連在一起，我的音長是全音符的十六分之一，即4/4拍中的四分之一拍，3/8或6/8拍中的半拍。剛剛你有沒有遇到另一對雙胞胎啊?");
            break;
        case 8:
            $("#talkBox").text("嗨嗨嗨，我是二分音符，我的音長是全音符的二分之一，即4/4拍中的兩拍。如果要回家的話要往右走喔!");
            break;
        case 9:
            $("#talkBox").text("Hi~我是升記號，又稱升音符，是在樂譜中，放在音符前面的變音記號，代表這個音符的音高要比標定的高半音，讀作「升某音」。你一定有看到我的兄弟吧~");
            break;
        case 10:
            $("#talkBox").text("加油~你快回到家了喔~我是降音符，又稱降記號，是在五線譜樂譜中，放在音符前面的變音記號，代表這個音符的音高要比標定的低半音，讀作「降某音」。");
            break;
        case 11:
            $("#talkBox").text("到家了~謝謝你的協助");
            break;
    }
});