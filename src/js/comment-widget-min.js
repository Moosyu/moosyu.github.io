const s_stylePath="/css/comment-widget-min.css",s_formId="1FAIpQLScfGWAve7dy54tUkVxhd8apXNcAxallNWV4K1yKCUMqJcBadQ",s_nameId="1345813367",s_websiteId="1029334929",s_textId="1058530777",s_pageId="1179760552",s_replyId="802495416",s_sheetId="1gdeW-A8Nhi-StMJb75n1QHQOQYKUBVXhfKnQF1Eo1Ts",s_timezone=12,s_daylightSavings=!0,s_dstStart=["September","Sunday",29,2],s_dstEnd=["April","Sunday",2,3],s_commentsPerPage=10,s_maxLength=500,s_maxLengthName=16,s_commentsOpen=!0,s_collapsedReplies=!0,s_longTimestamp=!1;let s_includeUrlParameters=!1;const s_fixRarebitIndexPage=!1,s_wordFilterOn=!0,s_filterReplacement="****",s_filteredWords=["nigger","faggot","nigga","rape","niggers","niggas","nigur","niiger","niigr","chink","niger","fag","n i gg e r"],s_widgetTitle="leave a comment!",s_submitButtonLabel="submit",s_loadingText="loading comments... (or its broken)",s_noCommentsText="no comments yet!",s_closedCommentsText="comments are closed temporarily!",s_websiteText="website",s_replyButtonText="reply",s_mentionButton="@mention",s_replyingText="replying to",s_expandRepliesText="show replies",s_hideRepliesText="hide replies",s_leftButtonText="<<",s_rightButtonText=">>";const c_cssLink=document.createElement("link");c_cssLink.type="text/css",c_cssLink.rel="stylesheet",c_cssLink.href=s_stylePath,document.getElementsByTagName("head")[0].appendChild(c_cssLink);const v_mainHtml=`\n    <div id="c_inputDiv">\n        <form autocomplete="off" id="c_form" onsubmit="c_submitButton.disabled = true; v_submitted = true;" method="post" target="c_hiddenIframe" action="https://docs.google.com/forms/d/e/${s_formId}/formResponse"></form>\n    </div>\n    <div id="c_container">${s_loadingText}</div>\n`,v_formHtml=`\n    <h2 id="c_widgetTitle">${s_widgetTitle}</h2>\n    <p>If you're going to make a shitpost comment please at least try to be funny bc at the moment you guys are mad boring!!</p>\n\n    <div class="non-message">\n        <div id="c_nameWrapper" class="c-inputWrapper">\n            <input class="c-input c-nameInput" name="entry.${s_nameId}" id="entry.${s_nameId}" type="text" maxlength="16" placeholder="name (required)" required>\n        </div>\n\n        <div id="c_websiteWrapper" class="c-inputWrapper">\n            <input class="c-input c-websiteInput" name="entry.${s_websiteId}" id="entry.${s_websiteId}" placeholder="website (optional)" type="url" pattern="https://.*">\n        </div>\n    </div>\n\n    <div class="emoji-panel">\n        <img class="emoji-listed" src="/assets/emojis/smile.webp" alt=":smile:" onclick="addEmoji('emoji1')">\n        <img class="emoji-listed" src="/assets/emojis/annoyed.webp" alt=":annoyed:" onclick="addEmoji('emoji2')">\n        <img class="emoji-listed" src="/assets/emojis/talk.webp" alt=":talk:" onclick="addEmoji('emoji3')">\n        <img class="emoji-listed" src="/assets/emojis/pissed.webp" alt=":pissed:" onclick="addEmoji('emoji4')">\n        <img class="emoji-listed" src="/assets/emojis/nervous.webp" alt=":nervous:" onclick="addEmoji('emoji5')">\n        <img class="emoji-listed" src="/assets/emojis/cool.webp" alt=":cool:" onclick="addEmoji('emoji6')">\n        <img class="emoji-listed" src="/assets/emojis/exclaim.webp" alt=":exclaim:" onclick="addEmoji('emoji7')">\n        <img class="emoji-listed" src="/assets/emojis/sad.webp" alt=":sad:" onclick="addEmoji('emoji8')">\n        <img class="emoji-listed" src="/assets/emojis/freak.webp" alt=":freak:" onclick="addEmoji('emoji9')">\n        <img class="emoji-listed" src="/assets/emojis/grahh.webp" alt=":grahh:" onclick="addEmoji('emoji10')">\n        <img class="emoji-listed" src="/assets/emojis/sobbing.webp" alt=":sobbing:" onclick="addEmoji('emoji11')">\n        <img class="emoji-listed" src="/assets/emojis/blunder.webp" alt=":blunder:" onclick="addEmoji('emoji12')">\n\n    </div>\n\n    <div id="c_textWrapper" class="c-inputWrapper">\n        <textarea class="c-input c-textInput" name="entry.${s_textId}" id="entry.${s_textId}" maxlength="500" placeholder="enter a message (please be nice)" required>\n        </textarea>\n        <span class="emoji" onclick="emojiWindow()">😊</span>\n    </div>\n\n    <input id="c_submitButton" name="c_submitButton" type="submit" value="submit" disabled>\n`;document.getElementById("c_widget").innerHTML=v_mainHtml;const c_form=document.getElementById("c_form");c_form.innerHTML=s_commentsOpen?v_formHtml:s_closedCommentsText;const c_container=document.getElementById("c_container");let v_filteredWords,c_submitButton,v_pageNum=1,v_amountOfPages=1,v_commentMax=1,v_commentMin=1;s_wordFilterOn&&(v_filteredWords=s_filteredWords.join("|"),v_filteredWords=new RegExp(String.raw`\b(${v_filteredWords})\b`,"ig")),c_submitButton=s_commentsOpen?document.getElementById("c_submitButton"):document.createElement("button");let v_pagePath=window.location.pathname.replace(/\/+$/,"");""!==v_pagePath&&"/index.html"!==v_pagePath||(v_pagePath="/"),s_includeUrlParameters&&(v_pagePath+=window.location.search);const c_pageInput=document.createElement("input");c_pageInput.value=v_pagePath,c_pageInput.type="text",c_pageInput.style.display="none",c_pageInput.id="entry."+s_pageId,c_pageInput.name=c_pageInput.id,c_form.appendChild(c_pageInput);let c_replyingText=document.createElement("span");c_replyingText.style.display="none",c_replyingText.id="c_replyingText",c_form.appendChild(c_replyingText),c_replyingText=document.getElementById("c_replyingText");let c_replyInput=document.createElement("input");c_replyInput.type="text",c_replyInput.style.display="none",c_replyInput.id="entry.802495416",c_replyInput.name=c_replyInput.id,c_form.appendChild(c_replyInput),c_replyInput=document.getElementById("entry.802495416");let v_submitted=!1,c_hiddenIframe=document.createElement("iframe");function fixFrame(){v_submitted=!1,c_hiddenIframe.srcdoc="",getComments()}function getComments(){c_submitButton.disabled,c_replyingText.style.display="none",c_replyInput.value="",s_commentsOpen&&(document.getElementById(`entry.${s_nameId}`).value="",document.getElementById(`entry.${s_websiteId}`).value="",document.getElementById(`entry.${s_textId}`).value="");getSheet(`https://docs.google.com/spreadsheets/d/${s_sheetId}/gviz/tq?`).then((e=>{const t=JSON.parse(e.split("\n")[1].replace(/google.visualization.Query.setResponse\(|\);/g,""));let n=t.table.cols.findIndex((e=>"Page"==e.label)),s=[];if(t.table.parsedNumHeaders>0)for(r=0;r<t.table.rows.length;r++){let e;if(e=t.table.rows[r].c[n]?t.table.rows[r].c[n].v:"",e==v_pagePath){let e={};for(c=0;c<t.table.cols.length;c++){let n;n=t.table.rows[r].c[c]?t.table.rows[r].c[c].v:"",e[t.table.cols[c].label]=n}e.Timestamp2=t.table.rows[r].c[0].f,s.push(e)}}0==s.length||Object.keys(s[0]).length<2?c_container.innerHTML=s_noCommentsText:displayComments(s),c_submitButton.disabled=!1}))}function getSheet(e){return new Promise((function(t,n){fetch(e).then((e=>{e.ok?e.text().then((e=>{e||n("Invalid data pulled from sheet"),t(e)})):n("Could not find Google Sheet with that URL")}))}))}c_hiddenIframe.id="c_hiddenIframe",c_hiddenIframe.name="c_hiddenIframe",c_hiddenIframe.style.display="none",c_hiddenIframe.setAttribute("onload","if(v_submitted){fixFrame()}"),c_form.appendChild(c_hiddenIframe),c_hiddenIframe=document.getElementById("c_hiddenIframe");let a_commentDivs=[];function displayComments(e){a_commentDivs=[],c_container.innerHTML="";let t=[];for(i=0;i<e.length;i++)e[i].Reply&&(t.push(e[i]),e.splice(i,1),i--);for(v_amountOfPages=Math.ceil(e.length/s_commentsPerPage),v_commentMax=s_commentsPerPage*v_pageNum,v_commentMin=v_commentMax-s_commentsPerPage,e.reverse(),i=0;i<e.length;i++){let t=createComment(e[i]),n=document.createElement("button");n.innerHTML=s_replyButtonText,n.value=t.id,n.setAttribute("onclick","openReply(this.value)"),n.className="c-replyButton",t.appendChild(n),t.style.display="none",i>=v_commentMin&&i<v_commentMax&&(t.style.display="block"),t.className="c-comment",c_container.appendChild(t),a_commentDivs.push(document.getElementById(t.id))}for(i=0;i<t.length;i++){let e=createComment(t[i]);const n=t[i].Reply,s=document.getElementById(n);let a;document.getElementById(n+"-replies")?a=document.getElementById(n+"-replies"):(a=document.createElement("div"),a.id=n+"-replies",s_collapsedReplies&&(a.style.display="none"),a.className="c-replyContainer",s.appendChild(a)),e.className="c-reply",a.appendChild(e);let o=document.createElement("button");o.innerHTML=s_mentionButton,o.className="c-replyButton",e.appendChild(o),o.addEventListener("click",(function(){const e=document.getElementById("entry."+s_textId);e.focus(),openReply(this.closest(".c-comment").id),e.value=`@[${this.parentElement.id.split("|--|")[0]}] `}))}if(s_collapsedReplies){const e=document.getElementsByClassName("c-replyContainer");for(i=0;i<e.length;i++){const t=e[i].childNodes.length,n=e[i].parentElement,s=document.createElement("button");s.innerHTML=s_expandRepliesText+` (${t})`,s.setAttribute("onclick","expandReplies(this.parentElement.id)"),s.className="c-expandButton",n.insertBefore(s,n.lastChild)}}if(v_amountOfPages>1){let e=document.createElement("div");leftButton=document.createElement("button"),leftButton.innerHTML=s_leftButtonText,leftButton.id="c_leftButton",leftButton.name="left",leftButton.setAttribute("onclick","changePage(this.name)"),1==v_pageNum&&(leftButton.disabled=!0),leftButton.className="c-paginationButton",e.appendChild(leftButton);let t=document.createElement("span");t.id="c_pageInfo",t.innerHTML=`1/${v_amountOfPages}`,e.appendChild(t),rightButton=document.createElement("button"),rightButton.innerHTML=s_rightButtonText,rightButton.id="c_rightButton",rightButton.name="right",rightButton.setAttribute("onclick","changePage(this.name)"),v_pageNum==v_amountOfPages&&(rightButton.disabled=!0),rightButton.className="c-paginationButton",e.appendChild(rightButton),e.id="c_pagination",c_container.appendChild(e)}}function createComment(e){let t,n=document.createElement("div"),s=convertTimestamp(e.Timestamp);t=s_longTimestamp?s[0]:s[1];const i=e.Name+"|--|"+e.Timestamp2;n.id=i;let a=document.createElement("h3"),o=e.Name;if(s_wordFilterOn&&(o=o.replace(v_filteredWords,s_filterReplacement)),a.innerText=o,a.className="c-name",n.appendChild(a),e.Website){let t=document.createElement("a");t.innerText=s_websiteText,t.href=e.Website,t.className="c-site",n.appendChild(t)}let l=document.createElement("span");l.innerText=t,l.className="c-timestamp",n.appendChild(l);let c=document.createElement("p"),m=sanitizeInput(e.Text);return s_wordFilterOn&&(m=m.replace(v_filteredWords,s_filterReplacement)),m=m.replace(/:(smile|annoyed|talk|pissed|nervous|cool|exclaim|sad|freak|grahh|sobbing|blunder):/g,(function(e,t){const n={smile:"smile",annoyed:"annoyed",talk:"talk",pissed:"pissed",nervous:"nervous",cool:"cool",exclaim:"exclaim",sad:"sad",freak:"freak",grahh:"grahh",sobbing:"sobbing",blunder:"blunder"}[t];return n?`<img src="/assets/emojis/${n}.webp" class="c-emoji" alt="${t}">`:e})),c.innerHTML=m,c.className="c-text",n.appendChild(c),n}function sanitizeInput(e){return(t=e,t.replace(/[&<>"']/g,(e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[e])))).replace(/(^|\s)@\[([^\]]+?)\]/g,'$1<span class="highlight-mention">@$2</span>');var t}function convertTimestamp(e){const t=e.split("(")[1].split(")")[0].split(","),n=new Date(t[0],t[1],t[2],t[3],t[4],t[5]),s=-1*(60*s_timezone+n.getTimezoneOffset());let i=new Date(n.getTime()+60*s*1e3);s_daylightSavings&&(i=isDST(i));return[i.toLocaleString("en-GB"),i.toLocaleDateString("en-GB")]}function isDST(e){const t=[getMonthNum(s_dstStart[0]),getDayNum(s_dstStart[1]),s_dstStart[2],s_dstStart[3]],n=[getMonthNum(s_dstEnd[0]),getDayNum(s_dstEnd[1]),s_dstEnd[2],s_dstEnd[3]],s=e.getFullYear();let i=new Date(s,t[0],1);i=nthDayOfMonth(t[1],t[2],i,t[3]).getTime();let a=new Date(s,n[0],1);return a=nthDayOfMonth(n[1],n[2],a,n[3]).getTime(),time=e.getTime(),time>=i&&time<a&&e.setHours(e.getHours()-1),e}function nthDayOfMonth(e,t,n,s){var i=0,a=new Date(n);for(a.setDate(1);i<t;)a.setDate(a.getDate()+1),a.getDay()==e&&i++;return a.setHours(s),a}function getDayNum(e){let t;switch(e.toLowerCase()){case"sunday":default:t=0;break;case"monday":t=1;break;case"tuesday":t=2;break;case"wednesday":t=3;break;case"thursday":t=4;break;case"friday":t=5;break;case"saturday":t=6}return t}function getMonthNum(e){let t;switch(e.toLowerCase()){case"january":t=0;break;case"february":t=1;break;case"march":t=2;break;case"april":t=3;break;case"may":t=4;break;case"june":t=5;break;case"july":t=6;break;case"august":t=7;break;case"september":t=8;break;case"october":t=9;break;case"november":t=10;break;case"december":t=11}return t}const link=document.createElement("a");function openReply(e){"none"==c_replyingText.style.display?(c_replyingText.innerHTML=s_replyingText+` ${e.split("|--|")[0]}...`,c_replyInput.value=e,c_replyingText.style.display="block"):(c_replyingText.innerHTML="",c_replyInput.value="",c_replyingText.style.display="none"),link.click()}function emojiWindow(){const e=document.querySelector(".non-message"),t=document.querySelector(".emoji-panel"),n="none"==e.style.display;e.style.display=n?"block":"none",t.style.display=n?"none":"flex"}function addEmoji(e){const t={emoji1:"smile",emoji2:"annoyed",emoji3:"talk",emoji4:"pissed",emoji5:"nervous",emoji6:"cool",emoji7:"exclaim",emoji8:"sad",emoji9:"freak",emoji10:"grahh",emoji11:"sobbing",emoji12:"blunder"}[e]||e,n=document.getElementById("entry."+s_textId),s=n.selectionStart,i=n.value.substring(0,s),a=n.value.substring(s,n.value.length);n.value=i+` :${t}: `+a,n.focus()}function expandReplies(e){const t=document.getElementById(`${e}-replies`),n=document.getElementById(e).querySelector(".c-expandButton"),s=t.children.length;"none"==t.style.display?(t.style.display="block",n.innerHTML=`hide replies (${s})`):(t.style.display="none",n.innerHTML=s_expandRepliesText+` (${s})`)}function changePage(e){const t=document.getElementById("c_leftButton"),n=document.getElementById("c_rightButton"),s=document.getElementById("c_pageInfo");let a;switch(e){case"left":a=-1;break;case"right":a=1;break;default:a=0}let o=v_pageNum+a;if(!(o>v_amountOfPages||o<1))for(t.disabled=!1,n.disabled=!1,1==o&&(t.disabled=!0),o==v_amountOfPages&&(n.disabled=!0),s.innerHTML=`${o}/${v_amountOfPages}`,v_pageNum=o,v_commentMax=s_commentsPerPage*v_pageNum,v_commentMin=v_commentMax-s_commentsPerPage,i=0;i<a_commentDivs.length;i++)a_commentDivs[i].style.display="none",i>=v_commentMin&&i<v_commentMax&&(a_commentDivs[i].style.display="block")}link.href="#c_inputDiv",document.getElementById("c_submitButton").addEventListener("click",(function(){document.querySelector(".non-message").style.display="block",document.querySelector(".emoji-panel").style.display="none"})),document.querySelectorAll(".c-textInput").forEach((e=>{e.addEventListener("input",(function(){this.style.height="0px",this.style.height=this.scrollHeight-7+"px"}))})),getComments();