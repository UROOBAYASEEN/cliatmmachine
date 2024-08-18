import inquirer from "inquirer";
import chalk from 'chalk'
let pincode:number=12345
let transactionhistory:string[]=[]
let totalbalance=10000

let startingtraction=async ()=>{
    let enterpin=await inquirer.prompt([{
        message:chalk.bold.yellow('PLEASE ENTER PIN CODE FOR FURTHER PROCESS'),
        name:'pin',
        type:'number'
    }])
    while(enterpin.pin!=pincode){
        let againenter=await inquirer.prompt([{
            message: chalk.red.bold("YOUR PINCODE IN RIGHT WRONG PLEASE TRY AGAIN "),
            type:'number',
            name:'pin'
        }])
        enterpin.pin=againenter.pin
    }
    console.log(chalk.green.bold('CONGRATULATION YOU ENTER RIGHT PIN CODE'));
    let procedure= async()=>{
        let working=await inquirer.prompt([{
            message:chalk.yellow.bold('PLEASE SELECT ANY OPTION FOR FURTHER PROCESS'),
            type:"list",
            name:"working",
            choices:["WITHDRAW",'CHECK BALANCE','TRANSECTIION HISTORY','CALL CENTER SERIVECS','EXIST']

        }])
        if(working.working=="WITHDRAW"){
           
        let amount=await inquirer.prompt([{
            message:chalk.yellow.bold('HOW MANY AMOUNT YOU WITH DRAW'),
            name:'amount',
            type:"number"
        }])
        if(amount.amount>totalbalance){
            console.log(chalk.red.bold('SOORY YOU HAVE INSUFFCIENT BALANCE'));
            await procedure()
            
        }
        else{
            transactionhistory.push(amount.amount)
            console.log(chalk.green.bold(`YOU HAVE SUCESSFULLY TRANCENT $${amount.amount}`));
            totalbalance=totalbalance-amount.amount
            await procedure()
            
        }

            
        }
        else if(working.working=='CHECK BALANCE'){
            console.log(chalk.green.bold(`YOUR TOTAL BALANCE IS ${totalbalance}`));
            await procedure()
            

        }
        else if(working.working=='TRANSECTIION HISTORY'){
           
        
             if(transactionhistory.length>0){
            console.log(chalk.green.bold('YOUR TRANSECTION HISTORY IS HERE'));
            
            for(let i=0;i<transactionhistory.length;i++){
                
                console.log(`${i}: ${transactionhistory[i]}`);
                
            }
            await procedure()
        }
        else{
            console.log(chalk.red.bold('YOUR TRANSECTION HISTORY IS EMPTY '));
            
            await procedure()
        }
        
        

        }
        else if(working.working=='CALL CENTER SERIVECS'){
            let webiste:string= chalk.red.bold('www meezanback123@gmail.com')
            console.log(chalk.green.bold('PLEASE VISIT OUR WEBSITE')+webiste);
            await procedure()
            
        }
        else if(working.working=='EXCIT'){
            console.log(chalk.green.italic('GOOD BYE '));
            
        }
    }
    await  procedure()
}
  await startingtraction()
  