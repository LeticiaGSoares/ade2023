import {
    PrimaryBtn, SecondaryBtn,
    Logo, Footer, SocialMedia,
    Header, Menu, MenuLink,
    GalleryGrid,Post ,
    Modal, ModalContent, Form
} from './assets/styles/styles.js'
import axios from 'axios'
import {useState, useEffect} from 'react'
import Icones from './assets/Icones/index.js'
const baseUrl = 'http://localhost:3333'

const App = () => {
    const [isLoginOpen, setIsLoginOpen] = useState(false)
    const [isLogged, setIsLogged] = useState(false)
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=> {
        const fetchData = async () => {
            const posts = await axios.get(baseUrl)
            setData(posts.data.publicacoes)
            setIsLoading(false)
            
        }
        
        fetchData()
    }, [])

    const LoginModal = () => {
        const [email, setEmail] = useState('')
        const [senha, setSenha] = useState('')
        const [errors, setErrors] = useState({})
        
        const handleSubmit = async (e) => {
            e.preventDefault()

            const newErrors = {}
            if(!email) newErrors.email = true
            if(!senha) newErrors.senha = true

            setErrors(newErrors)

            if(Object.keys(newErrors).length === 0){
                console.log("Deu tudo certo")
                const token = await axios.post(`${baseUrl}/login`, {email, senha})
                localStorage.setItem('token', token.data)

                setIsLogged(true)
            }
        }

        return (
            <Modal>
                <ModalContent>
                    <h3>Login</h3>
                    <Form onSubmit={handleSubmit}>
                        <label>Usuário</label>
                        <input 
                            type="email"
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                            style={
                                {
                                    borderColor: errors.email ? "#C60E0E" : "#161616"
                                }
                            }
                            />
                        <br />
                        <label>Senha</label>
                        <input 
                            type="password"
                            value={senha}
                            onChange={(e)=> setSenha(e.target.value)}
                            style={
                                {
                                    borderColor: errors.senha ? "#C60E0E" : "#161616"
                                }
                            }
                        />
                        <br />
                        <div>
                            <SecondaryBtn onClick={() => setIsLoginOpen(false)}>Cancelar</SecondaryBtn>
                            <PrimaryBtn onClick={handleSubmit}>Entrar</PrimaryBtn>
                        </div>
                    </Form>
                </ModalContent>
            </Modal>
        )
    }

    const Publicacao = (image) => {
        return (
            <Post src={image}>
            </Post>
        )
    }

    return (
        <>
            {
                isLoginOpen && <LoginModal />
            }
            <Header>
                    <Logo>FOTOGRAFIA GELADA</Logo>
                    <PrimaryBtn onClick={()=> setIsLoginOpen(true)}>Login</PrimaryBtn>
                </Header>
                <Menu>
                    <a href="#a">Home</a>
                </Menu>
                <GalleryGrid>
                    {/* {
                        isLoading ? (
                            <p>Carregando publicações</p>
                        ) : (
                            data.map(e => {
                                <Publicacao image={e.imagem}/>
                            })
                        )
                    } */}
                    <Publicacao />
                    <Publicacao />
                    <Publicacao />
                    <Publicacao />
                    <Publicacao />
                    <Publicacao />
                    <Publicacao />
                    <Publicacao />
                </GalleryGrid>
                <Footer>
                    <Logo>FOTOGRAFIA GELADA</Logo>
                    <SocialMedia>
                        <a href="#a"><img src={Icones.Twitter} /></a>
                        <a href="#a"><img src={Icones.Instagram} /></a>
                        <a href="#a"><img src={Icones.Youtube} /></a>
                        <a href="#a"><img src={Icones.Tiktok} /></a>
                    </SocialMedia>
                    <h4>Copyright - 2023</h4>
                </Footer>
        </>
    )
}
export default App