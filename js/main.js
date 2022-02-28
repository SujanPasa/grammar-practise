const irregularVerbList = [
    /*1:*/ 	 ["abide",	"abode",	"abode",	"abiding", "abides"],
    /*2:*/ 	 ["alight",	"alit",	"alit",	"alighting", "alights"],
    /*3:*/ 	 ["arise",	"arose",	"arisen",	"arising", "arises"],
    /*4:*/ 	 ["awake",	"awoke",	"awoken",	"awaking", "awakes"],
    /*5:*/ 	 ["bear",	"bore",	"born",	"bearing", "bears"],
    /*6:*/ 	 ["beat",	"beat",	"beaten",	"beating", "beats"],
    /*7:*/ 	 ["become",	"became",	"become",	"becoming", "becomes"],
    /*8:*/ 	 ["befall",	"befell",	"befallen",	"befalling", "befalls"],
    /*9:*/ 	 ["begin",	"began",	"begun",	"beginning", "begins"],
    /*10:*/  ["behold",	"beheld",	"beheld",	"beholding", "beholds"],
    /*11:*/  ["bend",	"bent",	"bent",	"bending", "bends"],
    /*12:*/  ["bet",	"bet",	"bet",	"betting", "bets"],
    /*13:*/  ["bid",	"bade",	"bidden",	"bidding", "bids"],
    /*14:*/  ["bid",	"bid",	"bid",	"bidding", "bids"],
    /*15:*/  ["bind",	"bound",	"bound",	"binding", "binds"],
    /*16:*/  ["bite",	"bit",	"bitten",	"biting", "bites"],
    /*17:*/  ["bleed",	"bled",	"bled",	"bleeding", "bleeds"],
    /*18:*/  ["blow",	"blew",	"blown",	"blowing", "blows"],
    /*19:*/  ["break",	"broke",	"broken",	"breaking", "breaks"],
    /*20:*/  ["breed",	"bred",	"bred",	"breeding", "breeds"],
    /*21:*/  ["bring",	"brought",	"brought",	"bringing", "brings"],
    /*22:*/  ["broadcast",	"broadcast",	"broadcast",	"broadcasting", "broadcasts"],
    /*23:*/  ["build",	"built",	"built",	"building", "builds"],
    /*24:*/  ["burn",	"burnt",	"burnt",	"burning", "burns"],
    /*25:*/  ["burst",	"burst",	"burst",	"bursting", "bursts"],
    /*26:*/  ["bust",	"bust",	"bust",	"busting", "busts"],
    /*27:*/  ["buy",	"bought",	"bought",	"buying", "buys"],
    /*28:*/  ["cast",	"cast",	"cast",	"casting", "casts"],
    /*29:*/  ["catch",	"caught",	"caught",	"catching", "catches"],
    /*30:*/  ["chide",	"chid",	"chidden",	"chiding", "chides"],
    /*31:*/  ["choose",	"chose",	"chosen",	"choosing", "chooses"],
    /*32:*/  ["cling",	"clung",	"clung",	"clinging", "clings"],
    /*33:*/  ["clothe",	"clad",	"clad",	"clothing", "clothes"],
    /*34:*/  ["come",	"came",	"come",	"coming", "comes"],
    /*35:*/  ["cost",	"cost",	"cost",	"costing", "costs"],
    /*36:*/  ["creep",	"crept",	"crept",	"creeping", "creeps"],
    /*37:*/  ["cut",	"cut",	"cut",	"cutting", "cuts"],
    /*38:*/  ["deal",	"dealt",	"dealt",	"dealing", "deals"],
    /*39:*/  ["dig",	"dug",	"dug",	"digging", "digs"],
    /*40:*/  ["do",	"did",	"done",	"doing", "does"],
    /*41:*/  ["draw",	"drew",	"drawn",	"drawing", "draws"],
    /*42:*/  ["dream",	"dreamt",	"dreamt",	"dreaming", "dreams"],
    /*43:*/  ["drink",	"drank",	"drunk",	"drinking", "drinks"],
    /*44:*/  ["drive",	"drove",	"driven",	"driving", "drives"],
    /*45:*/  ["dwell",	"dwelt",	"dwelt",	"dwelling", "dwells"],
    /*46:*/  ["eat",	"ate",	"eaten",	"eating", "eats"],
    /*47:*/  ["fall",	"fell",	"fallen",	"falling", "falls"],
    /*48:*/  ["fart",	"fart",	"fart",	"farting", "farts"],
    /*49:*/  ["feed",	"fed",	"fed",	"feeding", "feeds"],
    /*50:*/  ["feel",	"felt",	"felt",	"feeling", "feels"],
    /*51:*/  ["fight",	"fought",	"fought",	"fighting", "fights"],
    /*52:*/  ["find",	"found",	"found",	"finding", "finds"],
    /*53:*/  ["fit",	"fit",	"fit",	"fitting", "fits"],
    /*54:*/  ["flee",	"fled",	"fled",	"fleeing", "flees"],
    /*55:*/  ["fling",	"flung",	"flung",	"flinging", "flings"],
    /*56:*/  ["fly",	"flew",	"flown",	"flying", "flies"],
    /*57:*/  ["forbid",	"forbade",	"forbidden",	"forbidding", "forbids"],
    /*58:*/  ["forecast",	"forecast",	"forecast",	"forecasting", "forecasts"],
    /*59:*/  ["forget",	"forgot",	"forgotten",	"forgetting", "forgets"],
    /*60:*/  ["forgive",	"forgave",	"forgiven",	"forgiving", "forgives"],
    /*61:*/  ["forsake",	"forsook",	"forsaken",	"forsaking", "forsakes"],
    /*62:*/  ["freeze",	"froze",	"frozen",	"freezing", "freezes"],
    /*63:*/  ["gainsay",	"gainsaid",	"gainsaid",	"gainsaying", "gainsays"],
    /*64:*/  ["get",	"got",	"got",	"getting", "gets"],
    /*65:*/  ["gird",	"girt",	"girt",	"girding", "girds"],
    /*66:*/  ["give",	"gave",	"given",	"giving", "gives"],
    /*67:*/  ["go",	"went",	"gone",	"going", "goes"],
    /*68:*/  ["grave",	"grove",	"graven",	"graving", "graves"],
    /*69:*/  ["grow",	"grew",	"grown",	"growing", "grows"],
    /*70:*/  ["hang",	"hung",	"hung",	"hanging", "hangs"],
    /*71:*/  ["have",	"had",	"had",	"having", "has"],
    /*72:*/  ["hear",	"heard",	"heard",	"hearing", "hears"],
    /*73:*/  ["heave",	"hove",	"hove",	"heaving", "heaves"],
    /*74:*/  ["hew",	"hewed",	"hewn",	"hewing", "hews"],
    /*75:*/  ["hide",	"hid",	"hidden",	"hiding", "hides"],
    /*76:*/  ["hit",	"hit",	"hit",	"hitting", "hits"],
    /*77:*/  ["hold",	"held",	"held",	"holding", "holds"],
    /*78:*/  ["hurt",	"hurt",	"hurt",	"hurting", "hurts"],
    /*79:*/  ["inlay",	"inlaid",	"inlaid",	"inlaying", "inlays"],
    /*80:*/  ["input",	"input",	"input",	"inputting", "inputs"],
    /*81:*/  ["keep",	"kept",	"kept",	"keeping", "keeps"],
    /*82:*/  ["kneel",	"knelt",	"knelt",	"kneeling", "kneels"],
    /*83:*/  ["knit",	"knit",	"knit",	"knitting", "knits"],
    /*84:*/  ["know",	"knew",	"known",	"knowing", "knows"],
    /*85:*/  ["lade",	"laded",	"laden",	"lading", "lades"],
    /*86:*/  ["lay",	"laid",	"laid",	"laying", "lays"],
    /*87:*/  ["lead",	"led",	"led",	"leading", "leads"],
    /*88:*/  ["lean",	"leant",	"leant",	"leaning", "leans"],
    /*89:*/  ["leap",	"leapt",	"leapt",	"leaping", "leaps"],
    /*90:*/  ["learn",	"learnt",	"learnt",	"learning", "learns"],
    /*91:*/  ["leave",	"left",	"left",	"leaving", "leaves"],
    /*92:*/  ["lend",	"lent",	"lent",	"lending", "lends"],
    /*93:*/  ["let",	"let",	"let",	"letting", "lets"],
    /*94:*/  ["lie",	"lay",	"lain",	"lying", "lies"],
    /*95:*/  ["light",	"lit",	"lit",	"lighting", "lights"],
    /*96:*/  ["lose",	"lost",	"lost",	"losing", "loses"],
    /*97:*/  ["make",	"made",	"made",	"making", "makes"],
    /*98:*/  ["mean",	"meant",	"meant",	"meaning", "means"],
    /*99:*/  ["meet",	"met",	"met",	"meeting", "meets"],
    /*100:*/ ["mistake",	"mistook",	"mistaken",	"mistaking", "mistakes"],
    /*101:*/ ["mow",	"mowed",	"mown",	"mowing", "mows"],
    /*102:*/ ["partake",	"partook",	"partaken",	"partaking", "partakes"],
    /*103:*/ ["pay",	"paid",	"paid",	"paying", "pays"],
    /*104:*/ ["plead",	"pled",	"pled",	"pleading", "pleads"],
    /*105:*/ ["put",	"put",	"put",	"putting", "puts"],
    /*106:*/ ["quit",	"quit",	"quit",	"quitting", "quits"],
    /*107:*/ ["read",	"read",	"read",	"reading", "reads"],
    /*108:*/ ["rend",	"rent",	"rent",	"rending", "rends"],
    /*109:*/ ["rid",	"rid",	"rid",	"ridding", "rids"],
    /*110:*/ ["ride",	"rode",	"ridden",	"riding", "rides"],
    /*111:*/ ["ring",	"rang",	"rung",	"ringing", "rings"],
    /*112:*/ ["rise",	"rose",	"risen",	"rising", "rises"],
    /*113:*/ ["run",	"ran",	"run",	"running", "runs"],
    /*114:*/ ["saw",	"sawed",	"sawn",	"sawing", "saws"],
    /*115:*/ ["say",	"said",	"said",	"saying", "says"],
    /*116:*/ ["see",	"saw",	"seen",	"seeing", "sees"],
    /*117:*/ ["seek",	"sought",	"sought",	"seeking", "seeks"],
    /*118:*/ ["sell",	"sold",	"sold",	"selling", "sells"],
    /*119:*/ ["send",	"sent",	"sent",	"sending", "sends"],
    /*120:*/ ["set",	"set",	"set",	"setting", "sets"],
    /*121:*/ ["sew",	"sewed",	"sewn",	"sewing", "sews"],
    /*122:*/ ["shake",	"shook",	"shaken",	"shaking", "shakes"],
    /*123:*/ ["shave",	"shove",	"shaven",	"shaving", "shaves"],
    /*124:*/ ["shear",	"shore",	"shorn",	"shearing", "shears"],
    /*125:*/ ["shed",	"shed",	"shed",	"shedding", "sheds"],
    /*126:*/ ["shine",	"shone",	"shone",	"shining", "shines"],
    /*127:*/ ["shit",	"shit",	"shit",	"shitting", "shits"],
    /*128:*/ ["shoe",	"shod",	"shod",	"shoeing", "shoes"],
    /*129:*/ ["shoot",	"shot",	"shot",	"shooting", "shoots"],
    /*130:*/ ["show",	"showed",	"shown",	"showing", "shows"],
    /*131:*/ ["shrink",	"shrank",	"shrunk",	"shrinking", "shrinks"],
    /*132:*/ ["shrive",	"shrove",	"shriven",	"shriving", "shrives"],
    /*133:*/ ["shut",	"shut",	"shut",	"shutting", "shuts"],
    /*134:*/ ["sing",	"sang",	"sung",	"singing", "sings"],
    /*135:*/ ["sink",	"sank",	"sunk",	"sinking", "sinks"],
    /*136:*/ ["sit",	"sat",	"sat",	"sitting", "sits"],
    /*137:*/ ["slay",	"slew",	"slain",	"slaying", "slays"],
    /*138:*/ ["sleep",	"slept",	"slept",	"sleeping", "sleeps"],
    /*139:*/ ["slide",	"slid",	"slid",	"sliding", "slides"],
    /*140:*/ ["sling",	"slung",	"slung",	"slinging", "slings"],
    /*141:*/ ["slink",	"slunk",	"slunk",	"slinking", "slinks"],
    /*142:*/ ["slit",	"slit",	"slit",	"slitting", "slits"],
    /*143:*/ ["smell",	"smelt",	"smelt",	"smelling", "smells"],
    /*144:*/ ["smite",	"smote",	"smitten",	"smiting", "smites"],
    /*145:*/ ["speak",	"spoke",	"spoken",	"speaking", "speaks"],
    /*146:*/ ["speed",	"sped",	"sped",	"speeding", "speeds"],
    /*147:*/ ["spell",	"spelt",	"spelt",	"spelling", "spells"],
    /*148:*/ ["spend",	"spent",	"spent",	"spending", "spends"],
    /*149:*/ ["spill",	"spilt",	"spilt",	"spilling", "spills"],
    /*150:*/ ["spin",	"spun",	"spun",	"spinning", "spins"],
    /*151:*/ ["spit",	"spat",	"spat",	"spitting", "spits"],
    /*152:*/ ["split",	"split",	"split",	"splitting", "splits"],
    /*153:*/ ["spoil",	"spoilt",	"spoilt",	"spoiling", "spoils"],
    /*154:*/ ["spread",	"spread",	"spread",	"spreading", "spreads"],
    /*155:*/ ["spring",	"sprang",	"sprung",	"springing", "springs"],
    /*156:*/ ["stand",	"stood",	"stood",	"standing", "stands"],
    /*157:*/ ["steal",	"stole",	"stolen",	"stealing", "steals"],
    /*158:*/ ["stick",	"stuck",	"stuck",	"sticking", "sticks"],
    /*159:*/ ["sting",	"stung",	"stung",	"stinging", "stings"],
    /*160:*/ ["stink",	"stank",	"stunk",	"stinking", "stinks"],
    /*161:*/ ["strew",	"strewed",	"strewn",	"strewing", "strews"],
    /*162:*/ ["stride",	"strode",	"stridden",	"striding", "strides"],
    /*163:*/ ["strike",	"struck",	"stricken",	"striking", "strikes"],
    /*164:*/ ["string",	"strung",	"strung",	"stringing", "strings"],
    /*165:*/ ["strive",	"strove",	"striven",	"striving", "strives"],
    /*166:*/ ["swear",	"swore",	"sworn",	"swearing", "swears"],
    /*167:*/ ["sweat",	"sweat",	"sweat",	"sweating", "sweats"],
    /*168:*/ ["sweep",	"swept",	"swept",	"sweeping", "sweeps"],
    /*169:*/ ["swell",	"swelled",	"swollen",	"swelling", "swells"],
    /*170:*/ ["swim",	"swam",	"swum",	"swimming", "swims"],
    /*171:*/ ["swing",	"swung",	"swung",	"swinging", "swings"],
    /*172:*/ ["take",	"took",	"taken",	"taking", "takes"],
    /*173:*/ ["teach",	"taught",	"taught",	"teaching", "teaches"],
    /*174:*/ ["tear",	"tore",	"torn",	"tearing", "tears"],
    /*175:*/ ["tell",	"told",	"told",	"telling", "tells"],
    /*176:*/ ["think",	"thought",	"thought",	"thinking", "thinks"],
    /*177:*/ ["thrive",	"throve",	"thriven",	"thriving", "thrives"],
    /*178:*/ ["throw",	"threw",	"thrown",	"throwing", "throws"],
    /*179:*/ ["thrust",	"thrust",	"thrust",	"thrusting", "thrusts"],
    /*180:*/ ["tread",	"trod",	"trodden",	"treading", "treads"],
    /*181:*/ ["understand",	"understood",	"understood",	"understanding", "understands"],
    /*182:*/ ["wake",	"woke",	"woken",	"waking", "wakes"],
    /*183:*/ ["wear",	"wore",	"worn",	"wearing", "wears"],
    /*184:*/ ["weave",	"wove",	"woven",	"weaving", "weaves"],
    /*185:*/ ["wed",	"wed",	"wed",	"wedding", "weds"],
    /*186:*/ ["weep",	"wept",	"wept",	"weeping", "weeps"],
    /*187:*/ ["welcome",	"welcomed",	"welcomed",	"welcoming", "welcomes"],
    /*188:*/ ["wend",	"went",	"went",	"wending", "wends"],
    /*189:*/ ["wet",	"wet",	"wet",	"wetting", "wets"],
    /*190:*/ ["win",	"won",	"won",	"winning", "wins"],
    /*191:*/ ["wind",	"wound",	"wound",	"winding", "winds"],
    /*192:*/ ["withdraw",	"withdrew",	"withdrawn",	"withdrawing", "withdraws"],
    /*193:*/ ["wring",	"wrung",	"wrung",	"wringing", "wrings"],
    /*194:*/ ["write",	"wrote",	"written",	"writing", "writes"]
]



//radom number generator for selecting key from the object IrregularVerbList

const checkAnswer = document.getElementById("check-answer");
const nextQuestion = document.getElementById("next-question");

function randomNumbergenerator(maxRange){
    if(maxRange === undefined){
        maxRange = irregularVerbList.length;
        let positionOnMainObject = Math.floor(Math.random() * maxRange);
        return positionOnMainObject;
    }else{
        let positionOnMainObject = Math.floor(Math.random() * maxRange + 1);
        return positionOnMainObject;
    }

}

function baseWordSelect(){
    let position = randomNumbergenerator(30);
    let baseWord = irregularVerbList[position][0];
    console.log("BaseWord: " + baseWord);
    document.getElementById("base-form").innerText = baseWord;
    let correctAnswerArray = [irregularVerbList[position][1], irregularVerbList[position][2], irregularVerbList[position][3], irregularVerbList[position][4]];
    return(correctAnswerArray);
}



//eventListiner for Collecting answer input
    function answerChecking(answerArray){
        var inputAnswerArray = [];
        function answerCheckHandler(){
            let rawInputV2 = document.getElementById("verb-2").value;
            let rawInputV3 = document.getElementById("verb-3").value;
            let rawInputV4 = document.getElementById("verb-4").value;
            let rawInputV5 = document.getElementById("verb-5").value;

            //removing extra spaces from input for preventing false negative 
            inputAnswerArray.push(rawInputV2.replace(/\s/g, ''));
            inputAnswerArray.push(rawInputV3.replace(/\s/g, ''));
            inputAnswerArray.push(rawInputV4.replace(/\s/g, ''));
            inputAnswerArray.push(rawInputV5.replace(/\s/g, ''));
            
            let inputClassList = document.getElementsByClassName("input");
            // process after correct Incorrec
            if(JSON.stringify(answerArray) == JSON.stringify(inputAnswerArray)){
                console.log("Correct");
                for(let i = 0; i < answerArray.length; i++){
                    if(answerArray[i]==inputAnswerArray[i]){
                        console.log(i +" Matched");
                        inputClassList[i].classList.add("correct");
                       }
                       else{
                        console.log(i +" Item Not Matched");
                        inputClassList[i].classList.add("incorrect");

                    }
                  }
                }
                    else{
                
                // console.log("inputClassList: "+ inputClassList);
                console.log("String" + JSON.stringify(inputAnswerArray));
                console.log("Incorrect");
                for(let i = 0; i < answerArray.length; i++){
                    if(answerArray[i]!=inputAnswerArray[i]){
                        console.log(i +" Item Not Matched");
                        inputClassList[i].classList.add("incorrect");
                       
                    }else{
                        console.log(i +" Item Matched");
                        inputClassList[i].classList.add("correct");

                    }
                }
            }
            //inorder to avoid error regarding false incorrect message
            checkAnswer.removeEventListener("click",answerCheckHandler);

            function nextQuestionEventHandler(){
                inputAnswerArray = [];
                // let incorrectClassList = document.querySelectorAll(".incorrect");
                
                // for(let i = 0; i< incorrectClassList.length; i++){
                //     incorrectClassList[i].classList.remove("incorrect");
                // }

                let inputItemList = document.querySelectorAll("input");
                // console.log(inputItemList);
                for(i = 0; i < inputItemList.length; i++){
                    inputItemList[i].classList.remove("incorrect");
                    inputItemList[i].classList.remove("correct");
                    inputItemList[i].value = "";
                }
                //removing eventHandler is imp to avoid error regarding generating of 2 questin at once
                nextQuestion.removeEventListener("click",nextQuestionEventHandler);
                gameStart();   
          };
        
        nextQuestion.addEventListener("click",nextQuestionEventHandler);
        };
        checkAnswer.addEventListener("click",answerCheckHandler);
         
    }

function gameStart(){
    let answerArray = baseWordSelect();
    console.log(answerArray);
    answerChecking(answerArray);
    
}

gameStart();