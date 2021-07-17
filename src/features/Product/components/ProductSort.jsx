import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs } from '@material-ui/core';

ProductSort.propTypes = {
    curentSort: PropTypes.string.isRequired,
    onChange: PropTypes.func,
};

function ProductSort({ curentSort, onChange }) {
    const handleSortChange = (event, newValue) => {
        if (onChange) onChange(newValue)
    }
    return (
        <Tabs
            value={curentSort}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleSortChange}
            aria-label="disabled tabs example"
        >
            <Tab label="Giá thấp tới cao" value="salePrice:ASC"></Tab>
            <Tab label="Giá cao xuống thấp" value="salePrice:DESC"></Tab>
        </Tabs>
    );
}

export default ProductSort;