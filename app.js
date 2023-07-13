"use strict";
function getFullName(userEntity) {
    return `${userEntity.firstName} ${userEntity.surName}`;
}
const user = {
    firstName: 'Dima',
    surName: 'surname',
    city: 'cityName'
};
console.log(getFullName(user));
