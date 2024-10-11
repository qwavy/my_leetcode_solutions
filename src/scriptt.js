/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    const result = new Set()

    emails.forEach((el) => {
        let email = el.split("@")
        let emailLocalName = email[0].split("").filter((el) => el !== ".").join("")

        
        let emailWithPlus = emailLocalName.split("+")
        if(emailWithPlus.length > 1){
            emailLocalName = emailWithPlus[0]
        }
        let emailAdress = email[1]
        emailAdress = emailAdress.replace("+")

        let resultEmail = emailLocalName + "@" + emailAdress
        result.add(resultEmail)
    })

    return result.size
};

console.log(numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]))