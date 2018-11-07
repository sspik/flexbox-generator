import React from 'react';
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core";
import Paper from "@material-ui/core/Paper/Paper";
import InputsParentBox from './inputsParentBox';
import InputsBox from './inputsBox';

const styles = theme => ({
    inputsPaper: {
        marginTop: 10,
        padding: 10,
    }
});

class Inputs extends React.Component{

    inputsParentBox(){
        let boxStyles = this.props.parentBox.styles;
        return(
            <InputsParentBox
                styles={ boxStyles }
                onChangeStyles={ this.props.onChangeStyles }
                activeBlockId={ this.props.activeBlockId }
            />
        )
    }

    inputsBox(){
        let box = this.props.boxes.filter(b => b.id === this.props.activeBlockId)[0];
        return(
            <InputsBox
                styles={ box.styles }
                text={ box.text }
                onChangeStyles={ this.props.onChangeStyles }
                activeBlockId={ this.props.activeBlockId }
            />
        )
    }

    render(){
        const { classes } = this.props;
        return (
            <Paper className={classes.inputsPaper}>
                { this.props.activeBlock === 'parentBox' ?
                    this.inputsParentBox() :
                    this.inputsBox()
                }
            </Paper>
        )
    }
}

Inputs.propTypes = {
    classes: PropTypes.object.isRequired,
    activeBlock: PropTypes.string.isRequired,
    activeBlockId: PropTypes.string.isRequired,
    boxes: PropTypes.array,
    parentBox: PropTypes.object.isRequired,
    onChangeStyles: PropTypes.func.isRequired
};

export default withStyles(styles)(Inputs);