
(function(){
  const yearSpan = document.querySelector('[data-year]');
  if(yearSpan) yearSpan.textContent = '2026';
  const toggle = document.querySelector('#mobileToggle');
  const menu = document.querySelector('#mainMenu');
  if(toggle && menu){
    toggle.addEventListener('click',()=>{
      const shown = getComputedStyle(menu).display !== 'none';
      menu.style.display = shown ? 'none' : 'flex';
    });
  }
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('in'); });
  },{threshold:.12});
  document.querySelectorAll('.card,.feature,.logo,.kpi,.banner').forEach(el=>{
    el.classList.add('pre');
    io.observe(el);
  });
  const chatBtn = document.querySelector('#chatFab');
  const chatBox = document.querySelector('#chatBox');
  const chatForm = document.querySelector('#chatForm');
  const chatMsg = document.querySelector('#chatInput');
  const chatMsgs = document.querySelector('#chatMessages');
  const chatClose = document.querySelector('#chatClose');
  function appendMsg(who, text){
    const div = document.createElement('div');
    div.className = 'msg ' + who;
    div.textContent = text;
    chatMsgs.appendChild(div);
    chatMsgs.scrollTop = chatMsgs.scrollHeight;
  }
  function greet(){
    const greeted = localStorage.getItem('techzzi_chat_greeted');
    if(!greeted){
      appendMsg('agent', 'Hi! \uD83D\uDC4B Techzzi here. Tell us about your cloud issue and your priority (Low/Normal/High/Critical). This demo stores messages locally.');
      localStorage.setItem('techzzi_chat_greeted','1');
    }
  }
  if(chatBtn && chatBox){
    chatBtn.addEventListener('click',()=>{
      chatBox.style.display = (chatBox.style.display==='flex') ? 'none' : 'flex';
      greet();
    });
  }
  if(chatClose) chatClose.addEventListener('click',()=> chatBox.style.display='none');
  if(chatForm && chatMsg){
    chatForm.addEventListener('submit',(e)=>{
      e.preventDefault();
      const text = chatMsg.value.trim();
      if(!text) return;
      appendMsg('user', text);
      chatMsg.value='';
      setTimeout(()=> appendMsg('agent', 'Thanks! A cloud engineer will reach out shortly. For urgent issues, use WhatsApp or the Request Support form.'), 600);
    });
  }
  function handleForm(id, successId){
    const form = document.querySelector(id);
    const success = document.querySelector(successId);
    if(!form || !success) return;
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      console.log('Form submit', id, data);
      success.style.display = 'block';
      form.reset();
      setTimeout(()=> success.style.display='none', 4000);
    });
  }
  handleForm('#contactForm', '#contactSuccess');
  handleForm('#supportForm', '#supportSuccess');
  handleForm('#newsletterForm', '#newsletterSuccess');
})();
