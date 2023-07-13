


function getFullName(userEntity: {firstName: string, surName: string}):string{
    return `${userEntity.firstName} ${userEntity.surName}`;
}


const user = {
    firstName: 'Dima',
    surName: 'surname',
    city: 'cityName'
};

console.log(getFullName(user));