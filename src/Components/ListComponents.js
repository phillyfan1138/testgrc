import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import Subheader from 'material-ui/Subheader';
import {List, ListItem} from 'material-ui/List';
import ActionDelete from 'material-ui/svg-icons/action/delete';
export const ListOfPersonel=({arrayOfPersons, onCheck})=>
<List style={{marginTop:14}}>
    <Subheader>List of Available Associates</Subheader>
    {arrayOfPersons.map((person, index)=>{
        return <ListItem 
            key={index} 
            primaryText={person.name} 
            leftCheckbox={<Checkbox checked={person.selected?true:false} onCheck={(e, isChecked)=>onCheck(person, isChecked)}/>} 
            nestedItems={person.requiredSkills.map((skill, index)=>{
                return <ListItem key={index} primaryText={skill} />
            })}
        />
    })}
</List>
ListOfPersonel.propTypes={
    arrayOfPersons:React.PropTypes.arrayOf(React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        id: React.PropTypes.string.isRequired,
        requiredSkills: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
    })).isRequired,
    onCheck:React.PropTypes.func.isRequired
}

export const ListWithDelete=({selectedItems, onDelete})=>
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
</List>
ListWithDelete.propTypes={
    selectedItems:React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    onDelete:React.PropTypes.func.isRequired
}