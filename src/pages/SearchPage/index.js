import Navbar from '../../components/organisms/Navbar'
import Footer from '../../components/molecules/Footer';
import List from '../../components/molecules/JobList';
const Search = () => {
    return (
        <>
            <Navbar></Navbar>
            <List></List>
            <Footer
                style={{ position: 'absolute', bottom: 0 }}
            ></Footer>
        </>
    );
};

export default Search;