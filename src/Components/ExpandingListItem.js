import React from 'react';
import {ListItem} from 'material-ui/List';
import withState from 'recompose/withState';
import compose from 'recompose/compose';
import withHandlers from 'recompose/withHandlers';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';
import {ReactHeight} from 'react-height';


const effects=(visible, size) => {
    const overflow='hidden'
    return visible?Object.assign({}, 
        {overflow}, 
        {
            height:size, 
            transition:"150ms cubic-bezier(.755, .05, .855, .06)"
        }
    ):Object.assign({}, 
        {overflow}, 
        {
            height:0,
            transition: "100ms cubic-bezier(.755, .05, .855, .06)"
        }
    )
    
}

const enhance=compose(
    withState('expanded', 'toggleExpand', false),
    withState('size', 'setSize', 0),
    withHandlers({
        handleExpand:({toggleExpand, expanded})=>()=>toggleExpand(!expanded),
    }),
    onlyUpdateForKeys(["expanded"])
)

const ExpandingListItem=(props)=>{
    const {expanded, handleExpand, size, setSize, toggleExpand, listChildren, children, ...rest}=props;
    return(
        <div>
            <ListItem {...rest} onTouchTap={handleExpand}>
                {listChildren}
            </ListItem>
            <ReactHeight 
                style={effects(expanded, size)} 
                onHeightReady={height=>setSize(height)}  
                getElementHeight={el=>el.scrollHeight}
            >
                {children}
            </ReactHeight>
        </div>
    )
}
export default enhance(ExpandingListItem)