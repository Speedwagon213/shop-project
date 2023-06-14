import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowItem from "./components/ShowItem";



class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showItem : false,
      fullItem : {},
      currentItems : [],
      orders : [],
      items : [
        {
          id : 1,
          title : 'Стул',
          img : 'chair.webp',
          desc : 'апраппр апрапр апрапрап',
          category : 'chairs',
          price : '550'
        },
        {
          id : 2,
          title : 'Стол',
          img : 'table.webp',
          desc : 'рв укрукрурук укркур',
          category : 'tables',
          price : '880'
        },
        {
          id : 3,
          title : 'Балдежный диван',
          img : 'sofa.jpg',
          desc : 'керкеркр керекр',
          category : 'sofas',
          price : '3300'
        },
        {
          id : 4,
          title : 'Лампа',
          img : 'lamp.jpg',
          desc : 'керкереке к ерекр екр',
          category : 'lamps',
          price : '320'
        },
        {
          id : 5,
          title : 'Стул черный',
          img : 'chair2.jpg',
          desc : 'керк78к ереfdfкр екр',
          category : 'chairs',
          price : '470'
        },
        {
          id : 6,
          title : 'Диван серый',
          img : 'sofa2.jpg',
          desc : 'кuiuiuiкерекр',
          category : 'sofas',
          price : '5000'
        },
        {
          id : 7,
          title : 'Клевый диван',
          img : 'sofa3.webp',
          desc : 'кuiui3434uiкерекр',
          category : 'sofas',
          price : '4040'
        },
        {
          id : 8,
          title : 'Странный стул',
          img : 'chair3.jpg',
          desc : 'керкz.z.еfdfкр екр',
          category : 'chairs',
          price : '350'
        },
        {
          id : 9,
          title : 'Удобный стул',
          img : 'chair4.jpg',
          desc : 'кеopopеfdfкр екр',
          category : 'chairs',
          price : '499'
        }
      ]
    }
    this.state.currentItems = this.state.items

    this.AddItem = this.AddItem.bind(this)
    this.DeleteItem = this.DeleteItem.bind(this)
    this.ChooseCategory = this.ChooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render (){
  return (
    <div className="App">
       <Header orders = {this.state.orders} DeleteItem = {this.DeleteItem}/>
       <Categories ChooseCategory={this.ChooseCategory} />
        <Items items = {this.state.currentItems} AddItem = {this.AddItem}  onShowItem={this.onShowItem}/>
        {this.state.showItem && <ShowItem item = {this.state.fullItem} AddItem = {this.AddItem} onShowItem={this.onShowItem} />}
      <Footer/>
    </div>
  )
}
AddItem(item){
  let isInArray = false;
  this.state.orders.forEach((el) => {
    if(el.id === item.id){
      isInArray = true;
}
})
    if(isInArray === false){
      this.setState({ orders : [...this.state.orders, item]})
    }
}
DeleteItem(itemId){
  this.setState({orders : this.state.orders.filter((el) => (el.id !== itemId))})
}
ChooseCategory(category){
    if(category === 'all'){
      this.setState({currentItems : this.state.items})
      return
    }
    this.setState({currentItems : this.state.items.filter((el) => el.category === category)})
}
onShowItem(item){
  this.setState({fullItem : item})
this.setState({showItem : !this.state.showItem})
}
}

export default App;
