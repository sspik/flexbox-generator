import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import Content from './content/content';
import Settings from './settings/settings';
import  defaultStyles from '../defaultStyles';

import { guid, genDefaultBoxes } from '../helpers'

const styles = theme => ({
    root: {
        flexGrow: 1,
        padding: 5,
        height: 90 + 'vh',
    },
    left: {

    }
});

const parentBlockId = guid();

class Container extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            activeBlock: 'parentBox',
            activeBlockId: parentBlockId,
            blocks: {
                parentBox: {
                    styles: {
                        ...defaultStyles.parentBoxStyles
                    },
                    id: parentBlockId,
                    active: true
                },
                boxes: genDefaultBoxes(4)
            }
        };
        this.handleActive = this.handleActive.bind(this);
        this.handleAddBox = this.handleAddBox.bind(this);
        this.handleCopyBox = this.handleCopyBox.bind(this);
        this.handleDeleteBox = this.handleDeleteBox.bind(this);
        this.handleChangeStyles = this.handleChangeStyles.bind(this);
    }


    handleActive(objectId) {
        let blocks = {...this.state.blocks};
        let activeBlock, activeBlockId;
        if (parentBlockId === objectId){
            blocks.parentBox.active = true;
            activeBlock = 'parentBox';
            activeBlockId = parentBlockId
        }
        blocks.boxes.forEach(a => {
            if (a.id === objectId){
                a.active = true;
                activeBlock = 'box';
                activeBlockId = a.id;
            } else {
                a.active = false;
            }
        });
        activeBlock === 'box' ? blocks.parentBox.active = false : blocks.parentBox.active = true;
        this.setState({blocks, activeBlock, activeBlockId})
    }

    handleAddBox(){
        let blocks = {...this.state.blocks};
        let box = {
            styles: {
                ...defaultStyles.boxStyles
            },
            name: `Item ${blocks.boxes.length + 1}`,
            id: guid(),
            active: false,
            text: `Item ${blocks.boxes.length + 1}`
        };
        blocks.boxes.push(box);
        this.setState({
            blocks
        })
    }

    handleCopyBox(boxId){
        let blocks = {...this.state.blocks};
        let box = {};
        box.id = guid();
        box.name = `Item ${blocks.boxes.length + 1}`;
        box.active = false;
        box.order = blocks.boxes.length;
        box.styles = blocks.boxes.filter(b => b.id === boxId)[0].styles;
        box.text = blocks.boxes.filter(b => b.id === boxId)[0].text;
        blocks.boxes.push(box);
        this.setState({
            blocks
        })
    }

    handleDeleteBox(boxId){
        let activeBlockId = this.state.activeBlockId;
        let activeBlock = this.state.activeBlock;
        if (activeBlockId === boxId){
            activeBlockId = parentBlockId;
            activeBlock = 'parentBox';
        }
        let blocks = this.state.blocks;
        blocks.boxes = blocks.boxes.filter(box => box.id !== boxId);
        this.setState({blocks, activeBlockId, activeBlock})
    }

    handleChangeStyles(params){
        let blocks = {...this.state.blocks};
        const { blockType, blockId, styles } = params;

        if (blockType === 'parentBox'){
            blocks.parentBox.styles = styles;
        } else if (blockType === 'box'){
            let boxIndex = blocks.boxes.indexOf(blocks.boxes.filter(b => b.id === blockId)[0]);
            params.text ? blocks.boxes[boxIndex].text = params.text :
            blocks.boxes[boxIndex].styles = styles
        }
        this.setState({ blocks })
    }

    render(){
        const { classes } = this.props;
        const { blocks, activeBlock, activeBlockId } = this.state;
        return(
            <Grid
                className={classes.root}
                container
                spacing={16}
            >
                <Grid
                    item
                    xs={9}
                    className={classes.left}
                >
                    <Content
                        blocks={this.state.blocks}
                    />
                </Grid>
                <Grid
                    item
                    xs={3}
                >
                    <Settings
                        blocks={blocks}
                        onActive={this.handleActive}
                        onAdd={this.handleAddBox}
                        onCopy={this.handleCopyBox}
                        onDelete={this.handleDeleteBox}
                        activeBlock={activeBlock}
                        activeBlockId={activeBlockId}
                        onChangeStyles={this.handleChangeStyles}
                    />
                </Grid>
            </Grid>
        )
    }
}

Container.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Container);