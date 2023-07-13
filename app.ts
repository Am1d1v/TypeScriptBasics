


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

const skills: string[] = ['Cooking', 'Drawing', 'Modeling'];

for (const skill of skills){
    console.log(skill.toUpperCase());
}

const res = skills
    .filter(s => s !== 'Cooking');
console.log(res);
