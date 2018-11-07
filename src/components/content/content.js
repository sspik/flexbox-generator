import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper/Paper";
import HorizontalLine from './horizontalLine';
import VerticalLine from './verticalLine';

const styles = theme => ({
    content: {
        display: 'grid',
        height: 90 + 'vh',
        gridTemplateColumns: '50px 2fr',
        gridTemplateRows: '30px 1.7fr',
    },

    blocksContainer: {
        margin: 0,
        padding: 0,
    },

    parentBox: {
        backgroundColor: '#b0c3e4',
    },
    box:{
        backgroundColor: '#f4ddca',
    }

});


class Content extends React.Component {

    render(){
        const { classes, blocks } = this.props;
        return(
            <Paper className={classes.content}>
                <div />
                <HorizontalLine/>
                <VerticalLine/>
                <div className={classes.blocksContainer}>
                    <div style={{...blocks.parentBox.styles}} className={classes.parentBox}>
                        { blocks.boxes.map(box => <div key={`div-${box.id}`} style={{...box.styles}} className={classes.box}>{ box.text }</div>) }
                    </div>
                </div>
            </Paper>
        )
    }
}

Content.propTypes = {
    classes: PropTypes.object.isRequired,
    blocks: PropTypes.object.isRequired
};

export default withStyles(styles)(Content);