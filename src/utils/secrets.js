const fs = require("fs")

module.exports.secretsData = ()=>{
    const secretsData = fs.readFileSync(__dirname + '/../../etc/secrets/secrets.json')
    const secretJSONData = JSON.parse(secretsData.toString())
    return secretJSONData
}