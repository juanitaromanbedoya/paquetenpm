function getTimeStamp(){
    return Date.now();

}

function getLongTime (locale = 'es-ES'){
    const options ={
        weekday : 'long',
        year : 'numeric',
        month : 'long',
        day : 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZonaName: 'short'
    };
    return new Date().toLocaleString(locale,options)
}

module.exports = {
 getLongTime,
 getTimeStamp
 
}