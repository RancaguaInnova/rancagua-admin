const rowStyle = (selectedRow) =>
    (record, index, defaultStyle = {}) => {
        let style = defaultStyle;
        if (record) if (selectedRow === record.id) {
            style = {
                ...style,
                backgroundColor: '#CDDC39',
            };
        }

        return style;
    };

export default rowStyle;
