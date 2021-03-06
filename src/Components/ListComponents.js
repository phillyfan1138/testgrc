import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import Subheader from 'material-ui/Subheader';
import {List, ListItem} from 'material-ui/List';
import ActionDelete from 'material-ui/svg-icons/action/delete';

import compose from 'recompose/compose';
import setPropTypes from 'recompose/setPropTypes';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';

const listStyle={marginTop:14};
const enhanceListPersonel=compose(
    setPropTypes({
        arrayOfPersons:React.PropTypes.arrayOf(React.PropTypes.shape({
            cn: React.PropTypes.string.isRequired,
            id: React.PropTypes.string.isRequired,
            requiredSkills: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
        })).isRequired,
        onCheck:React.PropTypes.func.isRequired
    }),
    onlyUpdateForKeys(['arrayOfPersons'])
)
export const ListOfPersonel=enhanceListPersonel(({arrayOfPersons, onCheck})=>
<List style={listStyle}>
    <Subheader>List of Available Associates</Subheader>
    {arrayOfPersons.map((person, index)=>{
        return <ListItem 
            key={index} 
            primaryText={person.cn} 
            leftCheckbox={<Checkbox checked={person.selected?true:false} onCheck={(e, isChecked)=>onCheck(person, isChecked)}/>} 
            nestedItems={person.requiredSkills.map((skill, index)=>{
                return <ListItem key={index} primaryText={skill} />
            })}
        />
    })}
</List>);

const enhanceListDelete=compose(
    setPropTypes({
        selectedItems:React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
        onDelete:React.PropTypes.func.isRequired
    }),
    onlyUpdateForKeys(['selectedItems'])
)
export const ListWithDelete=enhanceListDelete(({selectedItems, onDelete})=>
<List>
    {
        selectedItems.map((val, index)=>{
            return <ListItem 
                key={index} 
                primaryText={val}
                leftCheckbox={
                    <Checkbox checked={false} uncheckedIcon={<ActionDelete />} checkedIcon={<ActionDelete/>}
                    onCheck={(e, isChecked)=>onDelete(val)}/>
                }
            />
        })
    }
</List>)
