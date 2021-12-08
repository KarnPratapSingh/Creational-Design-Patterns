
class fancyLogger{
    constructor(){
        if (fancyLogger.instance==null){
            this.logs=[];
            fancyLogger.instance=this;
        }
        return fancyLogger.instance;
       
    }
    log(message){
        this.logs.push(message);
        console.log(`FANCY: ${message}`);
    }
    printLogCount(){
        console.log(`${this.logs.length} logs`);
    }
    
}

const logger = new fancyLogger()
// Object.freeze(logger);
// export default logger

function logFirstImplementation(){

    logger.printLogCount(); // 0
    logger.log('First file');
    logger.printLogCount(); // 1
}

function logSecondImplementation(){
    logger.printLogCount(); // 1
    logger.log('Second file');
    logger.printLogCount(); //2 
    
}

logFirstImplementation();
logSecondImplementation();