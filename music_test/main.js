$(document).ready(function(){
    let currentQuiz = null;                    //建立currentQuiz，儲存目前作答到第幾題
    let count = 0;                             //計算答對的題數
    $("#startButton").click(function(){
        if(currentQuiz == null){               //如果還沒有作答就從這裡開始
            currentQuiz = 0;                   //假設目前作答到第0題
            $("#question").text(questions[0].question); //顯示題目
            $("#options").empty();                      //清空選項區域
            
            for (let x = 0;x<questions[0].answers.length;x++){    //加入選項
                $("#options").append(
                    "<input name='options'  type='radio' value=" + x + 
                    "<label>" + questions[0].answers[x][0] + "</label><br><br>"
                );
            }   
            $("#startButton").attr("value","Next");  //將文字按鈕換成Next或下一題
            currentQuiz = currentQuiz + 1;
        }else{       //如果已經開始作答就從這裡開始
            $.each(  //網頁中每一個radio都來看一看，巡訪每個選項是否被選取
                $(":radio"),function(i,val){  //i表示index，val表示那一項的值
                    if(val.checked){          //如果這個選項被選取
                        if(currentQuiz == questions.length)
                        {
                            if(questions[currentQuiz-1].answers[i][1] == countTotal[currentQuiz-1])
                            {
                                count = count + 1; 
                            }   
                            $("#question").text("");
                            $("#options").empty();
                            if(count >=0 && count <=3)
                            {
                                $("#options").text("完成了~共"+ count +"分，要加油囉");
                            }
                            else if(count >=7 && count <=10)
                            {
                                $("#options").text("完成了~共"+ count +"分，你是音樂小達人");
                            }
                            else
                            {
                                $("#options").text("完成了~共"+ count +"分，不錯!不錯!");
                            }
                            
                            $("#startButton").attr("value","Restart"); 
                            currentQuiz = null;   
                            count = 0; 
                        }
                        else{
                            currentQuiz = currentQuiz + 1;
                            $("#question").text(questions[currentQuiz-1].question);  //顯示新的題目
                            $("#options").empty();
                            for(let x = 0;x < questions[currentQuiz-1].answers.length;x++){  //顯示新的選項題目
                            $("#options").append(
                            "<input name = 'options' type = 'radio' value = " + x + "<label>" + 
                            questions[currentQuiz-1].answers[x][0]+"</label><br><br>");  
                            }
                            if(questions[currentQuiz-1].answers[i][1] == countTotal[currentQuiz-2])
                            {
                                count = count + 1; 
                            }       
                        }
                        return false; //完成後即跳離迴圈
                }
            });
        }
    });
});