<template>
  <div>
    <main>
      <div class="chat">
        <div class="titleBar">与 XXX 聊天</div>
        <div class="panel" ref="panelEle">
          <div v-for="(item,index) in mineMsg">
            <div class="message mine" v-if="item.role==='mine'" ref="mine">
              <img src="/static/assets/error_images/401.png" alt="" />
              <p>
                <span v-if="item.type==='sticker'"></span>
                <span v-else>{{item.msg}}</span>
              </p>
            </div>
            <div class="message yours" v-else>
              <img class="avatar" src="/static/assets/login_images/account_image.jpg" alt="" />
              <p><span>{{item.msg}}</span></p>
            </div>
          </div>

          <!-- 省略其它消息 -->
        </div>
        <footer>
          <e-btn class="chooseSticker" @click="chooseStickerBtn">
            <img src="/static/assets/error_images/cloud.png" alt="" />
            <div class="stickers" :class="isStickers? 'hidden' : 'show'">
              <span v-for="(item,key) in stickers" ref="sticker" @click="sendSticker(key)"></span>
            </div>
          </e-btn>

          <e-input-name
            class="messageInput"
            v-model="chatMsg"
            placeholder="请输入聊天信息">
          </e-input-name>


          <e-btn class="send" @click="sendMsg" name="发送"></e-btn>
        </footer>
      </div>
    </main>

  </div>
</template>

<script>
  //引入 lottie动画npm install lottie-web
  import lottie from 'lottie-web';
  import moment from "moment"
  export default {
    name: "chatRoom",
    data(){
      return {
        chatMsg:"",
        mineMsg:[
          {
            role:"mine",
            msg:"你好"
          },
          {
            role:"yours",
            msg:"哈喽哈喽"
          }
        ],
        stickers: {
          pumpkin: {
            path: "https://assets10.lottiefiles.com/animated_stickers/lf_tgs_c8e6kxgj.json",
          },
          bomb: {
            path: "https://assets10.lottiefiles.com/datafiles/U1SQC2Rd0YGouCl/data.json",
          },
        },
        isStickers:true
      }
    },
    mounted(){
      this.initStickers();

      let vm = this;
      let user = localStorage.getItem('WEB_IM_USER');
      user = user && JSON.parse(user) || {};
      vm.uid = user.uid;
      vm.nickname = user.nickname;

      // if(!vm.uid){
      //   vm.$refs.loginDialog.show()
      // } else {
        vm.conWebSocket();
      // }
      document.onkeydown = function (event) {
        let e = event || window.event;
        if (e && e.keyCode == 13) { //回车键的键值为13
          vm.sendMsg()
        }
      }
    },
    methods:{
      initStickers(){
        // 初始化表情面板，也可以在表情选择窗弹出时再初始化
        Object.keys(this.stickers).forEach((key, index) => {
          let lottieEle = this.$refs.sticker[index];
          // 对每个表情创建 lottie 播放器
          let player = lottie.loadAnimation({
            container: lottieEle,
            renderer: "svg",
            loop: true,
            autoplay: false,
            path: this.stickers[key].path
          })

          // 当鼠标划过时，播放动画预览
          lottieEle.addEventListener("mouseover", () => {
            player.play();
          });
          // 当鼠标划过时，停止动画预览
          lottieEle.addEventListener("mouseleave", () => {
            player.stop();
          });
        });

      },
      sendSticker(key){
        this.appendMsg(key, "sticker");
      },
      sendMsg(){
        if(this.chatMsg){
          this.sendMessage(2)
          this.appendMsg(this.chatMsg);
        }
      },
      appendMsg(msg, type){
        if (type === "sticker") {
          this.mineMsg.push(
            {
              role: "mine",
              msg: "",
              type: type
            }
          )
        }
        this.$nextTick(()=>{
          let msgEle = this.$refs.mine[this.$refs.mine.length-1];
          // 处理表情消息，播放相关动画
          if (type === "sticker") {
            this.playSticker(msg, msgEle);
            if (msg === "bomb") {
              // 播放爆炸动画
              setTimeout(() => {
                this.playExplosion(msgEle);
              }, 500);
              // 晃动消息列表
              this.shakeMessages();
            }
          }
        });

        // 滚动到最新消息
        this.$nextTick(()=>{
          this.$refs.panelEle.scrollTop = this.$refs.panelEle.scrollHeight + 70;
        })
      },
      playSticker(key, msgEle) {
        // 表情消息，创建 lottie 动画
        const lottieEle = msgEle.querySelector("span");
        lottieEle.style.width = "40px";
        lottieEle.style.height = "40px";
        lottie.loadAnimation({
          container: lottieEle,
          renderer: "svg",
          loop: false,
          autoplay: true,
          path: this.stickers[key].path,
        });
      },
      //爆炸动画
      playExplosion(anchor) {
        const explosionAnimeEle = anchor.appendChild(document.createElement("div"));
        explosionAnimeEle.style.position = "absolute";
        explosionAnimeEle.style.width = "200px";
        explosionAnimeEle.style.height = "100px";
        explosionAnimeEle.style.right = 0;
        explosionAnimeEle.style.bottom = 0;

        const explosionPlayer = lottie.loadAnimation({
          container: explosionAnimeEle,
          renderer: "svg",
          loop: false,
          autoplay: true,
          path: "https://assets2.lottiefiles.com/packages/lf20_criPwK.json",
        });
        explosionPlayer.setSpeed(0.1);
        // 播放完成后，销毁爆炸相关的动画和元素
        explosionPlayer.addEventListener("complete", () => {
          explosionPlayer.destroy();
          explosionAnimeEle.remove();
        });
      },
      //消息晃动
      shakeMessages() {
        [...this.$refs.panelEle.children]
          .reverse()
          .forEach((messageEle) => {
            const avatarEle = messageEle.querySelector("img");
            const msgContentEle = messageEle.querySelector("p");
            avatarEle.classList.remove("shake");
            msgContentEle.classList.remove("shake");
            setTimeout(() => {
              avatarEle.classList.add("shake");
              msgContentEle.classList.add("shake");
            }, 700);
          });
      },
      chooseStickerBtn(){
        this.isStickers = !this.isStickers;
      },


      //todo 消息通信
      sendMessage(type){
        this.socket.send(JSON.stringify({
          uid: this.uid,
          type: type,
          nickname: this.nickname,
          msg: this.chatMsg
        }));
        this.chatMsg = '';
      },
      conWebSocket(){
        let vm = this;
        if(window.WebSocket){
          vm.socket = new WebSocket('ws://localhost:8001');
          let socket = vm.socket;

          socket.onopen = function(e){
            console.log("连接服务器成功");
            if(!vm.uid){
              // 生成新的用户id,并存入localStorage
              vm.uid = 'web_im_' + moment().valueOf();
              localStorage.setItem('WEB_IM_USER', JSON.stringify({
                uid: vm.uid,
                nickname: vm.nickname
              }));
              vm.sendMessage(1)
            }
          };
          socket.onclose = function(e){
            console.log("服务器关闭");
          };
          socket.onerror = function(){
            console.log("连接出错");
          };
          // 接收服务器的消息
          socket.onmessage = function(e){
            let message = JSON.parse(e.data);
            vm.mineMsg.push(message);
          }
        }
      },

    }
  }
</script>

<style scoped lang="scss">
  main {
    display: grid;
    place-items: center;
    width: 100vw;
    height: 100vh;
    background-color: gainsboro;
    .chat{
      height: 600px;
      display: flex;
      flex-direction: column;
    }


    .titleBar {
      padding: 24px 0;
      text-align: center;
      box-shadow: var(--shadow-large);
    }
    .panel {
      flex: 1;
      display: flex;
      flex-direction: column;
      padding: 24px 12px;
      overflow: auto;
    }
    .panel::-webkit-scrollbar {
      display: none; /* Chrome Safari */
    }
    .message {
      display: flex;
      /*max-width: 80%;*/
      font-size: 14px;
      margin: 8px 0;
      position: relative;
    }
    .message img {
      width: 40px;
      height: 40px;
      border-radius: 12px;
      margin-right: 12px;
    }
    .message p {
      padding: 8px 12px;
      border-radius: 12px;
      box-shadow: var(--shadow-large);
      display: flex;
      align-items: center;
    }
    .message.mine {
      flex-flow: row-reverse;
      align-self: flex-end;
    }
    .message.mine img {
      margin-right: 0;
      margin-left: 12px;
    }
    .message.mine p {
      background-color: var(--primary-color);
      color: white;
    }
    footer {
      display: grid;
      grid-template-columns: 48px 1fr 75px;
      justify-items: center;
      padding: 12px;
      box-shadow: var(--shadow-large);
    }
    .chooseSticker {
      border: 1px solid white;
      background-color: white;
      justify-self: start;
      position: relative;
    }
    .chooseSticker img {
      width: 20px;
      height: 20px;
    }
    .stickers {
      display: grid;
      grid-template-columns: repeat(auto-fill, 24px);
      column-gap: 18px;

      border-radius: 8px;
      background-color: white;
      box-shadow: var(--shadow-medium);
      padding: 6px 12px;
      font-size: 24px;

      position: absolute;
      top: calc(-100% - 18px);
      width: 300px;
    }
    .messageInput {
      box-shadow: var(--shadow-medium);
      padding: 0px 12px;
      border-radius: 8px;
      width: 100%;
    }

    .send {
      border-radius: 8px;
      justify-self: end;
      color: white;
    }
    .hidden{
      opacity: 0;
    }
    .show {
      opacity: 1;
    }

    .shake {
      animation: shake 0.8s ease-in-out;
    }

    @keyframes shake {
      from {
        transform: translate3d(0, 0px, 0px);
      }
      10% {
        transform: translate3d(6px, -6px, 0px);
      }
      20% {
        transform: translate3d(-5px, 5px, 0px);
      }
      30% {
        transform: translate3d(4px, -4px, 0px);
      }
      35% {
        transform: translate3d(-3px, 3px, 0px);
      }
      39% {
        transform: translate3d(2px, -2px, 0px);
      }
      41% {
        transform: translate3d(-1px, 1px, 0px);
      }
      42% {
        transform: translate3d(0px, 0px, 0px) rotate(20deg);
      }

      52% {
        transform: rotate(-15deg);
      }

      60% {
        transform: rotate(8deg);
      }

      65% {
        transform: rotate(-3deg);
      }

      67% {
        transform: rotate(1deg);
      }

      70% {
        transform: rotate(0deg);
      }

      to {
        transform: translate3d(0px, 0px, 0px) rotate(0);
      }
    }
  }
</style>
