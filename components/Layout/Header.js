import React, {useState} from 'react'
import {useRouter} from 'next/router'
import styled from 'styled-components'



const Header = () => {

    const [search, setSearch] = useState('')
    const [isVoid, setIsVoid] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [login, setLogin] = useState({
        username:'',
        password:''
    })


    const router = useRouter()

    const handleSearchOnChange = evt => {
        setIsVoid(false)
        setSearch(evt.target.value)
    }

    const handleSearchOnClick = evt => {
        evt.preventDefault()

        if(search.trim() === ''){
            setIsVoid(true)
            console.log(isVoid)
            return
        }

        router.push(`/?search=${search}`)
    }

    const handleLoginOnChange = evt => {
        setLogin({
            ...login,
            [evt.target.name]: evt.target.value
        })
    }

    const handleLoginOnClick = evt => {
        evt.preventDefault();
        alert(login.username + " " + login.password)
    }

    return(
        <HeaderContainer>
            <ContentContainer>
                <LeftHeader>
                    <FastSearchContainer>
                        <Search 
                            isVoid={isVoid}
                            type='text' 
                            placeholder="Search" 
                            onChange={ evt => handleSearchOnChange(evt)}
                        />
                        <SearchButton isVoid={isVoid} onClick={evt => handleSearchOnClick(evt)}>icon</SearchButton>
                    </FastSearchContainer>
                </LeftHeader>
                <CenterHeader>
                    <Anchor href="#">Filter {'&'} Search</Anchor>
                    <Anchor href="#">Fav's</Anchor>
                    <Anchor href="#">My CV</Anchor>
                </CenterHeader>
                <RightHeader>
                    <LogInButton onClick={() => setShowModal(!showModal)}>Log in</LogInButton>
                    <CreateButton >Create account</CreateButton>
                </RightHeader>
            </ContentContainer>
            {showModal && 
            <LoginContainer>
                <LoginContent>
                    <InputContainer>
                        <LoginLabel>
                            User 
                        </LoginLabel>
                        <LoginInput 
                            type='text'
                            name='username'
                            onChange={evt => handleLoginOnChange(evt)}
                        />
                    </InputContainer>
                    <InputContainer>
                        <LoginLabel>
                            Password
                        </LoginLabel>
                        <LoginInput 
                            type='password'
                            name='password'
                            onChange={evt => handleLoginOnChange(evt)}/>
                    </InputContainer>
                    <ButtonLoggerContainer>
                        <ButtonLogger onClick={evt => handleLoginOnClick(evt)}>Log in</ButtonLogger>
                    </ButtonLoggerContainer>
                </LoginContent>
            </LoginContainer>}
        </HeaderContainer>
    )
}

export default Header


const HeaderContainer = styled.div`

`

const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 1px solid grey;
    padding: 8px 32px;
    background-color: black;
    color: white;
    
`

const LeftHeader = styled.div`
    display: flex;
    flex-direction: row;
`

const CenterHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const RightHeader = styled.div`

`

const FastSearchContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const Search = styled.input`
    height: 100%;
    background-color: #f3f3f3;
    color: #666666;
    border-bottom-left-radius: 8px;
    border-top-left-radius: 8px;
    padding: 2px 8px;
    font-size: 16px;
    border: ${({ isVoid }) => isVoid ? '2px solid red' : 'none'};
    border-right: none !important;
    ::placeholder{
        color: #666666;
    }
    :focus{
        outline: none;
        box-shadow: none;
    }
`

const SearchButton = styled.a`
    height: 100%;
    border-left: 1px solid #666666 !important;
    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;
    text-decoration: none;
    background-color: #f3f3f3;
    padding: 2px 8px;
    display: flex;
    align-items: center;
    border: ${({ isVoid }) => isVoid ? '2px solid red' : 'none'};
    color: #666666;
    :hover{
        cursor: pointer;
    }
    :focus{
        outline: none;
        box-shadow: none;
    }
`

const Anchor = styled.a`
    text-decoration: none;
    color: #f3f3f3;
    font-size: 20px;
    font-weight: 700;
    padding: 0 8px;
    :hover{
        color: #666666
    }

`

//Trigger a modal
const LogInButton = styled.button`
    background-color: #f3f3f3;
    color: #666666;
    border: none;
    font-size: 20px;
    font-weight: 700;
    border-radius: 4px;
    padding: 4px 10px;
    margin-right: 4px;
    :focus{
        outline: none;
        box-shadow: none;
    }
    :hover{

        cursor: pointer;
    }
`
//Redirect to /create-account
const CreateButton = styled.button`
    background-color: #666666;
    color: #f3f3f3;
    border: none;
    font-size: 20px;
    font-weight: 700;
    border-radius: 4px;
    padding: 4px 10px;
    margin-left: 4px;
    :focus{
        outline: none;
        box-shadow: none;
    }
    :hover{
        cursor: pointer;
    }
`

const LoginContainer = styled.div`
    position: absolute;
    right: 0;
`

const LoginContent = styled.div`
    width: 300px; 
    background-color: #f3f3f3;
    padding: 32px;
    margin: 0 16px;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;

`

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 8px 0;
`

const LoginLabel = styled.label`
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 4px;
`

const LoginInput = styled.input`
    border: none;
    padding: 8px 4px;
    border-radius: 8px;
    background-color: #ffffff;
    font-size: 16px;
    :focus{
        outline: none;
        box-shadow: none;
    }
`

const ButtonLoggerContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 24px;
`

const ButtonLogger = styled.button`
    font-size: 16px;
    background-color: none;
    border: 1px solid #666666;
    border-radius: 6px;
    padding: 4px 8px;
    :focus{
        outline: none;
        box-shadow: none;
    }
    :hover{
        background-color: #666666;
        cursor: pointer;
    }
`