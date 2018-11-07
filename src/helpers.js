import defaultStyles from "./defaultStyles";

export const guid = () => {
    const s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
};

export const genDefaultBoxes = n => {
    let boxes = [];
    for (let i = 0; i < n ;i++){
        boxes.push({
            styles: {
                ...defaultStyles.boxStyles
            },
            name: `Item ${i + 1}`,
            order: i,
            id: guid(),
            active: false,
            text: `Item ${i + 1}`
        })
    }
    return boxes;
};

export const defaultStyleName = style => {
    return style === style.toLowerCase() ? style :
        style.split('').map(s => s === s.toLowerCase() ? s : `-${s.toLowerCase()}`).join('')
};