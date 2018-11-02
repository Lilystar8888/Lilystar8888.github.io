import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/header'
import BoxTitle from './components/box'
import Footer from './components/footer'

class App extends Component {
    render() {
        return (
            <body>
      <Header />
      <div class="container">
        <div class="tips">    
          <a href="https://www.facebook.com/taobao168" class="Facebook" target="_blank">FB粉絲團</a>
          <a href="javascript:void(0)" class="Android">Download App</a>
          <a href="javascript:void(0)">人民幣：4.55</a>
          <a href="javascript:void(0)">日幣：0.2787</a>
          <a href="javascript:void(0)">韓元：0.0290</a>
          <a href="javascript:void(0)">美元：31.63</a>
        </div>
        <div class="slogan">桃子韓國貨運台灣辦事處 一條龍完整服務 全方面提供 安全 / 方便 / 快捷 / 實惠 的貨運服務！</div>
        <div class="content">
          <p>專業韓國集貨站，週一到週五每天直飛台灣，不用在親自跑韓國，簡簡單單將韓貨商品運回台灣。韓國集貨站提供免費代收包裹、合併包裹、台灣本地免收宅配費、包稅等超優質服務。</p>
          <BoxTitle ttl="韓國集貨服務流程"/>
          <BoxTitle ttl="運費說明"/>
          <BoxTitle ttl="進口項目"/>
          <BoxTitle ttl="送達時間說明"/>
          <BoxTitle ttl="韓國營業時間"/>
          <BoxTitle ttl="貼心提醒"/>
          <BoxTitle ttl="常見問題"/>
        </div>
      </div>
      </body>
        );
    }
}

export default App;