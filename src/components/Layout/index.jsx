import Footer from "./Footer"
import Header from "./Header"

const Index=(props)=>{
    return<>
    <Header/>
    {
        props.children
    }
    <Footer/>
    </>
}


export default Index