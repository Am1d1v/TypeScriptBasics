


function getFullName(firstName, surName){
    return `${firstName} ${surName}`;
}

const getFullNameArrow = (firstName: string, surName: string): string =>{
    return `${firstName} ${surName}`;
}

console.log(getFullName(true, false));