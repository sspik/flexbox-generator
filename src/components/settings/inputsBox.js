import React from 'react';
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import { defaultStyleName, guid } from '../../helpers'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { listChoices } from '../../defaultStyles'



const styles = theme => ({
    inputsContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    textField: {
        width: 30 + '%',
    },
    textarea: {
        width: 100 + '%'
    },
    formControl: {
        width: 30 + '%',
        alignSelf: 'flex-end',
        marginBottom: 8
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

class InputsBox extends React.Component{

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, type=null){
        if (!type) type = event.target.id;
        const val = event.target.value;
        let styles = {...this.props.styles};
        let text;
        if (type === 'textArea'){
            text = val;
        } else {
            styles[type] = val;
            text = null;
        }
        const params = {
            blockType: 'box',
            blockId: this.props.activeBlockId,
            styles,
            text: text

        };
        this.props.onChangeStyles(params);
    }

    render(){
        const { classes, styles } = this.props;
        return(
            <div className={classes.inputsContainer}>
                { Object.keys(styles).map(s => {
                    return Object.keys(listChoices).indexOf(s) === -1 ?
                        <TextField
                            key={s}
                            id={s}
                            label={defaultStyleName(s)}
                            className={classes.textField}
                            value={ styles[s] ? styles[s] : 'none' }
                            margin="normal"
                            onChange={ this.handleChange }
                        /> :
                        <FormControl className={classes.formControl} key={s}>
                            <InputLabel htmlFor={s}>{defaultStyleName(s)}</InputLabel>
                            <Select
                                value={ styles[s] ? styles[s] : 'none' }
                                fullWidth
                                onChange={ event => this.handleChange(event, s) }
                                inputProps={{
                                    name: s,
                                    id: s
                                }}
                            >
                                { listChoices[s].map(item => <MenuItem key={guid()} value={item}>{item}</MenuItem>) }
                            </Select>
                        </FormControl>
                }) }
                <TextField
                    key={`textArea-${this.props.id}`}
                    id={'textArea'}
                    label='Text'
                    margin="normal"
                    onChange={ event => this.handleChange(event, 'textArea') }
                    value={this.props.text}
                    className={classes.textarea}
                />
            </div>
        )
    }
}

InputsBox.propTypes = {
    classes: PropTypes.object.isRequired,
    styles: PropTypes.object.isRequired,
    activeBlockId: PropTypes.string.isRequired,
    onChangeStyles: PropTypes.func.isRequired
};

export default withStyles(styles)(InputsBox);