const firebaseConfig = {
  apiKey: "AIzaSyDysevNkrnnGI2hOAIm0rdR_xs3TzAZkik",
  authDomain: "cat-chat-22fa4.firebaseapp.com",
  databaseURL: "https://cat-chat-22fa4.firebaseio.com",
  projectId: "cat-chat-22fa4",
  storageBucket: "cat-chat-22fa4.appspot.com",
  messagingSenderId: "10391053907",
  appId: "1:10391053907:web:280163132881178b4dc8a6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var app = new Vue({
  el: '#app',
  data: {
    hello: "hello",
    profileImage: 'https://images.unsplash.com/photo-1566659117289-e0558e119703?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1276&q=80',
    messages: [],
    user: false,
    messageText: null,
    loaded: false
  },
  methods: {
    logout() {
      firebase.auth().signOut()
    },
    sendMessage() {
      if (this.messageText) {
        firebase.database().ref('messages/').push({
          timestamp: moment().toJSON(),
          text: this.messageText,
          sender: {
            uid: this.user.uid,
            name: this.user.name
          }
        }).then(i => {
          this.messageText = null
        })
      }
    },
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = {
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          uid: user.uid
        }
        // User is signed in.
        console.log('user')

        const database = firebase.database();
        this.loaded = true
        database.ref('messages/').on('value', (snapshot) => {

          this.messages = []
          snapshot.forEach(message => {
            let messageContent = message.val()
            messageContent.you = messageContent.sender.uid !== this.user.uid
            messageContent.timeAgo = moment(messageContent.timestamp).fromNow()
            this.messages.push(messageContent)
          })
        });
      } else {
        // No user is signed in.
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithRedirect(provider);

        console.log('no user')
      }
    });
  }
})