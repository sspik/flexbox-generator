import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper/Paper";


const styles = theme => ({

    pixels: {
        display: 'flex',
        overflowY: 'hidden',
        flexDirection: 'row',
        justifyContent: 'right',
        height: 100 + '%',
    },

    pointsContainer: {
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'hidden',
        textAlign: 'right',
        marginTop: -7
    },
    scoreContainer: {
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'hidden',
        marginTop: -7
    },

    pointItem: {
        height: 10,
        maxHeight: 10,
        minHeight: 10,
        fontSize: 8,
    },

    scoreItem: {
        height: 100,
        maxHeight: 100,
        minHeight: 100,
        fontSize: 10,
    },
});


class VerticalLine extends React.Component{

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
                            <span className={classes.pointItem} key={i}>{i % 10 === 0 ? '—' : '   .'}</span>
                        )
                    }) }
                </div>
            </Paper>
        )
    }
}

VerticalLine.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(VerticalLine);