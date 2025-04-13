const s_stylePath='/css/comment-widget.css';const s_formId='1FAIpQLScfGWAve7dy54tUkVxhd8apXNcAxallNWV4K1yKCUMqJcBadQ';const s_nameId='1345813367';const s_websiteId='1029334929';const s_textId='1058530777';const s_pageId='1179760552';const s_replyId='802495416';const s_sheetId='1gdeW-A8Nhi-StMJb75n1QHQOQYKUBVXhfKnQF1Eo1Ts';const s_adminId='1501188383';const s_IPId='1154755268';const s_timezone=+12;const s_daylightSavings=!0;const s_dstStart=['September','Sunday',29,2];const s_dstEnd=['April','Sunday',2,3];const s_commentsPerPage=10;const s_maxLength=500;const s_maxLengthName=16;const s_commentsOpen=!0;const s_collapsedReplies=!0;const s_longTimestamp=!1;let s_includeUrlParameters=!1;const s_fixRarebitIndexPage=!1;const s_wordFilterOn=!0;const s_filterReplacement='****';const s_filteredWords=['nigger','faggot','nigga','rape','niggers','niggas','nigur','niiger','niigr','chink','niger','fag','n i gg e r']
const s_widgetTitle='leave a comment!';const s_submitButtonLabel='submit';const s_loadingText='loading comments... (or its broken)';const s_noCommentsText='no comments yet!';const s_closedCommentsText='comments are closed temporarily!';const s_websiteText='website';const s_replyButtonText='reply';const s_mentionButton='@mention';const s_replyingText='replying to';const s_expandRepliesText='show replies';const s_hideRepliesText='hide replies';const s_leftButtonText='<<';const s_rightButtonText='>>';let userIP=null;fetch('https://api.ipify.org?format=json').then(res=>res.json()).then(data=>{userIP=data.ip});if(s_fixRarebitIndexPage){s_includeUrlParameters=!0}
const v_mainHtml=`
    <div id="c_inputDiv">
        <form autocomplete="off" id="c_form" onsubmit="c_submitButton.disabled = true; v_submitted = true;" method="post" target="c_hiddenIframe" action="https://docs.google.com/forms/d/e/${s_formId}/formResponse"></form>
    </div>
    <div id="c_container">${s_loadingText}</div>
`;const v_formHtml=`
    <h2 id="c_widgetTitle">${s_widgetTitle}</h2>

    <p style="padding-left: 5px;">Please try your best to be nice. Unless there is a <span class="admin-title">[REAL]</span> beside the name it's not me.</p>

    <div class="non-message">
        <div id="c_nameWrapper" class="c-inputWrapper">
            <input class="c-input c-nameInput" name="entry.${s_nameId}" id="entry.${s_nameId}" type="text" maxlength="${s_maxLengthName}" placeholder="Name" required>
        </div>

        <div id="c_websiteWrapper" class="c-inputWrapper">
            <input class="c-input c-websiteInput" name="entry.${s_websiteId}" id="entry.${s_websiteId}" placeholder="Site URL (optional)" type="url" pattern="https://.*">
        </div>
    </div>

    <div class="emoji-panel">
        <img class="emoji-listed" src="/assets/emojis/smile.webp" alt=":smile:" onclick="addEmoji('emoji1')">
        <img class="emoji-listed" src="/assets/emojis/annoyed.webp" alt=":annoyed:" onclick="addEmoji('emoji2')">
        <img class="emoji-listed" src="/assets/emojis/talk.webp" alt=":talk:" onclick="addEmoji('emoji3')">
        <img class="emoji-listed" src="/assets/emojis/pissed.webp" alt=":pissed:" onclick="addEmoji('emoji4')">
        <img class="emoji-listed" src="/assets/emojis/nervous.webp" alt=":nervous:" onclick="addEmoji('emoji5')">
        <img class="emoji-listed" src="/assets/emojis/cool.webp" alt=":cool:" onclick="addEmoji('emoji6')">
        <img class="emoji-listed" src="/assets/emojis/exclaim.webp" alt=":exclaim:" onclick="addEmoji('emoji7')">
        <img class="emoji-listed" src="/assets/emojis/sad.webp" alt=":sad:" onclick="addEmoji('emoji8')">
        <img class="emoji-listed" src="/assets/emojis/freak.webp" alt=":freak:" onclick="addEmoji('emoji9')">
        <img class="emoji-listed" src="/assets/emojis/grahh.webp" alt=":grahh:" onclick="addEmoji('emoji10')">
        <img class="emoji-listed" src="/assets/emojis/sobbing.webp" alt=":sobbing:" onclick="addEmoji('emoji11')">
        <img class="emoji-listed" src="/assets/emojis/blunder.webp" alt=":blunder:" onclick="addEmoji('emoji12')">

    </div>

    <div id="c_textWrapper" class="c-inputWrapper">
        <textarea class="c-input c-textInput" name="entry.${s_textId}" id="entry.${s_textId}" maxlength="${s_maxLength}" placeholder="Enter a message" required>
        </textarea>
        <input name="entry.${s_adminId}" id="entry.${s_adminId}" type="hidden" readonly value="false">
        <input name="entry.${s_IPId}" id="entry.${s_IPId}" type="hidden">
        <span class="emoji" onclick="emojiWindow()">😊</span>
    </div>

    <input id="c_submitButton" name="c_submitButton" type="submit" value="${s_submitButtonLabel}" disabled>
`;document.getElementById('c_widget').innerHTML=v_mainHtml;const c_form=document.getElementById('c_form');if(s_commentsOpen){c_form.innerHTML=v_formHtml}else{c_form.innerHTML=s_closedCommentsText}
const c_container=document.getElementById('c_container');let v_pageNum=1;let v_amountOfPages=1;let v_commentMax=1;let v_commentMin=1;function getRandomInt(max){return Math.floor(Math.random()*max)}
let v_filteredWords;if(s_wordFilterOn){v_filteredWords=s_filteredWords.join('|');v_filteredWords=new RegExp(String.raw `\b(${v_filteredWords})\b`,'ig')}
let c_submitButton;if(s_commentsOpen){c_submitButton=document.getElementById('c_submitButton')}else{c_submitButton=document.createElement('button')}
let v_pagePath=window.location.pathname.replace(/\/+$/,'');if(v_pagePath===""||v_pagePath==="/index.html"){v_pagePath="/"}
if(s_includeUrlParameters){v_pagePath+=window.location.search}
if(s_fixRarebitIndexPage&&v_pagePath=='/'){v_pagePath='/?pg=1'}
const c_pageInput=document.createElement('input');c_pageInput.value=v_pagePath;c_pageInput.type='text';c_pageInput.style.display='none';c_pageInput.id='entry.'+s_pageId;c_pageInput.name=c_pageInput.id;c_form.appendChild(c_pageInput);let c_replyingText=document.createElement('span');c_replyingText.style.display='none';c_replyingText.id='c_replyingText';c_form.appendChild(c_replyingText);c_replyingText=document.getElementById('c_replyingText');let c_replyInput=document.createElement('input');c_replyInput.type='text';c_replyInput.style.display='none';c_replyInput.id='entry.'+s_replyId;c_replyInput.name=c_replyInput.id;c_form.appendChild(c_replyInput);c_replyInput=document.getElementById('entry.'+s_replyId);let v_submitted=!1;let c_hiddenIframe=document.createElement('iframe');c_hiddenIframe.id='c_hiddenIframe';c_hiddenIframe.name='c_hiddenIframe';c_hiddenIframe.style.display='none';c_hiddenIframe.setAttribute('onload','if(v_submitted){fixFrame()}');c_form.appendChild(c_hiddenIframe);c_hiddenIframe=document.getElementById('c_hiddenIframe');function fixFrame(){v_submitted=!1;c_hiddenIframe.srcdoc='';getComments()}
function getComments(){c_submitButton.disabled;c_replyingText.style.display='none';c_replyInput.value='';if(s_commentsOpen){document.getElementById(`entry.${s_nameId}`).value='';document.getElementById(`entry.${s_websiteId}`).value='';document.getElementById(`entry.${s_textId}`).value=''}
const url=`https://docs.google.com/spreadsheets/d/${s_sheetId}/gviz/tq?`;const retrievedSheet=getSheet(url);retrievedSheet.then(result=>{const json=JSON.parse(result.split('\n')[1].replace(/google.visualization.Query.setResponse\(|\);/g,''));const isPage=(col)=>col.label=='Page';let pageIdx=json.table.cols.findIndex(isPage);let comments=[];if(json.table.parsedNumHeaders>0){for(r=0;r<json.table.rows.length;r++){let val1;if(!json.table.rows[r].c[pageIdx]){val1=''}else{val1=json.table.rows[r].c[pageIdx].v}
if(val1==v_pagePath){let comment={}
for(c=0;c<json.table.cols.length;c++){let val2;if(!json.table.rows[r].c[c]){val2=''}else{val2=json.table.rows[r].c[c].v}
comment[json.table.cols[c].label]=val2}
comment.Timestamp2=json.table.rows[r].c[0].f;comments.push(comment)}}}
if(comments.length==0||Object.keys(comments[0]).length<2){c_container.innerHTML=s_noCommentsText}else{displayComments(comments)}
c_submitButton.disabled=!1})}
function getSheet(url){return new Promise(function(resolve,reject){fetch(url).then(response=>{if(!response.ok){reject('Could not find Google Sheet with that URL')}else{response.text().then(data=>{if(!data){reject('Invalid data pulled from sheet')}
resolve(data)})}})})}
let a_commentDivs=[];function displayComments(comments){a_commentDivs=[];c_container.innerHTML='';let replies=[];for(i=0;i<comments.length;i++){if(comments[i].Reply){replies.push(comments[i]);comments.splice(i,1);i--}}
v_amountOfPages=Math.ceil(comments.length/s_commentsPerPage);v_commentMax=s_commentsPerPage*v_pageNum;v_commentMin=v_commentMax-s_commentsPerPage;comments.reverse();for(i=0;i<comments.length;i++){let comment=createComment(comments[i]);let button=document.createElement('button');button.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="10" height="10" fill="white"><path d="M205 34.8c11.5 5.1 19 16.6 19 29.2l0 64 112 0c97.2 0 176 78.8 176 176c0 113.3-81.5 163.9-100.2 174.1c-2.5 1.4-5.3 1.9-8.1 1.9c-10.9 0-19.7-8.9-19.7-19.7c0-7.5 4.3-14.4 9.8-19.5c9.4-8.8 22.2-26.4 22.2-56.7c0-53-43-96-96-96l-96 0 0 64c0 12.6-7.4 24.1-19 29.2s-25 3-34.4-5.4l-160-144C3.9 225.7 0 217.1 0 208s3.9-17.7 10.6-23.8l160-144c9.4-8.5 22.9-10.6 34.4-5.4z"/></svg> ${s_replyButtonText}`;button.value=comment.id;button.setAttribute('onclick',`openReply(this.value)`);button.className='c-replyButton';comment.appendChild(button);comment.style.display='none';if(i>=v_commentMin&&i<v_commentMax){comment.style.display='block'}
comment.className='c-comment';c_container.appendChild(comment);a_commentDivs.push(document.getElementById(comment.id))}
for(i=0;i<replies.length;i++){let reply=createComment(replies[i]);const parentId=replies[i].Reply;const parentDiv=document.getElementById(parentId);let container;if(!document.getElementById(parentId+'-replies')){container=document.createElement('div');container.id=parentId+'-replies';if(s_collapsedReplies){container.style.display='none'}
container.className='c-replyContainer';parentDiv.appendChild(container)}else{container=document.getElementById(parentId+'-replies')}
reply.className='c-reply';container.appendChild(reply);let mentionButton=document.createElement('button');mentionButton.innerHTML=s_mentionButton;mentionButton.className='c-replyButton';reply.appendChild(mentionButton);mentionButton.addEventListener('click',function(){const textarea=document.getElementById('entry.'+s_textId);textarea.focus();openReply(this.closest('.c-comment').id);textarea.value="@["+`${this.parentElement.id.split('|--|')[0]}`+"] "})}
if(s_collapsedReplies){const containers=document.getElementsByClassName('c-replyContainer');for(i=0;i<containers.length;i++){const num=containers[i].childNodes.length;const parentDiv=containers[i].parentElement;const button=document.createElement('button');button.innerHTML=s_expandRepliesText+` (${num})`;button.setAttribute('onclick',`expandReplies(this.parentElement.id)`);button.className='c-expandButton';parentDiv.insertBefore(button,parentDiv.lastChild)}}
if(v_amountOfPages>1){let pagination=document.createElement('div');leftButton=document.createElement('button');leftButton.innerHTML=s_leftButtonText;leftButton.id='c_leftButton';leftButton.name='left';leftButton.setAttribute('onclick',`changePage(this.name)`);if(v_pageNum==1){leftButton.disabled=!0}
leftButton.className='c-paginationButton';pagination.appendChild(leftButton);let pageInfo=document.createElement('span');pageInfo.id='c_pageInfo';pageInfo.innerHTML=`1/${v_amountOfPages}`;pagination.appendChild(pageInfo);rightButton=document.createElement('button');rightButton.innerHTML=s_rightButtonText;rightButton.id='c_rightButton';rightButton.name='right';rightButton.setAttribute('onclick',`changePage(this.name)`);if(v_pageNum==v_amountOfPages){rightButton.disabled=!0}
rightButton.className='c-paginationButton';pagination.appendChild(rightButton);pagination.id='c_pagination';c_container.appendChild(pagination)}}
function createComment(data){let comment=document.createElement('div');let timestamps=convertTimestamp(data.Timestamp);let timestamp;if(s_longTimestamp){timestamp=timestamps[0]}else{timestamp=timestamps[1]}
const id=data.Name+'|--|'+data.Timestamp2;comment.id=id;let name=document.createElement('h3');let filteredName=data.Name;if(s_wordFilterOn){filteredName=filteredName.replace(v_filteredWords,s_filterReplacement)}
name.innerText=filteredName;name.className='c-name';if(data.Admin==!0){name.insertAdjacentHTML('beforeend'," <span class='admin-title'> [REAL] </span> ")}
comment.appendChild(name);if(data.Website){let site=document.createElement('a');site.innerText=s_websiteText;site.href=data.Website;site.className='c-site';comment.appendChild(site)}
let time=document.createElement('span');time.innerText=timestamp;time.className='c-timestamp';comment.appendChild(time);let text=document.createElement('p');let filteredText=sanitizeInput(data.Text);if(s_wordFilterOn){filteredText=filteredText.replace(v_filteredWords,s_filterReplacement)}
filteredText=filteredText.replace(/:(smile|annoyed|talk|pissed|nervous|cool|exclaim|sad|freak|grahh|sobbing|blunder):/g,function(match,p1){const emojiMap={'smile':'smile','annoyed':'annoyed','talk':'talk','pissed':'pissed','nervous':'nervous','cool':'cool','exclaim':'exclaim','sad':'sad','freak':'freak','grahh':'grahh','sobbing':'sobbing','blunder':'blunder'};const emojiName=emojiMap[p1];if(emojiName){return `<img src="/assets/emojis/${emojiName}.webp" class="c-emoji" alt="${p1}">`}else{return match}});text.innerHTML=filteredText;text.className='c-text';comment.appendChild(text);return comment}
function sanitizeInput(input){const escapeHTML=(str)=>str.replace(/[&<>"']/g,(char)=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));return escapeHTML(input).replace(/(^|\s)@\[([^\]]+?)\]/g,'$1<span class="highlight-mention">@$2</span>')}
function convertTimestamp(timestamp){const vals=timestamp.split('(')[1].split(')')[0].split(',');const date=new Date(vals[0],vals[1],vals[2],vals[3],vals[4],vals[5]);const timezoneDiff=(s_timezone*60+date.getTimezoneOffset())*-1;let offsetDate=new Date(date.getTime()+timezoneDiff*60*1000);if(s_daylightSavings){offsetDate=isDST(offsetDate)}
const formattedTimestampEU=offsetDate.toLocaleString('en-GB');const formattedDateEU=offsetDate.toLocaleDateString('en-GB');return[formattedTimestampEU,formattedDateEU]}
function isDST(date){const dstStart=[getMonthNum(s_dstStart[0]),getDayNum(s_dstStart[1]),s_dstStart[2],s_dstStart[3]];const dstEnd=[getMonthNum(s_dstEnd[0]),getDayNum(s_dstEnd[1]),s_dstEnd[2],s_dstEnd[3]];const year=date.getFullYear();let startDate=new Date(year,dstStart[0],1);startDate=nthDayOfMonth(dstStart[1],dstStart[2],startDate,dstStart[3]).getTime();let endDate=new Date(year,dstEnd[0],1);endDate=nthDayOfMonth(dstEnd[1],dstEnd[2],endDate,dstEnd[3]).getTime();time=date.getTime();if(time>=startDate&&time<endDate){date.setHours(date.getHours()-1)}
return date}
function nthDayOfMonth(day,n,date,hour){var count=0;var idate=new Date(date);idate.setDate(1);while((count)<n){idate.setDate(idate.getDate()+1);if(idate.getDay()==day){count++}}
idate.setHours(hour);return idate}
function getDayNum(day){let num;switch(day.toLowerCase()){case 'sunday':num=0;break;case 'monday':num=1;break;case 'tuesday':num=2;break;case 'wednesday':num=3;break;case 'thursday':num=4;break;case 'friday':num=5;break;case 'saturday':num=6;break;default:num=0;break}
return num}
function getMonthNum(month){let num;switch(month.toLowerCase()){case 'january':num=0;break;case 'february':num=1;break;case 'march':num=2;break;case 'april':num=3;break;case 'may':num=4;break;case 'june':num=5;break;case 'july':num=6;break;case 'august':num=7;break;case 'september':num=8;break;case 'october':num=9;break;case 'november':num=10;break;case 'december':num=11;break}
return num}
const link=document.createElement('a');link.href='#c_inputDiv';function openReply(id){if(c_replyingText.style.display=='none'){c_replyingText.innerHTML=s_replyingText+` ${id.split('|--|')[0]}...`;c_replyInput.value=id;c_replyingText.style.display='block'}else{c_replyingText.innerHTML='';c_replyInput.value='';c_replyingText.style.display='none'}
link.click()}
function emojiWindow(){const targetDiv=document.querySelector('.non-message');const emojiDiv=document.querySelector('.emoji-panel');const isHidden=targetDiv.style.display=='none';targetDiv.style.display=isHidden?'block':'none';emojiDiv.style.display=isHidden?'none':'flex'}
document.getElementById('c_submitButton').addEventListener('click',function(){document.querySelector('.non-message').style.display='block';document.querySelector('.emoji-panel').style.display='none';if(userIP){document.getElementById(`entry.${s_IPId}`).value=userIP}});function addEmoji(emoji){const emojiMap={'emoji1':'smile','emoji2':'annoyed','emoji3':'talk','emoji4':'pissed','emoji5':'nervous','emoji6':'cool','emoji7':'exclaim','emoji8':'sad','emoji9':'freak','emoji10':'grahh','emoji11':'sobbing','emoji12':'blunder'};const customEmoji=emojiMap[emoji]||emoji;const textarea=document.getElementById('entry.'+s_textId);const cursorPos=textarea.selectionStart;const textBefore=textarea.value.substring(0,cursorPos);const textAfter=textarea.value.substring(cursorPos,textarea.value.length);textarea.value=textBefore+` :${customEmoji}: `+textAfter;textarea.focus()}
function expandReplies(id){const targetDiv=document.getElementById(`${id}-replies`);const parentDiv=document.getElementById(id);const button=parentDiv.querySelector('.c-expandButton');const numReplies=targetDiv.children.length;if(targetDiv.style.display=='none'){targetDiv.style.display='block';button.innerHTML=s_hideRepliesText+` (${numReplies})`}else{targetDiv.style.display='none';button.innerHTML=s_expandRepliesText+` (${numReplies})`}}
function changePage(dir){const leftButton=document.getElementById('c_leftButton');const rightButton=document.getElementById('c_rightButton');const pageInfo=document.getElementById('c_pageInfo');let num;switch(dir){case 'left':num=-1;break;case 'right':num=1;break;default:num=0;break}
let targetPage=v_pageNum+num;if(targetPage>v_amountOfPages||targetPage<1){return}
leftButton.disabled=!1;rightButton.disabled=!1;if(targetPage==1){leftButton.disabled=!0}
if(targetPage==v_amountOfPages){rightButton.disabled=!0}
pageInfo.innerHTML=`${targetPage}/${v_amountOfPages}`;v_pageNum=targetPage;v_commentMax=s_commentsPerPage*v_pageNum;v_commentMin=v_commentMax-s_commentsPerPage;for(i=0;i<a_commentDivs.length;i++){a_commentDivs[i].style.display='none';if(i>=v_commentMin&&i<v_commentMax){a_commentDivs[i].style.display='block'}}}
document.querySelectorAll('.c-textInput').forEach(textarea=>{textarea.addEventListener("input",function(){this.style.height='0px';this.style.height=this.scrollHeight-7+'px'})});getComments()