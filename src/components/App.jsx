import React, { Component } from "react";

// import css from "./App.module.css"

//TASK 01

// import {Profile} from "./Task-01/Profile/Profile"
// import {Statistics} from "./Task-01/Statistics/Statistics"
// import {FriendList} from "./Task-01/FriendList/FriendList"
// import {TransactionHistory} from "./Task-01/TransactionHistory/TransactionHistory"

// import user from "./Task-01/Profile/user.json"
// import data from "./Task-01/Statistics/data.json"
// import friends from "./Task-01/FriendList/friends.json"
// import transactions from "./Task-01/TransactionHistory/transaction.json"


//  TASK 01 

// export const App = () => {

// const {username, location, avatar, stats, tag} = user

//   return(
//     <div>
//       <Profile   
//         username={username}
//         tag={tag}
//         location={location}
//         avatar={avatar}
//         stats={stats}
//       />
//       <Statistics title="Upload stats" stats={data} />
//       <FriendList friends={friends} />;
//       <TransactionHistory items={transactions} />;
//     </div>
    
//   )
// }



//TASK 02 FEEDBACK

// import {Statistics} from "./Task-02-feedback/Statistics/Statistics"
// import {FeedbackOptions} from "./Task-02-feedback/FeedbackOptions/FeedbackOptions"
// import {Section} from "./Task-02-feedback/Section/Section"
// import {Notification} from "./Task-02-feedback/Notification/Notification"


// export class App extends Component{

//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0
//   }

//   handleClick = (type) => {
//     this.setState((prevState) => ({ [type] : prevState[type] + 1}))
  
//   }

//   countTotalFeedback = () => {
//     const {good, neutral, bad} = this.state
//     return good + neutral + bad
//   }

//   countPositiveFeedbackPercentage = () => {
//     const totalCount = this.countTotalFeedback();
//     return Math.round((this.state.good * 100) / totalCount)
//   }

//   render(){
    
//     const {good, neutral, bad} = this.state

//     return(
//       <div className={css.box}>
//         <Section title="Please leave feedback">
//         <FeedbackOptions options={["good", "neutral" , "bad"]} onLeaveFeedback={this.handleClick} />
//         </Section> 

//         <Section title="Statistics">
//           {this.countTotalFeedback() ? (
//             <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />
//           ) : (
//             <Notification message="There is no feedback"/>
//           )}
//         </Section> 
//       </div>

      
//     )
//   }
// }



//TASK 02 - 03 PHONEBOOK

// import {ContactForm} from "./Task-02-phonebook/ContactForm/ContactForm"
// import {Filter} from "./Task-02-phonebook/Filter/Filter"
// import {ContactList} from "./Task-02-phonebook/ContactList/ContactList"

// const STORAGE_KEY = "contacts"
// export class App extends Component {

//   state = {
//     contacts: [],
//     filter: '',
    
//   }

//   componentDidMount(){
//     console.log("Pobieram dane na start")
//     const storage = localStorage.getItem(STORAGE_KEY)
//     this.setState({contacts : JSON.parse(storage)})

//   }
//   componentDidUpdate(){
//     console.log("Robie update")
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state.contacts))
//   }

//   addContact = (newContact) => {
//     this.setState((prevState) => ({contacts : [...prevState.contacts, newContact]}))
//   }
//   filterHandler = (e) => {
//     this.setState({filter : e.target.value})
//   }
//   deleteContact = (id) => {
//     const filteredContacts = this.state.contacts.filter((e) => 
//     e.id !== id)
//     this.setState({contacts : filteredContacts})
//   }


//   render(){

//     const {contacts, filter} = this.state

//     return(
//       <div className={css.box}>
//         <h1 className={css.title}>Phonebook</h1>
//         <ContactForm addContact={this.addContact} contacts={contacts}/>
       
//         <h1 className={css.title}>Contacts</h1>
//         <Filter filter={filter} filterHandler={this.filterHandler}/>
//         <ContactList contacts={contacts} filter={filter} deleteContact={this.deleteContact}/>
        
//       </div>

//     )
//   }
// }


//TASK  03 IMAGE FINDER
import { Searchbar } from "./Task-03-image-finder/Searchbar/Searchbar";
import { ImageGallery } from "./Task-03-image-finder/ImageGallery/ImageGallery"
import { Loader } from "./Task-03-image-finder/Loader/Loader"
import { Button } from "./Task-03-image-finder/Button/Button"
import { Modal } from "./Task-03-image-finder/Modal/Modal"


const API_KEY = "35988919-7ec9329d85026b7b4e8ec28c4";
export class App extends Component {

  state = {
    q : "",
    images : [],
    page : 1,
    per_page : 12,
    isLoading : false,
    showButton : false,
    totalHits: 0,
    isOpenModal : false,
    currentImage : {},

  }

  async componentDidMount(){
    console.log("Robie component did mount")
    this.setState({totalHits : 0})
    // await this.LoadImages()
  }

  async componentDidUpdate(prevProps, prevState){
    // console.log("Robie update")
    const {q, page, totalHits, per_page, images} = this.state

    //fetch in real life without click btn submit
    if(prevState.q !== q){
      await this.LoadImages()
      this.setState((prevState) => ({...prevState, page : 1, per_page : 12}))
    }
    // console.log("total hits :",totalHits, "page:", page, "oraz per page: ", per_page, "images length: ", images.length)

    if(q !== "" && totalHits > per_page && images.length !== 0){
      this.setState({showButton : true})
    } else {
      this.setState({showButton : false})
    }

    if(prevState.page !== page){
      await this.LoadImages()
    }

    if(images.length > 12){
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth"
      })
    }
  }

  LoadImages = async () => {

    const {q, page, per_page} = this.state
    this.setState({isLoading : true})

    try{
      const response = await fetch(`https://pixabay.com/api/?q=${q}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${per_page}`)
      if(!response.ok){
        throw new Error('Network response is failed');
      }
      const data = await response.json();
         console.log(data)

      this.setState((prevState) => ({...prevState, images : data.hits}))
      this.setState((prevState) => ({...prevState, totalHits : data.totalHits}))
      // console.log("Z SUBMITA", this.state.images)

    }catch(error){
      console.log(error)
    }finally{
      this.setState({isLoading : false})
    }

  }

  changeHandler = (e) => {
    this.setState((prevState) => ({...prevState, q : e.target.value}))
  }

  submitHandler = (e) => {
    e.preventDefault();

   this.LoadImages()

    console.log(this.LoadImages())

    this.setState({q : ""})
  }

  handleButton = () => {
    const {page, per_page} = this.state
    this.setState((prevState) => ({...prevState, page : page + 1}))
    this.setState((prevState) => ({...prevState, per_page : per_page + 12}))
    // console.log("page number :", this.state.page ,"oraz pre page:", this.state.per_page)
  }

 handleOpenModal = (imageId) => {
  const {images} = this.state
  const currentImage = images.find(({id}) => id === imageId)

  console.log(currentImage, "currentImage: {},")
  this.setState({ currentImage, isOpenModal: true });

  window.addEventListener("keydown", ((e) => {
    if(e.key === "Escape") {
      this.handleCloseModal()
    }
  })) 
}
handleCloseModal = () => {
  this.setState({ currentImage: {}, isOpenModal: false });
}

  render(){

    const {q, images, isLoading, showButton, isOpenModal, currentImage} = this.state
    const {largeImageURL, tags} = currentImage


    return(
      <>
       <Searchbar searchQuery={q} changeHandler={this.changeHandler} submitHandler={this.submitHandler}/>
       {isLoading ? (
          <Loader />) : (
            <ImageGallery images={images} handleOpenModal={this.handleOpenModal}/>
          )}
          {showButton && (
          <Button handleButton={this.handleButton}/>)}
          {isOpenModal && (
          <Modal largeImageURL={largeImageURL} tags={tags} closeModal={this.handleCloseModal}/>)}
   
       
      </>
    )
  }

}

//  TASK 04 FEEDBACK

// import {FeedbackOptions} from "./Task-04/Feedback/FeedbackOptions/FeedbackOptions"
// import {Statistics} from "./Task-04/Feedback/Statistics/Statistics"
// import {Section} from "./Task-04/Feedback/Section/Section"
// import {Notification} from "./Task-04/Feedback/Notification/Notification"


// export const App = () => {


//   const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 })

//   const handleClick = (type) => {
//     setState((prevState) => ({ ...prevState, [type] : prevState[type] + 1}))
//   }

//   const countTotalFeedback = () => {
//     const { good, neutral, bad } = state
//     return good + neutral + bad
//   }

//   const countPositiveFeedbackPercentage = () => {
//     const totalCount = countTotalFeedback();
//     return totalCount > 0 ? Math.round((state.good /totalCount) * 100) : 0
//   }

    
//     const {good, neutral, bad} = state

//     return(
//       <div className={css.box}>
//         <Section title="Please leave feedback">
//         <FeedbackOptions options={["good", "neutral" , "bad"]} onLeaveFeedback={handleClick} />
//         </Section> 

//         <Section title="Statistics">
//           {countTotalFeedback() ? (
//             <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()} />
//            ) : (
//               <Notification message="There is no feedback"/>
//             )}
//          </Section> 
//       </div>

//     )
//   }


//  TASK 04 PHONEBOOK

// import {ContactForm} from "./Task-04/Phonebook/ContactForm/ContactForm"
// import {Filter} from "./Task-04/Phonebook/Filter/Filter"
// import {ContactList} from "./Task-04/Phonebook/ContactList/ContactList"



// export const App = () => {

//   const STORAGE_KEY = "contacts"

//   const [contacts, setContacts] = useState([])
//   const [filter, setFilter] = useState("")

//   useEffect(() => {
//     const storage = localStorage.getItem(STORAGE_KEY)
//     setContacts( JSON.parse(storage))
//   }, [])

//   useEffect(() => {
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts))
//   }, [contacts])
 

//   const addContact = (newContact) => {
//     setContacts([...contacts, newContact])
//   }

//   const  filterHandler = (e) => {
//     setFilter( e.target.value)
//   }

//   const  deleteContact = (id) => {
//     const filteredContacts = contacts.filter((e) => 
//     e.id !== id)
//     setContacts(filteredContacts)
//   }



//     return(
//       <div className={css.box}>
//         <h1 className={css.title}>Phonebook</h1>
//         <ContactForm addContact={addContact} contacts={contacts}/>
       
//         <h1 className={css.title}>Contacts</h1>
//         <Filter filter={filter} filterHandler={filterHandler}/>
//         <ContactList contacts={contacts} filter={filter} deleteContact={deleteContact}/>
        
//       </div>

//     )
// }


//  TASK 04 IMAGE_FINDER BEFORE UPDATE

// import { Searchbar } from "./Task-03-image-finder/Searchbar/Searchbar";
// import { ImageGallery } from "./Task-03-image-finder/ImageGallery/ImageGallery"
// import { Loader } from "./Task-03-image-finder/Loader/Loader"
// import { Button } from "./Task-03-image-finder/Button/Button"
// import { Modal } from "./Task-03-image-finder/Modal/Modal"


// const API_KEY = "35988919-7ec9329d85026b7b4e8ec28c4";
// export class App extends Component {

//   state = {
//     q : "",
//     images : [],
//     page : 1,
//     per_page : 12,
//     isLoading : false,
//     showButton : false,
//     totalHits: 0,
//     isOpenModal : false,
//     currentImage : {},

//   }

//   async componentDidMount(){
//     console.log("Robie component did mount")
//     this.setState({totalHits : 0})
//     // await this.LoadImages()
//   }

//   async componentDidUpdate(prevProps, prevState){
//     // console.log("Robie update")
//     const {q, page, totalHits, per_page, images} = this.state

//     //fetch in real life without click btn submit
//     if(prevState.q !== q){
//       await this.LoadImages()
//       this.setState((prevState) => ({...prevState, page : 1, per_page : 12}))
//     }
//     // console.log("total hits :",totalHits, "page:", page, "oraz per page: ", per_page, "images length: ", images.length)

//     if(q !== "" && totalHits > per_page && images.length !== 0){
//       this.setState({showButton : true})
//     } else {
//       this.setState({showButton : false})
//     }

//     if(prevState.page !== page){
//       await this.LoadImages()
//     }

//     if(images.length > 12){
//       window.scrollTo({
//         top: document.documentElement.scrollHeight,
//         behavior: "smooth"
//       })
//     }


//   }

//   //make error in searchbar

//   // shouldComponentUpdate(nextProps, nextState) {

//   //   const oldState = this.state

//   //   if(nextState.page === oldState.page && nextState.q === oldState.q){
//   //       return false
//   //   }
//   //   return true
//   // }


//   LoadImages = async () => {

//     const {q, page, per_page} = this.state
//     this.setState({isLoading : true})

//     try{
//       const response = await fetch(`https://pixabay.com/api/?q=${q}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${per_page}`)
//       if(!response.ok){
//         throw new Error('Network response is failed');
//       }
//       const data = await response.json();
//          console.log(data)

//       this.setState((prevState) => ({...prevState, images : data.hits}))
//       this.setState((prevState) => ({...prevState, totalHits : data.totalHits}))
//       // console.log("Z SUBMITA", this.state.images)

//     }catch(error){
//       console.log(error)
//     }finally{
//       this.setState({isLoading : false})
//     }

//   }

//   changeHandler = (e) => {
//     this.setState((prevState) => ({...prevState, q : e.target.value}))
//   }

//   submitHandler = (e) => {
//     e.preventDefault();

//    this.LoadImages()

//     console.log(this.LoadImages())

//     this.setState({q : ""})
//   }

//   handleButton = () => {
//     const {page, per_page} = this.state
//     this.setState((prevState) => ({...prevState, page : page + 1}))
//     this.setState((prevState) => ({...prevState, per_page : per_page + 12}))
//     // console.log("page number :", this.state.page ,"oraz pre page:", this.state.per_page)
//   }

//  handleOpenModal = (imageId) => {
//   const {images} = this.state
//   const currentImage = images.find(({id}) => id === imageId)

//   console.log(currentImage, "currentImage: {},")
//   this.setState({ currentImage, isOpenModal: true });

//   window.addEventListener("keydown", ((e) => {
//     if(e.key === "Escape") {
//       this.handleCloseModal()
//     }
//   })) 
// }
// handleCloseModal = () => {
//   this.setState({ currentImage: {}, isOpenModal: false });
// }

//   render(){

//     const {q, images, isLoading, showButton, isOpenModal, currentImage} = this.state
//     const {largeImageURL, tags} = currentImage


//     return(
//       <>
//        <Searchbar searchQuery={q} changeHandler={this.changeHandler} submitHandler={this.submitHandler}/>
//        {isLoading ? (
//           <Loader />) : (
//             <ImageGallery images={images} handleOpenModal={this.handleOpenModal}/>
//           )}
//           {showButton && (
//           <Button handleButton={this.handleButton}/>)}
//           {isOpenModal && (
//           <Modal largeImageURL={largeImageURL} tags={tags} closeModal={this.handleCloseModal}/>)}
   
       
//       </>
//     )
//   }

// }