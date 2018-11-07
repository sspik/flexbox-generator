export default {
    parentBoxStyles: {
        width: 'auto',
        height: '200px',
        minWidth: 0,
        maxWidth: null,
        minHeight: 0,
        maxHeight: null,
        margin: 0,
        padding: 0,
        display: 'flex',
        textAlign: 'inherit',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        alignContent: 'stretch'
    },
    boxStyles: {
        width: 'auto',
        height: 'auto',
        minWidth: 0,
        maxWidth: null,
        minHeight: 0,
        maxHeight: null,
        margin: 0,
        padding: 0,
        display: 'flex',
        textAlign: 'inherit',
        alignSelf: 'auto',
        order: 0,
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: 'auto'
    }
};

export const listChoices = {
    alignSelf: ['auto', 'flex-start', 'flex-end', 'center', 'stretch', 'baseline'],
    flexDirection: ['row', 'row-reverse', 'column', 'column-reverse'],
    flexWrap: ['wrap', 'nowrap'],
    justifyContent: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'],
    alignItems: ['flex-start', 'flex-end', 'center', 'stretch', 'baseline'],
    alignContent: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch'],
    display: ['block', 'flex'],
    textAlign: ['left', 'right', 'center', 'justify', 'inherit']
};
