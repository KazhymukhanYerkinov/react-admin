import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { chackAuth, load_user } from '../redux/auth-reducer';


const Layout = (props) => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                await props.load_user();
            } catch (err) {

            }
        }

        fetchData();
    }, []);

    return (
        <>
            {props.children}
        </>
    );
};

export default connect(null, { chackAuth, load_user })(Layout);