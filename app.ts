


function getFullName(firstName: string, surName: string){
    return `${firstName} ${surName}`;
}

const getFullNameArrow = (firstName: string, surName: string): string =>{
    return `${firstName} ${surName}`;
}

console.log(getFullName("Dima", "surname"));