
import Hello from './Hello';
import React, { useRef, useState } from 'react';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  })

  const {username, email} = inputs

  const onChange = (e) => {
    const {name, value} = e.target
    setInputs({
      ...inputs,
      [name] : value
    })
  }

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active : false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active : false
    }
  ]);

  const nextId = useRef(4)

  const onCreate = () => {
    const user = {
      id :nextId.current,
      username,
      email
    }
    setUsers([...users,user])
    // setUsers(users.concat(user))
    setInputs({
      username:'',
      email:''
    })
    nextId.current += 1
  }
 
  const onRemove = (id) => {
    // useState는 기존 값을 바꾸면 안되지만 filter는 새로운 배열을 만드는 것이기 때문이 가능
    setUsers(users.filter(user => user.id != id))
  }

  const onToggle = (id) => {
    setUsers(
      users.map(user => 
        user.id === id ? {...user, active : !user.active} : user
      )
    )
  }

  return (
  // <Wrapper>
  //   <Hello name="react" color="red" isSpecial/>
  //   <Hello color="pink"/>
  // </Wrapper>

  //   <Counter/>

  // <InputSample/>
  <>
  <CreateUser 
  username={username}
  email={email}
  onChange={onChange}
  onCreate={onCreate}
  />
  <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
  </>

  );
}

export default App;
