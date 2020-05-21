import React, { useState, useCallback, useEffect } from 'react'
import { connect } from 'react-redux'

import {
  StyledExplorer,
  StyledExplorerForm,
  StyledExplorerInput,
  StyledExplorerAction,
  StyledExplorerLabel,
  StyledExplorerLoader,
} from './styles'
import Input from '../Input'
import Button from '../Button'
import Collapse from '../Collapse'
import Repositories from '../Repositories'
import fetchUsers from '../../actions/fetchUsers'
import setError from '../../actions/setError'
import addUsers from '../../actions/addUsers'

const Explorer = ({ users, fetchUsers, error, setError, addUsers }) => {
  const [inputValue, setInputValue] = useState('')
  const [isLoader, setIsLoader] = useState(false)
  const [userName, setUserName] = useState('')

  const handleForm = useCallback(
    (e) => {
      e.preventDefault()
      if (error) setError({ fetchUsersError: '' })
      if (users?.length) addUsers([])
      setIsLoader(true)
      fetchUsers(inputValue)
      setUserName(inputValue)
    },
    [fetchUsers, inputValue, error, setError, addUsers, users],
  )
  useEffect(() => {
    if (users.length || error) {
      setIsLoader(false)
    }
  }, [users, error])

  const handleInputChange = useCallback((e) => {
    setInputValue(e.currentTarget.value)
  }, [])

  const renderData = useCallback(
    (users) =>
      users.map(({ id, login, repositories }) => (
        <Collapse key={id} title={login}>
          <Repositories repositories={repositories} />
        </Collapse>
      )),
    [],
  )

  return (
    <StyledExplorer>
      <StyledExplorerForm onSubmit={handleForm}>
        <StyledExplorerInput>
          <Input
            placeholder="Enter username"
            name="search"
            handleInputChange={handleInputChange}
            inputValue={inputValue}
          />
        </StyledExplorerInput>
        <StyledExplorerAction>
          <Button disabled={isLoader}>Submit</Button>
        </StyledExplorerAction>
      </StyledExplorerForm>
      {isLoader && <StyledExplorerLoader>Loading...</StyledExplorerLoader>}
      {error && <StyledExplorerLabel>{error}</StyledExplorerLabel>}
      {users?.length > 0 && !isLoader && (
        <>
          <StyledExplorerLabel>
            Showing users for '{userName}'
          </StyledExplorerLabel>
          {renderData(users)}
        </>
      )}
    </StyledExplorer>
  )
}

const mapStateToProps = (state) => ({
  users: state.users,
  error: state.errors?.fetchUsersError,
})
const mapDispatchToProps = { fetchUsers, setError, addUsers }

export default connect(mapStateToProps, mapDispatchToProps)(Explorer)
