import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import React, { useEffect, useState } from 'react';
import productApi from '../../../api/productApi';
import ProductFiters from '../components/ProductFiters';
import ProductList from '../components/ProductList';
import ProductSkeletonList from '../components/ProductSkeletonList';
import ProductSort from '../components/ProductSort';

const useStyles = makeStyles(theme => ({
    root: {},
    left: {
        width: '250px',

    },
    right: {
        flex: '1 1 0',
    },
    pagination: {
        display: 'flex',
        flextFlow: 'row nowrap',
        justifyContent: 'center',
        marginTop: '20px',
        paddingBottom: '15px',
    }
}));

ListPage.propTypes = {

};

function ListPage(props) {
    const classes = useStyles();
    const [productList, setProductList] = useState([]);
    const [pagination, setPagination] = useState({
        limit: 9,
        total: 10,
        page: 1,
    });
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({
        _page: 1,
        _limit: 9,
        _sort: 'salePrice:ASC',
    });


    useEffect(() => {
        (async () => {
            try {
                const { data, pagination } = await productApi.getAll(filters);
                setProductList(data);
                setPagination(pagination);

            } catch (error) {
                console.log('Failed to fetch product list: ', error);
            }
            setLoading(false);
        })();
    }, [filters]);

    const handlePageChance = (e, page) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            _page: page,
        }));
    }
    const handleSortChance = (newSortValue) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            _sort: newSortValue,
        }));
    };
    const handleFiltersChance = (newFilters) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            ...newFilters,
        }));
    }

    return (
        <Box>
            <Container>
                <Grid container spacing={1}>
                    <Grid item className={classes.left} >
                        <Paper elevation={0}>
                            <ProductFiters filters={filters} onChange={handleFiltersChance} />
                        </Paper>
                    </Grid>
                    <Grid item className={classes.right} >
                        <Paper elevation={0}>
                            <ProductSort curentSort={filters._sort} onChange={handleSortChance} />
                            {loading ? <ProductSkeletonList length={9} /> : <ProductList data={productList} />}
                            <Box className={classes.pagination}>
                                <Pagination color="primary"
                                    count={Math.ceil(pagination.total / pagination.limit)}
                                    page={pagination.page}
                                    onChange={handlePageChance}>
                                </Pagination>
                            </Box>
                        </Paper>

                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ListPage;