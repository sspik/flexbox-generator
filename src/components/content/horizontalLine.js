import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper/Paper";


const styles = theme => ({

    pixels: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'flex-end',
        overflowX: 'hidden',
        paddingBottom: 2,
        userSelect: null
    },

    pointsContainer: {
        display: 'flex',
        alignItems: 'flex-end',
        overflowX: 'hidden',
    },
    scoreContainer: {
        display: 'flex',
        alignItems: 'flex-end',
        overflowX: 'hidden',
    },

    pointItem: {
        width: 10,
        maxWidth: 10,
        minWidth: 10,
        fontSize: 8,
    },

    scoreItem: {
        width: 100,
        maxWidth: 100,
        minWidth: 100,
        fontSize: 10,
    },
});


class HorizontalLine extends React.Component{

    render(){
        const { classes } = this.props;
        return (
            <Paper className={classes.pixels}>
                <div className={classes.scoreContainer}>
                    { [...Array(35).keys()].map((g, i) => {
                        return (
                            <span className={classes.scoreItem} key={i}>{i !== 0 ? `${i * 100}px` : null}</span>
                        )
                    }) }
                </div>
                <div className={classes.pointsContainer}>
                    { [...Array(350).keys()].map((g, i) => {
                        return (
                            <span className={classes.pointItem} key={i}>{i % 10 === 0 ? '|' : '.'}</span>
                        )
                    }) }
                </div>
            </Paper>
        )
    }
}

HorizontalLine.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HorizontalLine);