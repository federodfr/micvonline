import React, {useState, useRef} from 'react'
import styled from 'styled-components'



const Header = () => {

    const [search, setSearch] = useState('')

    const inputSearch = useRef(null)

    const handleSearchOnChange = evt => {
        setSearch(evt.target.value)
    }

    const handleSearchOnClick = evt => {
        evt.preventDefault()

        if(search.trim() === ''){
            inputSearch.current.focus() = "red"
        }
    }

    return(
        <HeaderContainer>
            <LeftHeader>
                <FastSearchContainer>
                    <Search type='text' placeholder="Search" ref={inputSearch}onChange={ evt => handleSearchOnChange(evt)}/>
                    <SearchButton onClick={evt => handleSearchOnClick(evt)}>icon</SearchButton>
                </FastSearchContainer>
            </LeftHeader>
            <CenterHeader>
                <Anchor href="#">Filter {'&'} Search</Anchor>
                <Anchor href="#">Fav's</Anchor>
                <Anchor href="#">My CV</Anchor>
            </CenterHeader>
            <RightHeader>
                <LogInButton>Log in</LogInButton>
                <CreateButton >Create account</CreateButton>
            </RightHeader>
        </HeaderContainer>
    )
}

export default Header


const HeaderContainer = styled.div`
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
    background-color: #f3f3f3;
    color: white;
    border: none;
    border-bottom-left-radius: 8px;
    border-top-left-radius: 8px;
    padding: 2px 8px;
    font-size: 16px;
    ::placeholder{
        color: #666666;
    }
`

const SearchButton = styled.button`
    height: 22px;
    padding: none;
    border: none;
    border-left: 1px solid #666666;
    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;
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