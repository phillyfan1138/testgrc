import {getUniqueArray} from '../skillsHelpers'
const skill=(state="", action)=>{
    switch(action.type){
        case "ADD_VALIDATION_SKILL":
            return action.skill
        case "REMOVE_VALIDATION_SKILL":
            return state!==action.skill
        default:
            return state;
    }
}
const skills=(state=[], action)=>{
    switch(action.type){
        case "ADD_VALIDATION_SKILL":
            return getUniqueArray([...state, skill(undefined, action)])
        case "REMOVE_VALIDATION_SKILL":
            return state.filter((skl)=>skill(skl, action))
        default:
            return state;
    }
}
export default skills;