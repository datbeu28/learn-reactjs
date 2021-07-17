import { Box, Container, Grid, LinearProgress, makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import AddToCartForm from '../components/AddToCartForm';
import ProductInfo from '../components/ProductInfo';
import ProductMenu from '../components/ProductMenu';
import ProductThumbnail from '../components/ProductThumbnail';
import useProductDetail from '../hooks/useProductDetail';
import { Route, Switch } from 'react-router-dom';
import ProductDescription from '../components/ProductDescription';
import ProductAdditional from '../components/ProductAdditional';
import ProductReviews from '../components/ProductReviews';

const useStyles = makeStyles(theme => ({
    root: {},
    left: {
        width: '400px',
        padding: theme.spacing(1.5),
        borderRight: `1px solid ${theme.palette.grey[300]}`,

    },
    right: {
        flex: '1 1 0',
        padding: theme.spacing(1.5),
    },
    loading: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
    },

}));

DetailPage.propTypes = {

};

function DetailPage() {
    const classes = useStyles();
    const {
        params: { productId },
        url
    } = useRouteMatch();

    const { product, loading } = useProductDetail(productId);
    if (loading) {
        return <Box className={classes.loading}>
            <LinearProgress />
        </Box>
    }

    const handleAddToCartSubmit = (formValues) => {

    }

    return (
        <Box className={classes.root}>
            <Container>
                <Paper elevation={0}>
                    <Grid container>
                        <Grid item className={classes.left}>
                            <ProductThumbnail product={product} />
                        </Grid>
                        <Grid item className={classes.right}>
                            <ProductInfo product={product} />
                            <AddToCartForm onSubmit={handleAddToCartSubmit} />
                        </Grid>
                    </Grid>
                </Paper>
                <ProductMenu />

                <Switch>
                    <Route exact path={url}>
                        <ProductDescription product={product} />
                    </Route>

                    <Route exact path={`${url}/additional`} component={ProductAdditional}>
                        <ProductAdditional product={product} />
                    </Route>

                    <Route exact path={`${url}/reviews`} component={ProductReviews}>
                        <ProductDescription product={product} />
                    </Route>
                </Switch>
            </Container>
        </Box>
    );
}

export default DetailPage;