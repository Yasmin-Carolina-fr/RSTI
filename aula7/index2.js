import {select,input,checkbox} from ("@inquirer/prompts")
import chalk from 'chalk'

const goal = {
    value: "tomar 3L água por dia",
    checked: false,

}
const goals= [goal]
const registerGoal= async () => {
    const goal = await input ({
        message: "Digite a sua meta:",

    })
    if (goal.length ==0){
        console.log("A meta não pode ser vazia!")
    }
    goals.push({value: goal, checked: false})

}
const listGoals = async () =>{
    if (goals.length ==0){
        console.log("Não existem metas cadastradas!")
        return
    }
    const checkedGoals = await checkbox ({
    message:
    "Use as setas para mudar de meta, o espeço para marcar/desmarcar a meta e o enter para finalizar.",
    choices: [...goals],
    instructions: false,    
    })
    goals.forEach((goal) => {
        goal.checked= false
    })
    if (checkedGoals==0){
        console.log("Nenhuma meta foi selecionada!")
        return
}
checkedGoals.forEach((checkedGoal)=>{
    const goal= goals.find((selectedGoal)=>{
        return selectedGoal.value == checkedGoal
    })
    goal.checked= true
})
console.log("meta(s) marcada(s)")
}
