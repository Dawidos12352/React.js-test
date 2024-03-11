import React, {Component} from "react";
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


//  {/* TASK 01 */}
// export const App = () => {
//   return (
//     <div
//     style={{
//       height: '100vh',
//       display: 'flex',
//       alignItems: 'center',
//       fontSize: 40,
//       color: '#010101',
//       flexDirection: 'column',
//     }}
//     >
//       <div>
//       <Profile
//         username={user.username}
//         tag={user.tag}
//         location={user.location}
//         avatar={user.avatar}
//         stats={user.stats}
//       />
//       <Statistics title="Upload stats" stats={data}/>\
//       <FriendList friends={friends} />
//       <TransactionHistory items={transactions} />
//       </div>     
//     </div>
//   );
// };


//TASK 02 FEEDBACK

// import {Statistics} from "./Task-02-feedback/Statistics/Statistics"
// import {FeedbackOptions} from "./Task-02-feedback/FeedbackOptions/FeedbackOptions"
// import {Section} from "./Task-02-feedback/Section/Section"
// import {Notification} from "./Task-02-feedback/Notification/Notification"
// export class App extends Component {

//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0
//   }

//   countTotalFeedback() {
//     const { good, neutral, bad} = this.state
//     return good + bad + neutral
//   }

//   countPositiveFeedbackPercentage() {
//     const totalCount = this.countTotalFeedback()
//     return Math.round(( this.state.good * 100) / totalCount)
//   }

//   handleFeedback(type) {
//     this.setState((prevState) => ({ [type] : prevState[type] + 1 }))
//   }


//   render(){

//    const { good, neutral, bad} = this.state

//    const totalFeedback = this.countTotalFeedback.call(this)
//    const positivePercentage = this.countPositiveFeedbackPercentage.call(this)
//    const handleFeedback = this.handleFeedback.bind(this)


//     return(
//       <>
//       <Section title="Please leave feedback">
//         <FeedbackOptions options={["good", "neutral", "bad"]} onLeaveFeedback={handleFeedback} />
//       </Section>

//       <Section title="Statistics">
//         {totalFeedback ? (
//           <Statistics good={good} neutral={neutral} bad={bad} total={totalFeedback} positivePercentage={positivePercentage} />
//         ) : (
//           <Notification message="There is no feedback" />
//         )}
        
//       </Section>
      

//       </>
//     )
//   }
// }



//TASK 02 - 03 PHONEBOOK

// import {ContactForm} from "./Task-02-phonebook/ContactForm/ContactForm"
// import {Filter} from "./Task-02-phonebook/Filter/Filter"
// import {ContactList} from "./Task-02-phonebook/ContactList/ContactList"

// const LOCAL_STORAGE_KEY = "contacts"


// export class App extends Component {

//     state = {
//         contacts: [],
//         filter: '',
//       }

//       addContact = (newContact) => {
//         this.setState((prevState) => ({
//            contacts: [...prevState.contacts, newContact]
//         }))
//       }

//       filterHandler = (e) => {
//         this.setState({filter: e.target.value})
//         console.log("Filter value :" , e.target.value)
//       }

//       deleteHandler = (id) => {
//         const filteredContacts = this.state.contacts.filter((e) => 
//         e.id !== id)
//         this.setState({contacts : filteredContacts})
//       }



//       componentDidMount(){
//         console.log("sprawdzam renderowanie nowych elementow")
//         const storedItems = localStorage.getItem(LOCAL_STORAGE_KEY)
//         this.setState({contacts : JSON.parse(storedItems)})
//       }

//       componentDidUpdate(){
//         console.log("Tutaj robie update")
//         localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.state.contacts))
//       }



   
//     render(){

//         const {contacts, filter} = this.state

       

//         return(
//             <div className={css.box}>
//                 <h1 className={css.title}>Phonebook</h1>
//                 <ContactForm contacts={contacts} addContactHandler={this.addContact}/>
                
//                 <h1 className={css.title}>Contacts</h1>
//                 <Filter filterHandler={this.filterHandler} filterText={filter}/>
//                 <ContactList filterText={filter} contacts={contacts} deleteHandler={this.deleteHandler}/>
//             </div>

//         )
//     }
// }

//TASK  03 IMAGE FINDER


import {Searchbar} from "./Task-03-image-finder/Searchbar/Searchbar"
import {ImageGallery} from "./Task-03-image-finder/ImageGallery/ImageGallery"
import {Button} from "./Task-03-image-finder/Button/Button"
import {Loader} from "./Task-03-image-finder/Loader/Loader"
import {Modal} from "./Task-03-image-finder/Modal/Modal"



const API_KEY = "35988919-7ec9329d85026b7b4e8ec28c4"

export class App extends Component{

  state = {
    images : [],
    inputSearch: "",
    page : 1,
    per_page : 12,
    totalHits: 0,
    isActiveButton : true,
    isLoadMoreButton : false,
    isLoading : false,
    isModalOpen : false,
    currentImage: {},
}


async componentDidMount(){
  console.log("Robie component did mount")
 await this.fetchImages()
}

async componentDidUpdate(prevProps, prevState){
  const {inputSearch, isActiveButton, images, totalHits, per_page} = this.state

  console.log("Robie component did update")


  if(inputSearch.length !== 0  && totalHits > per_page){
   
      this.setState({isLoadMoreButton : true})
    
  }else {
    this.setState({isLoadMoreButton : false})
  }

  if(!isActiveButton){
    if(inputSearch !== prevState.inputSearch && inputSearch.length > 0) {
      await this.fetchImages();
    }
    if(inputSearch.length === 0 && images.length > 0) {
      this.setState({images : []})
    }
  }

  if(prevState.per_page !== this.state.per_page) {
    console.log('aktualizuj mi dane i pobieraj fetcha')
    this.fetchImages()
  }

}

fetchImages = async () => {

  const {inputSearch, per_page, page} = this.state
  this.setState({isActiveButton : true})
  this.setState({isLoading : true})
  console.log("LIMIT W FETCHU", this.state.per_page)
  try{

    const response = await fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${inputSearch}&image_type=photo&orientation=horizontal&per_page=${per_page}&page=${page}`)
    if(!response.ok){
      throw new Error('Network response is failed');
    }
    const data = await response.json()
    
    this.setState((prevState) => ({...prevState, images:  data.hits}))
    this.setState({totalHits:  data.totalHits})
   
  } catch(error) {
    console.log(error)

    return error
  } finally {
    this.setState({isActiveButton : false})
    this.setState({isLoading : false})
  }

}

loadMoreImages = () => {
 this.setState(prevState => ({per_page: prevState.per_page + 12 }))
}

changeHandler = (e) => {
  const {name, value} = e.target
  this.setState({[name] : value})
}

submitHandler = (e) => {
    e.preventDefault();
    this.fetchImages();
}

handleOpenModal = (imageId) => {
  const {images} = this.state
  const currentImage = images.find(({id}) => id === imageId)

  console.log(currentImage, "currentImage: {},")
  this.setState({ currentImage, isModalOpen: true });

  window.addEventListener("keydown", ((e) => {
    if(e.key === "Escape") {
      this.handleCloseModal()
    }
  })) 
}
handleCloseModal = () => {
  this.setState({ currentImage: {}, isModalOpened: false });
}

  render(){

    const {inputSearch, images, isLoadMoreButton, page, isLoading, isModalOpen, currentImage} = this.state
    const { largeImageURL, tags } = currentImage;
    return(
      <>
      <Searchbar 
      inputSearch={inputSearch} 
      changeHandler={this.changeHandler}
      submitHandler={this.submitHandler}
      />
      {isLoading && (
        <Loader />
      )}
      <ImageGallery images={images}/>
      {isLoadMoreButton && (
        <Button loadMore={this.loadMoreImages} page={page}/> 
      )}
      {isModalOpen && (
        <Modal             
        largeImageURL={largeImageURL}
        tags={tags}
        handleCLoseModal={this.handleCLoseModal}/>
      )}
      </>
    )
  }
}