import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

const Home = () => {
  const [userInput, setUserinput]= useState('')
  const [todoList, setTodoList] = useState([])

  const clickHandler = (e)=>{
    e.preventDefault();
    setUserinput(e.target.value)
    // console.log(e.target.value);
  }
  const addList = (e)=>{
    e.preventDefault();
    setTodoList([userInput, ...todoList])


    setUserinput("")
  } 

  const setDel =(todo)=>{ 
    const updateArr = todoList.filter(todoItem => (todoList.indexOf(todoItem) != todoList.indexOf(todo)))
    setTodoList(updateArr)

  }
  return (
    <div className={styles.container}>
      <h1>To-Do App</h1>
      <input type="text" value={userInput} onChange={clickHandler} />
      <button onClick={addList}>Add</button>
      <ul>
        {
          todoList.length>0 ? todoList.map((todo,index)=>{
            return <li key={index} className= {styles.list}>{todo}
            <button className= {styles.btn} onClick ={(e)=>{e.preventDefault();setDel}}>delete</button></li>
          }): "Enter a new todo"
        }
      </ul>
    </div>
  )
}

export default Home
