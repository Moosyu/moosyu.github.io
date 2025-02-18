import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getDatabase, ref, push, onValue, serverTimestamp, query, limitToLast, orderByChild } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

export async function initializeCommentWidget() {
try {
const emojiList = `
<img class="emoji-listed" src="https://moosyu.github.io/assets/emojis/smile.webp" alt=":smile:">
<img class="emoji-listed" src="https://moosyu.github.io/assets/emojis/annoyed.webp" alt=":annoyed:">
<img class="emoji-listed" src="https://moosyu.github.io/assets/emojis/talk.webp" alt=":talk:">
<img class="emoji-listed" src="https://moosyu.github.io/assets/emojis/pissed.webp" alt=":pissed:">
<img class="emoji-listed" src="https://moosyu.github.io/assets/emojis/nervous.webp" alt=":nervous:">
<img class="emoji-listed" src="https://moosyu.github.io/assets/emojis/cool.webp" alt=":cool:">
<img class="emoji-listed" src="https://moosyu.github.io/assets/emojis/exclaim.webp" alt=":exclaim:">
<img class="emoji-listed" src="https://moosyu.github.io/assets/emojis/sad.webp" alt=":sad:">
`

const commentForm = `
<form id="comment-form">
    <div id="name-web">
        <label for="username">Name:</label><br>
        <input id="username" name="username" required><br>
        <label for="url">Website:</label><br>
        <input id="url" name="url" type="url" pattern="https://.*"><br>
    </div>
    <div id="emoji-selector">
        ${emojiList}
    </div>
    <label for="text">Message:</label><br>
    <input id="text" name="text" required>
    <input id="submit-btn" type="submit">
    <span id="emoji-btn">😊</span>
</form>
`;

const repliesForm = `
<form id="reply-form">
<div id="r_name-web">
    <label for="r_username">Name:</label><br>
    <input id="r_username" name="r_username" required><br>
</div>
<div id="r_emoji-selector" style="display: none;">
    ${emojiList}
</div>
<label>Message:</label><br>
<input id="r_text" required>
<input id="r_submit-btn" type="submit">
<span id="r_emoji-btn">😊</span>
</form>
`;

const firebaseConfig = {
apiKey: "AIzaSyCYc7hb1MU9y1stUNcV5j5CVn5eOegH94E",
authDomain: "comment-widget-c3cb5.firebaseapp.com",
databaseURL: "https://comment-widget-c3cb5-default-rtdb.firebaseio.com",
projectId: "comment-widget-c3cb5",
storageBucket: "comment-widget-c3cb5.firebasestorage.app",
messagingSenderId: "594910631915",
appId: "1:594910631915:web:882393ed2b9b9bcebd6bae",
measurementId: "G-J3Q8CPB83X"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
signInAnonymously(auth).catch((error) => {
    console.error("Error signing in anonymously:", error);
});

let isSubmitting = false;
let commentCount = 0;

const commentsRef = ref(db, 'comments');
const commentsQuery = query(commentsRef, orderByChild('timestamp'), limitToLast(10));
onValue(commentsQuery, (snapshot) => {
const data = snapshot.val();
if (data) {
    const reversedData = Object.entries(data).reverse();
    displayComments(Object.fromEntries(reversedData));
}
}, (error) => {
    console.error("Error fetching data:", error);
});

const widgetContainer = document.getElementById('c_widget');
widgetContainer.innerHTML = commentForm;

const commentEmojiContainer = document.querySelector('#emoji-selector');
const commentTextInput = document.querySelector('#text');
const nameWebDiv = document.querySelector('#name-web');
const emojiSelectDiv = document.querySelector('#emoji-selector');

const form = document.querySelector('#comment-form');
form.addEventListener('submit', handleSubmit);

addEmoji(commentEmojiContainer, commentTextInput);

document.querySelector('#emoji-btn').addEventListener('click', () => {
if (nameWebDiv.style.display === "block" || nameWebDiv.style.display === "") {
    nameWebDiv.style.display = "none";
    emojiSelectDiv.style.display = "flex";
} else {
    nameWebDiv.style.display = "block";
    emojiSelectDiv.style.display = "none";
    }
});

document.getElementById('submit-btn').addEventListener('click', () => {
    emojiSelectDiv.style.display = "none";
    nameWebDiv.style.display = "block";
});

function displayComments(data) {
let commentsContainer = document.getElementById("comments-box");
if (!commentsContainer) { // so it doesnt like duplicate when you add shit
    commentsContainer = document.createElement('div');
    commentsContainer.id = "comments-box";
    widgetContainer.appendChild(commentsContainer);
} else {
    commentsContainer.innerHTML = '';
}

const loadMoreBtn = document.createElement('button');
loadMoreBtn.textContent = "No more comments to load!";
loadMoreBtn.id = "load-more";
loadMoreBtn.style.marginTop = "20px";

Object.entries(data).forEach(([key, value]) => {
    commentCount += 1;
    const createElement = (tag, options = {}) => {
    const el = document.createElement(tag);
    Object.assign(el, options);
    return el;
    };
    const commentContainer = createElement('div', { id: key, className: "comment" });
    const usernameElement = createElement('h2', {
    textContent: value.data.username,
    className: "username",
    });
    const textElement = createElement('p', { innerHTML: sanitizeInput(value.data.text) });
    emojiReplace(textElement);
    const urlElement = createElement('a', { // scopes ruined my life
    textContent: value.data.url ? "Website" : "",
    href: value.data.url || "#",
    target: value.data.url ? "_blank" : undefined,
    });
    const dateElement = createElement('span', {
    textContent: new Date(value.timestamp).toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
    }),
    className: "date",
    });
    const replyBtn = createElement('button', { textContent: "Reply", });
    const showReplies = createElement('button', {
    textContent: value.replies ? "Show replies" : "",
    style: value.replies ? "display: inline-block; margin-left: 5px;" : "display: none;",
    });
    const repliesContainer = createElement('div', { className: "replies", style: "display: none;" });

    replyBtn.addEventListener('click', () => {
    if (replyForm.style.display === "block") {
        replyForm.style.display = "none";
        replyForm.reset();
    } else {
        replyForm.style.display = "block";
    }
    });

    showReplies.addEventListener('click', () => {
    if (repliesContainer.style.display === "block") {
        repliesContainer.style.display = "none";
        showReplies.textContent = "Show replies";
    } else {
        repliesContainer.style.display = "block";
        showReplies.textContent = "Hide replies";
    }
    });

    if (value.replies) {
    Object.entries(value.replies).forEach(([replyKey, replyValue]) => {
        const replyElement = createElement('div', { className: "reply" });
        const replyUser = createElement('h3', {
        textContent: replyValue.username,
        className: "reply-username",
        });
        const replyText = createElement('p', {
        textContent: replyValue.text,
        className: "reply-text",
        });

        emojiReplace(replyText);
        replyText.innerHTML = replyText.innerHTML.replace(/(^|\s)@\[(.+?)\]/g, '$1<span class="highlight-mention">@$2</span>');

        const replyDate = createElement('span', {
        textContent: new Date(replyValue.timestamp).toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
            month: '2-digit',
            day: '2-digit',
            year: 'numeric',
        }),
        className: "reply-date",
        });
        const mentionBtn = createElement('button', { textContent: "@Mention" });
        mentionBtn.addEventListener('click', () => {
        if (replyForm.style.display === "none") {
            replyForm.style.display = "block";
        }
        const textarea = document.getElementById("r_text" + key);
        textarea.focus();
        textarea.value = "@[" + replyValue.username + "] ";
        });
        replyElement.append(replyUser, replyDate, replyText, mentionBtn);
        repliesContainer.appendChild(replyElement);
    });
    }

    const replyForm = createReplyForm(key);

    replyForm.addEventListener('submit', (event) => {
    event.preventDefault();
    handleReplySubmit(key, new FormData(replyForm));
    replyForm.reset();
    });

    commentContainer.append(usernameElement, dateElement, urlElement, textElement, replyBtn, showReplies, repliesContainer, replyForm);
    commentsContainer.appendChild(commentContainer);
});

if (!commentsContainer.contains(loadMoreBtn)) {
    commentsContainer.appendChild(loadMoreBtn);
    const commentCountText = document.createTextNode(`${commentCount} comments have been loaded!`);
    const commentCountElement = document.createElement('span');
    commentCountElement.appendChild(commentCountText);
    commentCountElement.style.margin = "10px";
    commentsContainer.appendChild(commentCountElement);
} else {
    commentsContainer.removeChild(loadMoreBtn);
    commentsContainer.appendChild(loadMoreBtn);
}

widgetContainer.appendChild(commentsContainer);
}

function handleReplySubmit(commentKey, formData) {
if (isSubmitting) return; // prevents duplicate submissions
isSubmitting = true;

const replyData = {
    username: formData.get("r_username"),
    text: formData.get("r_text"),
    timestamp: serverTimestamp(),
};

const repliesRef = ref(db, `comments/${commentKey}/replies`);
push(repliesRef, replyData).catch((error) => {
    console.error("Error adding reply:", error);
    }).finally(() => {
    isSubmitting = false;
    });
}

function sanitizeInput(input) {
const escapeHTML = (str) =>
    str.replace(/[&<>"']/g, (char) =>
        ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char])
    );
return escapeHTML(input);
}

function emojiReplace(elementText) {
    elementText.innerHTML = elementText.innerHTML.replace(/:(smile|annoyed|talk|pissed|nervous|cool|exclaim|sad):/g, function(match, p1) {
    const emojiMap = {
        'smile' : 'smile',
        'annoyed' : 'annoyed',
        'talk' : 'talk',
        'pissed' : 'pissed',
        'nervous' : 'nervous',
        'cool' : 'cool',
        'exclaim' : 'exclaim',
        'sad' : 'sad'
    };

    const emojiName = emojiMap[p1];
    if (emojiName) {
        return `<img src="https://moosyu.github.io/assets/emojis/${emojiName}.webp" class="c-emoji" alt="${p1}">`;
    } else {
        return match;
    }
    });
    }

    function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = {};
    form.reset();

    for (let keyValue of formData.entries()) {
        data[keyValue[0]] = keyValue[1];
    }

    push(commentsRef, {
        timestamp: serverTimestamp(),
        data: data
    });
    }

    function createReplyForm(commentKey) {
    const form = document.createElement('form');
    form.id = `reply-form-${commentKey}`;
    form.style = `display: none;`;
    form.innerHTML = repliesForm;

    const usernameDiv = form.querySelector(`#r_name-web`);
    const emojiSelector = form.querySelector(`#r_emoji-selector`);
    const rTextBox = form.querySelector(`#r_text`);
    rTextBox.id = `r_text${commentKey}`;

    addEmoji(emojiSelector, rTextBox);

    form.querySelector('#r_emoji-btn').addEventListener('click', () => {
        if (emojiSelector.style.display === 'none') {
        emojiSelector.style.display = 'flex';
        usernameDiv.style.display = 'none';
        } else {
        emojiSelector.style.display = 'none';
        usernameDiv.style.display = 'block';
        }
    });

    form.querySelector('#r_submit-btn').addEventListener('click', () => {
        form.querySelector('#r_emoji-selector').style.display = "none";
        form.querySelector('#r_name-web').style.display = "block";
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        handleReplySubmit(commentKey, new FormData(form));
        form.reset();
    });

    return form;
}

function addEmoji(emojiContainer, textInput) {
    if (!emojiContainer || !textInput) return;

    emojiContainer.addEventListener('click', function (event) {
        if (event.target.classList.contains('emoji-listed')) {
        const emojiCode = event.target.getAttribute('alt');
        textInput.value += ` ${emojiCode} `;
        textInput.focus();
        }
    });
    }} catch (error) {
        console.error("Loading comments loaded with error:", error);
    }
}