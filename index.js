function findMatching (drivers, name){
    const driverNames = drivers.filter(driver => driver.toUpperCase() === name.toUpperCase())
    return driverNames
}

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

function fuzzyMatch(drivers, letters){
    const driverFirstTwoLetters = drivers.filter(driver => driver.slice(0,2) === letters)
    return driverFirstTwoLetters
}

function matchName(drivers, firstname){
    const nameValue = drivers.filter(driver => driver.name === firstname)
    return nameValue
}

