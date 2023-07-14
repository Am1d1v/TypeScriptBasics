"use strict";
/*

function getFullName(userEntity: {firstName: string, surName: string}):string{
    return `${userEntity.firstName} ${userEntity.surName}`;
}


const user = {
    firstName: 'Dima',
    surName: 'surname',
    city: 'cityName'
};


console.log(getFullName(user));

*/
// Object typesation
/*

let info: {
    officeID: number,
    isOpenned: boolean,
    contacts: {
        phone: string,
        email: string,
        address: {
            city: string
        }
    }
} = {
    "officeID": 45,
    "isOpenned": false,
    "contacts": {
        "phone": "+0000000000",
        "email": "myMail@email.com",
        "address": {
            "city": "cityName"
        }
    }
}

*/
// Array typesation
/*

const skills: string[] = ['Cooking', 'Drawing', 'Modeling'];

for (const skill of skills){
    console.log(skill.toUpperCase());
}

const res = skills
    .filter(s => s !== 'Cooking');
console.log(res);

*/
// Tuples
/*

const skill: [number, string] = [1, 'Drawing'];
//const id = skill[0];
//const skillName = skill[1];

const [id, skillName] = skill;
console.log(`${id} ${skillName}`);


const arr: [number, string, ...boolean[]] = [1, "Something", true, true, false];

*/
// Readonly 
//const skill: readonly[number, string] = [1, 'Drawing'];
//skill[0] = 10; // error
// Enums
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 0] = "SUCCESS";
    StatusCode[StatusCode["IN_PROGRESS"] = 1] = "IN_PROGRESS";
    StatusCode[StatusCode["DENIED"] = 2] = "DENIED";
})(StatusCode || (StatusCode = {}));
const res = {
    message: 'Completed',
    statusCode: StatusCode.SUCCESS
};
// 1 - Success
// 2 - In progress
// 3 - Denied
if (res.statusCode === StatusCode.SUCCESS) {
    console.log('Success');
}
