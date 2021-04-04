var items = new Array;
var question;
var answer;
var group;
var picture;

var DontIncludeFromRemix1 = [""];
var DontIncludeFromRemix2 = [""];
var DontIncludeFromRemix3 = [""];

var identificationMode = false;
var drainBy = -0.005;
var examMode = false;
var PanicMode = false;
var noMusic = true;

//var drainBy = -0.0005;
//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS


question = ["The process of permanently changing negative behaviors to positive behaviors that will lead to better health and well-being"];
answer = ["Behavior modification"];
group = "BehaviorChangeTheory";
picture = "";
items.push({question,answer,group,picture});

//Theories//Theories//Theories//Theories//Theories//Theories//Theories//Theories 

question = ["Individuals in this stage are not considering change or do not want to change a given behavior"];
answer = ["Precontemplation"];
group = "BehaviorChangeTheory";
picture = "";
items.push({question,answer,group,picture});

question = ["Individuals in this stage acknowledge that they have a problem and begin to think seriously about overcoming it"];
answer = ["Contemplation"];
group = "BehaviorChangeTheory";
picture = "";
items.push({question,answer,group,picture});

question = ["Individuals in this stage are seriously considering change and planning to change behavior within the next month"];
answer = ["Preparation"];
group = "BehaviorChangeTheory";
picture = "";
items.push({question,answer,group,picture});

question = ["Individuals in this stage requires the greatest commitment of time and energy"];
answer = ["Action"];
group = "BehaviorChangeTheory";
picture = "";
items.push({question,answer,group,picture});

question = ["Individuals in this stage continues the new behavior for up to 5 years"];
answer = ["Maintenance"];
group = "BehaviorChangeTheory";
picture = "";
items.push({question,answer,group,picture});

question = ["Individuals in this stage exits from the cycle of change without the fear of relapse"];
answer = ["Termination","Adaption"];
group = "BehaviorChangeTheory";
picture = "";
items.push({question,answer,group,picture});

//SmartGoals//SmartGoals//SmartGoals//SmartGoals//SmartGoals//SmartGoals//SmartGoals//SmartGoals//SmartGoals

question = ["Is a part of SMART where you should state exactly and in a positive manner what would you like to accomplish"];
answer = ["Specific"];
group = "SmartGoals";
picture = "";
items.push({question,answer,group,picture});

question = ["Is a part of SMART where goals and actions should be countable"];
answer = ["Measurable"];
group = "SmartGoals";
picture = "";
items.push({question,answer,group,picture});

question = ["Is a part of SMART where the goals will motivate and challenge you."];
answer = ["Acceptable"];
group = "SmartGoals";
picture = "";
items.push({question,answer,group,picture});

question = ["Is a part of SMART where goals should be within the reach"];
answer = ["Realistic"];
group = "SmartGoals";
picture = "";
items.push({question,answer,group,picture});

question = ["Is a part of SMART where a goal must have a specific date set for completion."];
answer = ["Time Specific"];
group = "SmartGoals";
picture = "";
items.push({question,answer,group,picture});

/*

question = ["Is a part of SMART"];
answer = [""];
group = "SmartGoals";
picture = "";
items.push({question,answer,group,picture});

question = [""];
answer = [""];
group = "BehaviorChangeTheory";
picture = "";
items.push({question,answer,group,picture});


question = [""];
answer = [""];
group = "Definition";
picture = "";
items.push({question,answer,group,picture});

*/

//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS//ITEMS

function convertSpecialChars(){
	var size = items.length-1;
    console.log(size);
	
    
    for (i= 0; i<=size; i++){
        var question_size = items[i].question.length-1;
        var question_content = items[i].question;
        var answer_size = items[i].answer.length-1;
        var answer_content = items[i].answer;

        /*
        for (i2=0; i2<=question_size; i2++){
            question_content[i2] = question_content[i2].replace(/'/g,"\u0027");
            question_content[i2] = question_content[i2].replace(/’/g,"\u2019");           
        }
        for (i3=0; i3<=answer_size; i3++){
            //answer_content[i3] =  answer_content[i3].replace(/⟐/g,"\u27D0");
        }

		*///array[size] = array[size].replace("'", "\u0027");
	}
    
}
