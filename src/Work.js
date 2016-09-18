import React from 'react';
import Bg1 from './images/01.jpg';
import Bg2 from './images/02.jpg';
import Bg3 from './images/03.jpg';
import Bg4 from './images/04.jpg';
import Bg5 from './images/05.jpg';
import Bg6 from './images/06.jpg';
import Bg7 from './images/07.jpg';
import Bg8 from './images/08.jpg';
import Card from './compents/Card'
let cards = [
  {title:'赵丽颖',text:'hello' ,imag:Bg1,url:'a'},
  {title:'赵丽颖',text:'hello' ,imag:Bg2,url:'b'},
  {title:'赵丽颖',text:'hello' ,imag:Bg3,url:'c'},
  {title:'赵丽颖',text:'hello' ,imag:Bg4,url:'d'},
  {title:'赵丽颖',text:'hello' ,imag:Bg5,url:'e'},
  {title:'赵丽颖',text:'hello' ,imag:Bg6,url:'f'},
  {title:'赵丽颖',text:'hello' ,imag:Bg7,url:'g'},
  {title:'赵丽颖',text:'hello' ,imag:Bg8,url:'g'},

]
class Work extends React.Component {
  render() {
    return (
        <div className="row" style = {{marginTop:'20px'}}>
            {cards.map((item,i)=><Card {...item} key = {i} />)}
      </div>

    )
  }
}

export default Work;
