
import React, { Component } from 'react';
import { Image } from 'react-native'

import '../css/Turn.css'

export default class Turn extends Component {
    render() {
        return (
            <div className="Content">
                <div class="pieContainer">
                    <div class="pieBackground">
                        
                        <div id="pieSlice2" class="hold"><div class="pie"></div></div>
                        <div id="pieSlice3" class="hold"><div class="pie"></div></div>
                        <div id="pieSlice4" class="hold"><div class="pie"></div></div>
                        <div id="pieSlice5" class="hold"><div class="pie"></div></div>
                        <div id="pieSlice6" class="hold"><div class="pie"></div></div>
                        <div id="pieSlice7" class="hold"><div class="pie"></div></div>
                        <div id="pieSlice8" class="hold"><div class="pie"></div></div>
                        <div id="pieSlice9" class="hold"><div class="pie"></div></div>
                        <div id="pieSlice10" class="hold"><div class="pie"></div></div>
                        <div id="pieSlice11" class="hold"><div class="pie"></div></div>
                        <div id="pieSlice12" class="hold"><div class="pie"></div></div>
                        <div id="pieSlice13" class="hold"><div class="pie"></div></div>
                        <p class="content1">VOUCHER</p>
                        <p class="content2">10 ĐIỂM</p>
                        <p class="content3">50 ĐIỂM</p>
                        <p class="content4">QUÀ</p>
                        <p class="content5">5 ĐIỂM</p>
                        <p class="content6">100 ĐIỂM</p>
                        <p class="content7">50 ĐIỂM</p>
                        <p class="content8">SỮA</p>
                        <p class="content9">10 ĐIỂM</p>
                        <p class="content10">200 ĐIỂM</p>
                        <p class="content11">MẤT LƯỢT</p>
                        <p class="content12">20 ĐIỂM</p>
                        <Image style={{ width: 30, height: 30, marginLeft: 260, marginTop: 105, position: 'absolute' }} source={require('../images/gift.png')}></Image>
                        <Image style={{ width: 30, height: 30, marginLeft: 100, marginTop: 250, position: 'absolute', transform: [{ rotate: '470deg' }] }} source={require('../images/milk.png')}></Image>
                    </div>
                </div>
            </div>
        );
    }
}

