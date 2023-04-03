//creating an array and passing the number, questions,options, and answers
let questions = [
    {
        numb:1,
        question:"Which of the following is a disadvantage of using JavaScript?",
        answer:"All of the above.",
        options:[
            "Client-side JavaScript does not allow the reading or writing of files.",
            "JavaScript can not be used for Networking applications because there is no such support available.",
            "JavaScript doesn't have any multithreading or multiprocess capabilities.",
            "All of the above."
        ],
        description: "All of the above options are correct."
       },
   {
        numb:2,
        question:"Which of the following is the correct syntax to create a cookie using JavaScript?",
        answer:"document.cookie = 'key1 = value1; key2 = value2; expires = date';",
        options:[
            "document.cookie = 'key1 = value1; key2 = value2; expires = date';",
            "browser.cookie = 'key1 = value1; key2 = value2; expires = date';",
            "window.cookie = 'key1 = value1; key2 = value2; expires = date';",
            "navigator.cookie = 'key1 = value1; key2 = value2; expires = date';"
    ],
    description: "document.cookie = 'key1 = value1; key2 = value2; expires = date'; is the correct option."

   },
   {
    numb:3,
    question:"Which built-in method returns the index within the calling String object of the first occurrence of the specified value?",
    answer:"indexOf()",
    options:[
        "getIndex()",
        "location()",
        "indexOf()",
        "None of the above."
       
],
description: "indexOf() method returns the index within the calling String object of the first occurrence of the specified value, or -1 if not found."

},
{
    numb:4,
    question:"Which built-in method returns the calling string value converted to lower case?",
    answer:"toLowerCase()",
    options:[
        "toLowerCase()",
        "toLower()",
        "changeCase(case)",
        "None of the above."
    ],   
    description: "toLowerCase() method returns the calling string value converted to lower case."

   },
   {
    numb:5,
    question:"Which of the following function of String object returns the character at the specified index?",
    answer:"charAt()",
    options:[
        "charAt()",
        "charCodeAt()",
        "concat()",
        "indexOf()"
    ],
    description: "charAt() − Returns the character at the specified index."
   },
];