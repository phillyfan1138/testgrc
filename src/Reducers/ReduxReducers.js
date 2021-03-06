import {combineReducers} from 'redux'
import step from './StepReducer'
import skills from './SkillsReducer'
import rawSkills from './RawSkillsReducer'
import associates from './AssociateReducer'
import rawAssociates from './RawAssociatesReducer'
import rawRCUS from './RawRCUSReducer'
import plans from './PlansReducer'
import rawTest from './RawTestSelectionReducer'
import todos from './TodoReducer'
import activities from './ActivityReducer'
import user from './AuthenticationReducer'
import isLoading from './LoadingReducer'
import pipeline from './PipelineReducer'

const workflowApp=combineReducers({
    rawSkills,
    rawAssociates,
    step,
    skills,
    rawRCUS,
    plans,
    rawTest, 
    associates,
    todos,
    user,
    isLoading,
    pipeline,
    activities
})
export default workflowApp;