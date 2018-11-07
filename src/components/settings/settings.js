import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Inputs from './inputs'

import PatentBox from './parentbox';
import Box from "./box";
import Paper from "@material-ui/core/Paper/Paper";

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
        padding: 1
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

class Settings extends React.Component{

    constructor(props){
        super(props);
        this.handleDeactivate = this.handleDeactivate.bind(this);
    }

    handleDeactivate(){
        this.props.onActive('');
    }

    render(){
        const { classes, blocks } = this.props;
        return(
            <div className={classes.settings}>
                <Paper elevation={ blocks.parentBox.active ? 5 : 1} className={classes.parentBox} onClick={this.handleClick}>
                    <PatentBox
                        id={ blocks.parentBox.id }
                        onActive={ this.props.onActive }
                        onAdd={ this.props.onAdd }
                        onCopy={ this.props.onCopy }
                        onDelete={ this.props.onDelete }
                    />
                    {
                        blocks.boxes.map(x => {
                            return (
                                <Box
                                    key={x.id}
                                    id={x.id}
                                    name={x.name}
                                    active={x.active}
                                    onActive={this.props.onActive}
                                    onCopy={this.props.onCopy}
                                    onDelete={this.props.onDelete}
                                />
                            )
                        })
                    }
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
    activeBlockId: PropTypes.string.isRequired
};

export default withStyles(styles)(Settings);