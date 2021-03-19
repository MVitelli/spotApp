import React, { useState } from 'react';
import Header from './Header';
import Loader from './Loader';
import SearchForm from './SearchForm';
import {
    initiateGetResult,
} from '../actions/result';
import { connect } from 'react-redux';

const Dashboard = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('albums');

    const handleSearch = (searchTerm) => {
        setIsLoading(true);
        props.dispatch(initiateGetResult(searchTerm)).then(() => {
            setIsLoading(false);
            setSelectedCategory('albums');
        });
    };

    const setCategory = (category) => {
        setSelectedCategory(category);
    };

    const { albums, artists, playlist } = props;
    const result = { albums, artists, playlist };

    return (
        <div>
            <Header />
            <SearchForm handleSearch={handleSearch} />
            <Loader show={isLoading}>Loading...</Loader>
        </div>
    )


};

const mapStateToProps = (state) => {
    return {
        albums: state.albums,
        artists: state.artists,
        playlist: state.playlist
    };
};
export default connect(mapStateToProps)(Dashboard);