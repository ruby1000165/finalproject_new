let topicsArray = [
    "顏華容鋼琴獨奏會I－音樂．瞬間",
    "莫札特之夜-女高音黃莉錦聲樂獨唱會",
    "伊莉莎白法蘭契長笛獨奏會",
    "台北打擊樂團「當，地球停止轉動」",
    "巴黎銅管五重奏巡迴音樂會",
    "NSO 歌劇音樂會《崔斯坦與伊索德》",
    "Paolo Taballione長笛獨奏會",
    "藝文饗宴－柏林愛樂八重奏 ",
    "雄頌管弦樂團音樂會-波西米亞之樂",
    "《獅子王》電影交響音樂會",
    "《漫敘‧寂夢》陳政廷鋼琴獨奏會",
    "轉聲之間經典流行音樂會",
    "六弦雲彩-陳佳琦古典吉他獨奏會",
    "台灣獨奏家交響樂團─璀璨‧命運‧250",
    "胡瀞云四季巡禮「秋日‧蕭邦」",
    "乘風而行－年管風琴推廣音樂會",
    "米歇爾·貝洛夫鋼琴獨奏會",
    "永恆的日記－貝多芬絃樂四重奏全集Ⅱ",
    "莎賓梅耶與阿密達四重奏",
    "〈曙光〉張群小提琴獨奏會",
    "愛的樂章IIII 關愛慈善音樂會"
]

let startDate = new Date();

function setMonthAndDay(startMonth,startDay){  
    //一次設定好月分與日期
    startDate.setMonth(startMonth-1,startDay);
    //時間先忽略，全部分為0
    startDate.setHours(0);   
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

//在還沒選擇時間的時候，設第一天的起始值
//setMonthAndDay(4,1);


