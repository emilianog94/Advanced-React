import Page from '../components/Page';

const MyApp = (props) => {
    const {Component , pageProps} = props;

    return(
        <Page>
            <Component {...pageProps}/>
        </Page>
    )
}

export default MyApp;