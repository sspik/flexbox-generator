import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Inputs from './inputs'

import PatentBox from './parentbox';
import Box from "./box";
import Paper from "@material-ui/core/Paper/Paper";
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

const styles = theme => ({
    settings: {
        margin: '-5px 0px -5px -5px'
    },
    paperBox: {
        display: 'flex',
        flexDirection: 'column',
    },
    paperInputs: {
        marginTop: 10
    },
    parentBox: {
        marginTop: 5,
        padding: 1,

    },
    parentBoxTitle: {
        margin: 8,
        display: 'flex',
        flexDirection: 'row'
    },
    parentBoxTitleText: {
        flex: '1 1 auto',
        alignSelf: 'center'
    },
    button: {
        margin: 0,
    }
});


const SortableItem = SortableElement(({...props}) =>
    <Box
        key={props.value.id}
        id={props.value.id}
        name={props.value.name}
        active={props.value.active}
        onActive={props.onActive}
        onCopy={props.onCopy}
        onDelete={props.onDelete}
        index={props.value.order}
    />
);

const SortableList = SortableContainer(({...props}) => {
    return (
        <div>
            {props.items.map((value, index) => (
                <SortableItem
                    key={`item-${value.id}`}
                    index={index}
                    value={value}
                    onSortEnd={props.onSortEnd}
                    onActive={props.onActive}
                    onCopy={props.onCopy}
                    onDelete={props.onDelete}
                />
            ))}
        </div>
    );
});


class Settings extends React.Component{

    constructor(props){
        super(props);
        this.handleDeactivate = this.handleDeactivate.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleDeactivate(){
        this.props.onActive('');
    }


    onSortEnd = ({oldIndex, newIndex}) => {
        this.props.onMoveMox(arrayMove(this.props.blocks.boxes, oldIndex, newIndex));
    };

    handleClick(event){
        return event.currentTarget === event.target ? this.props.onActive(this.props.blocks.parentBox.id) : null
    }

    render(){
        const { classes, blocks } = this.props;
        return(
            <div className={classes.settings} >
                <Paper elevation={ blocks.parentBox.active ? 5 : 1} className={classes.parentBox} onClick={this.handleClick}>
                    <PatentBox
                        id={ blocks.parentBox.id }
                        onActive={ this.props.onActive }
                        onAdd={ this.props.onAdd }
                        onCopy={ this.props.onCopy }
                        onDelete={ this.props.onDelete }
                    />
                    <SortableList
                        items={blocks.boxes}
                        onSortEnd={this.onSortEnd}
                        onActive={this.props.onActive}
                        onCopy={this.props.onCopy}
                        onDelete={this.props.onDelete}
                        lockAxis="y"
                    />
                </Paper>
                <Inputs
                    activeBlock={ this.props.activeBlock }
                    activeBlockId={ this.props.activeBlockId }
                    boxes={ blocks.boxes }
                    parentBox={ blocks.parentBox }
                    onChangeStyles={ this.props.onChangeStyles }
                />
            </div>
        )
    }
}

Settings.propTypes = {
    classes: PropTypes.object.isRequired,
    onActive: PropTypes.func.isRequired,
    onAdd: PropTypes.func.isRequired,
    onCopy: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onChangeStyles: PropTypes.func.isRequired,
    blocks: PropTypes.object.isRequired,
    activeBlock: PropTypes.string.isRequired,
    activeBlockId: PropTypes.string.isRequired,
    onMoveMox: PropTypes.func.isRequired
};

export default withStyles(styles)(Settings);