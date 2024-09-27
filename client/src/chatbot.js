class Chatbox {
  constructor() {
    this.args = {
      openButton: document.querySelector(".chatboxbutton"),
      chatBox: document.querySelector(".chatboxsupport"),
      sendButton: document.querySelector(".sendbutton"),
      loader: document.querySelector(".loader"),
    };

    this.state = false;
    this.messages = [];
  }

  //Toggle chatbot box on click and enter key
  display() {
    const { openButton, chatBox, sendButton } = this.args;

    openButton.addEventListener("click", () => this.toggleState(chatBox));
    sendButton.addEventListener("click", () => this.onSendButton(chatBox));

    const node = chatBox.querySelector("input");
    node.addEventListener("keyup", ({ key }) => {
      if (key === "Enter") {
        this.onSendButton(chatBox);
      }
    });
  }

  //Toggle chatbot box state
  toggleState(chatbox) {
    this.state = !this.state;

    if (this.state) {
      chatbox.classList.add("chatboxactive");
    } else {
      chatbox.classList.remove("chatboxactive");
    }
  }

  //When send button is pressed
  async onSendButton(chatbox) {
    var textField = chatbox.querySelector("input");
    let userInput = textField.value;  
    const chatBoxMessages = chatbox.querySelector(".chatboxmessages");

    if (userInput === "") {
      return;
    }

    //Add user msg to chatbox
    const userMessage = document.createElement("div");
    userMessage.textContent = userInput;
    userMessage.classList.add("messagesitemoperator");
    chatBoxMessages.appendChild(userMessage);
    chatbox.scrollTop = chatbox.scrollHeight

    //Show Loader
    this.showLoader();

    //Send user msg to backend
    try {
      const response = await fetch("http://localhost:8000/ask/", {
        method: "POST",
        body: JSON.stringify({
          question : userInput,
        }),
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });

      //Handling Streamed Response
      const reader = response.body.getReader();
      console.log(reader);
      const decoder = new TextDecoder('utf-8');
      let answer = document.createElement("div");
      answer.textContent = "";
      answer.classList.add("messagesitem");
      chatBoxMessages.appendChild(answer);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        answer.textContent += decoder.decode(value);
        //chatBoxMessages.scrollTop = chatbox.scrollHeight;
        this.scrollLastMessageIntoView(chatBoxMessages); // Scroll to bottom while receiving data
      }
      textField.value = "";
    } catch (error) {
      console.error("Error:", error);
      textField.value = "";
    } finally {
      this.hideLoader();
    }
  }

  scrollLastMessageIntoView(container) {
    const lastMessage = container.lastElementChild;
    if (lastMessage) {
      lastMessage.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }

  showLoader() {
    this.args.loader.style.display = "block";
  }

  hideLoader() {
    this.args.loader.style.display = "none";
  }
}

const chatbox = new Chatbox();
chatbox.display();
