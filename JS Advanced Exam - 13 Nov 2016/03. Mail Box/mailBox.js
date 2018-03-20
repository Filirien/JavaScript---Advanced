class MailBox {
    constructor(){
        this.message = [];
    }

    get messageCount(){
        return this.message.length
    }
    addMessage(subject,text){
       this.message.push({
            subject: subject,
            text: text
        })
        return this;
    }
    deleteAllMessages(){
        this.message= [];
    }
    findBySubject(substr){
        let arr = [];
        for (let obj of this.message) {
            if(obj.subject.indexOf(substr) !== -1){
                arr.push({subject: obj.subject, text: obj.text})
            }
        }
        return arr;
    }
    toString(){
        if(this.message <= 0){
            return `* (empty mailbox)`
        }else{
            let result = '';
            for (let obj of this.message) {
                result += `* [${obj.subject}] ${obj.text}\n`
            }
            return result
        }
    }
}


let mb = new MailBox();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
mb.addMessage("meeting", "Let's meet at 17/11");
mb.addMessage("beer", "Wanna drink beer tomorrow?");
mb.addMessage("question", "How to solve this problem?");
mb.addMessage("Sofia next week", "I am in Sofia next week.");
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
console.log("Messages holding 'rakiya': " +
    JSON.stringify(mb.findBySubject('rakiya')));
console.log("Messages holding 'ee': " +
    JSON.stringify(mb.findBySubject('ee')));


 mb.deleteAllMessages();

console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);

console.log("New mailbox:\n" +
    new MailBox()
        .addMessage("Subj 1", "Msg 1")
        .addMessage("Subj 2", "Msg 2")
        .addMessage("Subj 3", "Msg 3")
        .toString());
