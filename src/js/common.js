/**
 * Created by 独木桥先生 on 2016/11/3.
 */

 /**
  * 链接后面的参数
  */
 function getQueryString(name) {
     var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
     var r = window.location.search.substr(1).match(reg);
     if (r != null) return unescape(r[2]); return null;
 }
;(function(){
    var $page = $('.page');
    var AudioPushMsg,
        AudioNewMsg,
        AudioLock,
        AudioMsg;
    var ua = navigator.userAgent.toLowerCase();
    var winW = window.screen.availWidth;
    if(ua.match(/MicroMessenger/i) == "micromessenger") {
        document.addEventListener("WeixinJSBridgeReady", function () {
            loadAll();
        }, false);
        getUserInfo();
    } else {
        loadAll();
    };

    var hasGetHeadImg = 0,
        headImg = 'css/image/icon-head_default.png';
    function getUserInfo(){
        $.ajax({
            type: 'GET',
            url: '/com/get_userinfo_by_code?code='+getQueryString('code'),
            dataType: 'json',
            timeout: 10000,
            success: function(data){
                //alert(JSON.stringify(data));
                if(data.status == 1){
                  hasGetHeadImg = 1;
                  headImg = data.data.headimgurl;
                  $('.my-nickname').html(data.nickname);
                  $('.my-head').css('background-image','url('+headImg+')');
                }else{

                }

            },
            error: function(xhr, type){
                alert('获取用户信息失败');
            }
        })
    }
    /**
     * 获取时间
     */
    function getDate(){
        var date = new Date();
        var month = date.getMonth()+1;
        var day = date.getDate();
        var week = date.getDay();
        var hour = date.getHours();
        var minute = date.getMinutes();
        minute = minute<9?'0'+minute:minute;
        hour = hour<9?'0'+hour:hour;
        week = ['日','一','二','三','四','五','六'][week];
        return {
            month:month,
            week:week,
            day:day,
            hour:hour,
            minute:minute
        }
    }
    function loadAll(){
        AudioPushMsg = document.getElementById('audioPushMsg');
        AudioNewMsg = document.getElementById('newMsg');
        AudioLock = document.getElementById('lock');
        AudioMsg = document.getElementById('AudioMsg');
        //AudioPushMsg.load();
        //AudioNewMsg.load();
        //AudioLock.load();
        var roundRadius = Math.floor(winW/8);
        loadResource(function(percent){
            $('#dowebok').waterbubble({
                txt: percent+'%',
                data: percent/100,
                lineWidth: 2,
                radius: roundRadius,
                //textColor: 'rgba(0, 0, 0, 0.8)'
            });
            if(percent == 100){
                setTimeout(function(){
                    $('#dowebok').addClass('hid');
                    var now = getDate();
                    $page.eq(0).removeClass('hid').find('.date').html(now.month+'月'+now.day+'日');
                },800);
            }
        });
    }
    $page.on('touchmove',function(e){
        var index = $(this).index();
        if(index==5 || index==7){

        }else{
            e.preventDefault();
        }
    });
    /**
     *显示下一页
     */
    function showNextPage(index){
        $page.eq(index).addClass('hid').next().removeClass('hid');
    }
    //前三个页面的交互
    $page.eq(0).on('swipeUp',function(){
        showNextPage(0);
        var now = getDate();
        $page.eq(1).find('.time').html(now.hour+':'+now.minute);
        $page.eq(1).find('.date').html(now.month+'月'+now.day+'日'+'  '+'星期'+now.week);
        var pushMsgObj = [
            {
                name:'福特翼搏',
                content:'请求添加你为好友',
                headClass:'icon-head6'
            },
            {
                name:'新福特翼虎',
                content:'请求添加你为好友',
                headClass:'icon-head3'
            },
            {
                name:'福特锐界',
                content:'请求添加你为好友',
                headClass:'icon-head4'
            }
        ];
        var pushNum = 0;
        var pushLen = pushMsgObj.length;
        function appendPushMsg(index){
            AudioPushMsg.play();
            $('#pushContent').append(template('pushMsg',pushMsgObj[index]));
        };
        var pushTimer = setInterval(function(){
            appendPushMsg(pushNum);
            if(pushNum == (pushLen-1)){
                clearInterval(pushTimer);
                $page.eq(1).on('swipeUp',function(){
                    showNextPage(1);
                    initGesture(function(){
                        AudioLock.play();
                        var now = getDate();
                        $page.eq(3).find('.date').html(now.hour+':'+now.minute);
                        showNextPage(2);
                    });
                });
            }
            pushNum++;
        },2200);
    });
    $('.newMessage').on('touchend',function(e){
        showNextPage(3);
        initChatManager();
    });
    function initChatManager(){
        var msgObj = [{
            headClass:'icon-head1',
            content:'',
            tpl:'messageAudio'
        },{
            headClass:'icon-head2',
            content:'说人话！',
            tpl:'message'
        },{
            headClass:'icon-head1',
            content:'好吧，我要去长安福特品牌体验馆。',
            tpl:'message'
        },{
            headClass:'icon-head3',
            content:'哇，我在蓝调天街，约吗？',
            tpl:'message'
        },{
            headClass:'icon-head4',
            content:'来呀来呀，我在VR无境空间出不来了， 快来救我。',
            tpl:'message'
        },{
            headClass:'icon-head5',
            content:'快使用你的洪荒之力',
            tpl:'message'
        },{
            headClass:'icon-head4',
            content:'蓝瘦，香菇。没人来救宝宝吗？来的 人都有蓝包领哦！',
            tpl:'message'
        },{
            headClass:'icon-head4',
            tpl:'messageImg'
        },{
            headClass:'icon-head3',
            content:'点开试试',
            tpl:'message'
        },{
            headClass:'icon-head_default',
            content:'去哪',
            tpl:'messageMe',
            hasGetHeadImg:hasGetHeadImg,
            headImg:headImg,
        },{
            headClass:'icon-head4',
            content:'更多惊喜快去朋友圈看吧!',
            tpl:'message',
            hand:true
        }];
        var chatContent = $('#chatContent');
        chatContent.on('touchmove',function(){
            //e.stopPropagation();
        });
        $('#textInput').on('change',function(){
            var val = $(this).val();
            if(val.length>0){
                $('.keyboard').removeClass('keyboard-hid');
                setTimeout(function(){
                    chatContent.scrollTop(3000);
                },1);
                $('.send-btn').addClass('send-btn-act').on('touchend',function(){
                    $(this).removeClass('send-btn-act').off('touchend');
                    $('#textInput').val('');
                    msgObj[msgNum]['content'] = val;
                    appendMsg();
                    $('.icon-head_default').css('background-image','url('+headImg+')');
                    //$('.keyboard').addClass('keyboard-hid');
                    msgNum++;
                    setTimeout(function(){
                        appendMsg();
                        $('#chatContent .message').last().on('touchend',function(){
                            $(this).find('.hand').addClass('hid');
                            showNextPage(4);
                            $('#circleNewMsg').on('touchend',function(){
                                showNextPage(5);
                                initdynamics();
                            })
                        });
                    },1000);
                })
            }
        })
        /**
         * 展示用户动态
         */
        function initdynamics(){
            var dynamics ={
                dynamics:[{
                    headClass:'icon-head3',
                    nick:'新福特翼虎',
                    title:'触动未来，2016长安福特品牌体验馆。',
                    type:'video',
                    time:'1分钟前',
                    video:'dist/video/video.mp4',
                    //videoH:Math.floor((window.screen.availWidth*32/1080))*18,
                    //videoW:Math.floor((window.screen.availWidth*32/1080))*24,
                    praises:['新蒙迪欧,','长安福特进无止境'],
                    comments:[{
                        nick:'福特翼搏',
                        content:'哎哟，不错哦。'
                    },{
                        nick:'福特锐界',
                        content:'完美'
                    }]
                },{
                    headClass:'icon-head4',
                    nick:'福特锐界',
                    title:'嘿！你们还认识我吗？快来和我开启一趟未来探秘之旅。',
                    type:'image',
                    images:['css/image/dynamic2_1.jpg','css/image/dynamic2_2.jpg','css/image/dynamic2_3.jpg','css/image/dynamic2_4.jpg','css/image/dynamic2_5.jpg','css/image/dynamic2_6.jpg','css/image/dynamic2_7.jpg','css/image/dynamic2_8.jpg','css/image/dynamic2_9.jpg'],
                    time:'3分钟前',
                    video:'',
                    praises:['新福特翼虎,','福特翼搏,','福特金牛座'],
                    comments:[{
                        nick:'全新福克斯',
                        content:'酷炫！我也想玩！'
                    },{
                        nick:'新福特翼虎',
                        content:'我也要变身成机械人！'
                    }]
                },{
                    headClass:'icon-head1',
                    nick:'全新福克斯',
                    title:'我们准备了多重大礼，等你来2016长安福特品牌体验馆感知科技，触动未来，赢取精美好礼！',
                    type:'image',
                    images:['css/image/dynamic3_1.jpg','css/image/dynamic3_2.jpg','css/image/dynamic3_3.jpg'],
                    time:'10分钟前',
                    video:'',
                    praises:['长安福特进无止境,','福特福睿斯,','新福特翼虎'],
                    comments:[{
                        nick:'福特金牛座',
                        content:'这么多礼品，看得我目瞪口呆。'
                    },{
                        nick:'福特锐界',
                        content:'一言不合就送礼。'
                    },{
                        nick:'新福特翼虎',
                        content:'没想到你是这样的福克斯。'
                    }]
                },{
                    headClass:'icon-head7',
                    nick:'新蒙迪欧',
                    title:'我们还准备了很多惊喜送给每一位体验者！现在转发本链接到朋友圈，把好消息传递给更多的朋友吧！凭转发朋友圈可以到2016长安福特品牌体验馆活动现场领取精美礼品一份！',
                    type:'image',
                    images:['css/image/dynamic4_1.jpg','css/image/dynamic4_2.jpg','css/image/dynamic4_3.jpg'],
                    time:'13分钟前',
                    video:'',
                    praises:['福特金牛座,','新蒙迪欧,','长安福特进无止境'],
                    comments:[{
                        nick:'全新福克斯',
                        content:'和我抢着送礼品，友谊的小船说翻就翻。'
                    },{
                        nick:'福特翼搏',
                        content:'宝宝也要礼品，宝宝去转发了。'
                    }]
                }]
            }
            $page.eq(6).append(template('dynamic',dynamics));
            $page.eq(6).on('scroll',function(){
                //console.log($(this)[0].offsetHeight)
                var $this =$(this),
                    viewH =$(this).height(),//可见高度
                    contentH =$(this).get(0).scrollHeight,//内容高度
                    scrollTop =$(this).scrollTop();//滚动高度
                //console.log(scrollTop,contentH,viewH)
                if(scrollTop >= contentH -viewH){ //到达底部100px时,加载新内容
                    $('.share-mask').removeClass('hid').off('click').on('click',function(){
                        $(this).addClass('hid');
                    });
                }
            })
            $('video').on('click',function(){

            })
        }
        /**
         *用户交互
         */
        function initEvent(){
            msgNum++;
            appendMsg();
            $('.message-img').on('touchend',function(){
                $(this).html('');
                $('.model').addClass('model-show');
                //关闭红包
                $('.model-close').on('touchend',function(){
                    $('.model').removeClass('model-show');
                    $('.message-img').off('touchend');
                    setTimeout(function(){
                        $('#textInput').val('HELLO,FORD！').trigger('change');
                    },1000);
                })
            })
        }
        //插入消息
        function appendMsg(){
            AudioNewMsg.play();
            //console.log(msgNum)
            chatContent.append(template(msgObj[msgNum]['tpl'], msgObj[msgNum]));
            chatContent.scrollTop(3000);
        }
        //自动播放声音
        var msgNum = 1;

        var AudioPlayNum = 0;
        setTimeout(function(){
            //if(AudioMsg.ended){
                if(AudioPlayNum == 0){
                    var msgTimer = window.setInterval(function(){
                        appendMsg();
                        if(msgObj[msgNum]['tpl'] == 'messageImg'){
                            initEvent();
                            window.clearInterval(msgTimer);
                        }
                        msgNum++;
                    },2200);
                    AudioPlayNum++;
                    //window.clearInterval(audioListener);
                }
           // }
        },4000);
        // AudioMsg.addEventListener('ended', function () {
        //
        // }, false);
        AudioMsg.play();
        chatContent.append(template(msgObj[0]['tpl'], msgObj[0]));
        $('.messageAudio').on('click',function(){
            AudioMsg.pause();
            AudioMsg.play();
        });

    }

    /**
     *加载页面资源,图片,音频
     */
    function loadResource(callback){
        var call = callback;
        var urlObj = [
            'F.png',
            'hand.png',
            'logo-round.png',
            'logo.png',
            'keyboard.png',
            'model.png',
            'hongbao.png',
            'page1-bg.jpg',
            'page2-bg.jpg',
            'page3-bg.jpg',
            'page4-bg.jpg',
            'page5-bg.jpg',
            'page6-bg.jpg',
            'friend-circle-bg.jpg',
            'share-mask.png',
            //'page7-bg.jpg',
            // 'newMsg.mp3',
            // 'pushMsg.mp3',
            // 'lock.wav'
        ];
        var len = urlObj.length,Aresource = [],hasLoadNum = 0;
        for(var i = 0; i < len; i++){
            var type = urlObj[i].split('.')[1];
            if(type == 'mp3'||type == 'wav'){
                Aresource[i] = new Audio();
                Aresource[i].src = 'dist/music/' + urlObj[i];
                Aresource[i].load();
                saveResourse(i,'audio');
            }else{
                Aresource[i] = new Image();
                Aresource[i].src = 'css/image/'+urlObj[i];
                saveResourse(i,'img');
            }

        }
        function saveResourse(index,type){
            if(type == 'img'){
                Aresource[index].onload = function(){
                    hasLoadNum ++ ;
                    var percent = Math.floor(hasLoadNum/len*100);
                    //console.log(percent)
                    call(percent);
                }
            }else{
                Aresource[index].onloadeddata = function(){
                    hasLoadNum ++ ;
                    //this.volume = 0;
                    //this.play();
                    var percent = Math.floor(hasLoadNum/len*100);
                    //console.log(percent)
                    call(percent);
                }
            }

        }
    }
    /**
     * 初始化手势解锁
     */
    function initGesture(callback){
        var winW = Math.floor((Math.min(window.innerWidth,window.innerHeight)/40))*30;
        $("#gesturepwd").GesturePasswd({
            backgroundColor:"rgba(0,0,0,0)",  //背景色
            color:"#FFFFFF",   //主要的控件颜色
            roundRadii:winW*5/48,    //大圆点的半径
            pointRadii:winW/40, //大圆点被选中时显示的圆心的半径
            space:winW/8,  //大圆点之间的间隙
            width:winW,   //整个组件的宽度
            height:winW,  //整个组件的高度
            lineColor:"#00aec7",   //用户划出线条的颜色
            zindex :100  //整个组件的css z-index属性
        });
        $("#gesturepwd").on("hasPasswd",function(e,passwd){
            var len = passwd.length;
            var realPwd = passwd[0];
            for(var i = 1; i < len; i++){
                if(passwd[i]!== passwd[i-1]) realPwd+=passwd[i];
            }
            //alert(realPwd)
            var Apwd = ['321456547','745654123','32147456'];
            var result = (Apwd.indexOf(realPwd)>=0)?true:false;
            if(result){
                $("#gesturepwd").trigger("passwdRight");
                setTimeout(function(){
                    //密码验证正确后的其他操作，打开新的页面等。。。
                    callback();
                },500);  //延迟半秒以照顾视觉效果
            }
            else{
                $("#gesturepwd").trigger("passwdWrong");
                //密码验证错误后的其他操作。。。
            }
        });
    }
    function getcity() {
        //var map = new BMap.Map("bdMapBox");
        var nowCity = new BMap.LocalCity();
        nowCity.get(bdGetPosition);
        function bdGetPosition(result){
            //console.log(result);
            var cityName = result.name; //当前的城市名
            $('.city').html(cityName);
            // $.ajax({
            //     url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURI(cityName)+'&output=JSON&ak=8q1fKGyOaINwMdblZKMlBO8u6Ii61KSn',
            //     type:'get',
            //     dataType:'json',
            //     success:function(data){
            //         console.log(data)
            //     }
            // })
        }
    }
    getcity();
})();
