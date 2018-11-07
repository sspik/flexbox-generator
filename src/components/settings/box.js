import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper/Paper";
import PropTypes from "prop-types";
import Typography from '@material-ui/core/Typography';
import FileCopy from '@material-ui/icons/FileCopy';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


const styles = theme => ({
    box: {
        padding: 5,
        margin: 10,
        height: 40,
        display: 'flex',
        flexDirection: 'row'
    },
    text: {
        flex: '1 1 auto',
        padding: 4
    },
    button: {
        margin: 0,
    }
});

class Box extends React.PureComponent{

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleCopy = this.handleCopy.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }


    handleClick(event){
        return event.currentTarget === event.target ? this.props.onActive(this.props.id) : null
    }

    handleCopy(){
        this.props.onCopy(this.props.id)
    }

    handleDelete(){
        this.props.onDelete(this.props.id)
    }

    render(){
        const { classes, active } = this.props;
        return (
            <Paper
                className={classes.box}
                elevation={active ? 5 : 1}
                onMouseDown={this.handleClick}
            >
                <Typography
                    align="left"
                    component="h6"
                    variant="h6"
                    className={classes.text}
                    onMouseDown={this.handleClick}
                >
                    { this.props.name }
                </Typography>
                <div>
                    <IconButton aria-label="copy" className={classes.button} onClick={this.handleCopy}>
                        <FileCopy fontSize="small" />
                    </IconButton>
                </div>
                <div>
                    <IconButton aria-label="Delete" className={classes.button} onClick={this.handleDelete}>
                        <DeleteIcon fontSize="small" />
                    </IconButton>
                </div>
            </Paper>
        )
    }
}

Box.propTypes = {
    classes: PropTypes.object.isRequired,
    onActive: PropTypes.func.isRequired,
    onCopy: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default withStyles(styles)(Box);