import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography/Typography";
import IconButton from '@material-ui/core/IconButton';
import AddBox from '@material-ui/icons/AddBox';


const styles = theme => ({
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

class PatentBox extends React.PureComponent{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        return event.currentTarget === event.target ? this.props.onActive(this.props.id) : null
    }

    render(){
        const { classes } = this.props;

        return (
            <div className={classes.parentBoxTitle} onClick={this.handleClick}>
                <Typography
                    variant="h6"
                    component="h6"
                    align="left"
                    onClick={this.handleClick}
                    className={classes.parentBoxTitleText}
                >
                    Parent
                </Typography>
                <div>
                    <IconButton aria-label="add" className={classes.button} onClick={this.props.onAdd}>
                        <AddBox fontSize="small" />
                    </IconButton>
                </div>
            </div>
        )
    }
}

PatentBox.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    onActive: PropTypes.func.isRequired,
    onAdd: PropTypes.func.isRequired,
    onCopy: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default withStyles(styles)(PatentBox);