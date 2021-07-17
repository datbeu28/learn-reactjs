import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import FilterByCategory from './Filters/FilterByCategory';
import FilterByPrice from './Filters/FilterByPrice';

ProductFiters.propTypes = {
    filters: PropTypes.object.isRequired,
    onChange: PropTypes.func,
};

function ProductFiters({ filters, onChange }) {
    const handleCategoryChance = (newCategory) => {
        if (!onChange) return;
        const newFilters = {
            "category.id": newCategory.id,
            "category.name": newCategory.name,
        };
        onChange(newFilters);
    }

    const handlePriceChange = (values) => {
        if (onChange) {
            onChange(values);
        };
    }

    return (
        <Box>
            <FilterByCategory onChange={handleCategoryChance} />
            <FilterByPrice onChange={handlePriceChange} />
        </Box>
    );
}

export default ProductFiters;