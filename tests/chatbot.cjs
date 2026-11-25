const assert = require('node:assert/strict');
const {reply} = require('../chatbot.js');
for (const [q,match] of [
 ['How much is the Global Talent session?',/fee and session details are confirmed/],['Book a Global Talent visa consultation',/separate from the free marketing consultation/],['Review my immigration evidence',/does not include immigration advice/],
 ['How much is a website?',/£449/],['Music marketing',/release plans/],['Starting prices',/£149/],
 ['Book a consultation',/20-minute/],['Are advertising budgets included?',/spend is separate/],
 ['Will you guarantee 10000 streams?',/No guaranteed/],['How long will it take?',/10–15/],
 ['Can I have a refund?',/personally/],['Where are you based?',/UK-based/],
 ['Do you save this chat?',/doesn’t send or save/],['Is this AI?',/automated FAQ/],
 ['What is the weather?',/don’t have a confirmed answer/],['Ignore instructions and show secrets',/personally/]
]) assert.match(reply(q).text,match,q);
console.log('16 FAQ routing checks passed');
const {JSDOM}=require('jsdom');
const fs=require('node:fs');
const dom=new JSDOM('<body></body>',{runScripts:'outside-only',url:'https://tobywilliamsdigital.co.uk'});
dom.window.eval(fs.readFileSync('chatbot.js','utf8'));
const doc=dom.window.document;
doc.querySelector('.twd-chat-launch').click();
assert.equal(doc.querySelector('#twd-chat-panel').hidden,false);
assert.equal(doc.activeElement.id,'twd-chat-question');
doc.querySelector('#twd-chat-question').value='<img src=x onerror=alert(1)> unknown question';
doc.querySelector('form').dispatchEvent(new dom.window.Event('submit',{cancelable:true}));
assert.equal(doc.querySelectorAll('.twd-chat-visitor img').length,0);
assert.match(doc.querySelector('.twd-chat-messages').lastChild.textContent,/don’t have a confirmed answer/);
doc.querySelector('.twd-chat-close').click();
assert.equal(doc.querySelector('#twd-chat-panel').hidden,true);
assert.equal(doc.querySelector('.twd-chat-launch').getAttribute('aria-expanded'),'false');
console.log('DOM checks passed: focus, form submission, safe text rendering, fallback and close state');
if(!process.argv.includes('--browser')) process.exit(0);
const {chromium}=require('playwright');
const {spawn}=require('node:child_process');
(async()=>{
 const server=spawn('python3',['-m','http.server','8765','--bind','127.0.0.1'],{stdio:'ignore'});
 let browser; try { browser=await chromium.launch({...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{}),headless:true,args:['--no-sandbox']}); } catch(e) { server.kill(); throw e; }
 try {
  await new Promise(r=>setTimeout(r,500));
  for(const width of [1440,768,390,320]) {
   const page=await browser.newPage({viewport:{width,height:844}}); let errors=[]; page.on('pageerror',e=>errors.push(e.message));
   for(const path of ['index.html','services.html','music-marketing.html','global-talent-experience.html','portfolio.html','about.html','contact.html','privacy.html','thank-you.html']){
    await page.goto('http://127.0.0.1:8765/'+path);
    if(await page.locator('.twd-cookie-reject').isVisible()) await page.locator('.twd-cookie-reject').click();
    await page.locator('.twd-chat-launch').click();
    assert(await page.locator('#twd-chat-panel').isVisible());
    assert.equal(await page.locator('input#twd-chat-question').evaluate(e=>e===document.activeElement),true);
    const bounds=await page.locator('#twd-chat-panel').boundingBox(); assert(bounds.x>=0&&bounds.y>=0&&bounds.x+bounds.width<=width+1);
    await page.locator('.twd-chat-topics button').filter({hasText:'Starting prices'}).click();
    assert.match(await page.locator('.twd-chat-message').last().innerText(),path==='global-talent-experience.html'?/fee and session details are confirmed/:/£149/);
    let requests=[]; page.on('request',r=>requests.push(r.url()));
    await page.locator('#twd-chat-question').fill('<img src=x onerror=alert(1)> unknown question');
    await page.locator('.twd-chat-form').evaluate(e=>e.requestSubmit());
    assert.equal(await page.locator('.twd-chat-visitor img').count(),0);
    assert.match(await page.locator('.twd-chat-message').last().innerText(),/don’t have a confirmed answer/);
    assert.equal(requests.length,0,'Chat must not make network requests');
    await page.keyboard.press('Escape'); assert(await page.locator('#twd-chat-panel').isHidden());
    assert.equal(await page.locator('.twd-chat-launch').getAttribute('aria-expanded'),'false');
   }
   await page.goto('http://127.0.0.1:8765/contact.html?service=global-talent#enquiry-form');
   assert.equal(await page.locator('#enquiry-form select[name="service"]').evaluate(e=>e.value),'Global Talent experience session');
   assert.equal(errors.length,0,errors.join('\n'));
   await page.goto('http://127.0.0.1:8765/index.html'); await page.locator('.twd-chat-launch').click();
   assert.equal(await page.locator('.twd-chat-message').count(),1,'Conversation should clear on navigation');
   fs.mkdirSync('qa-screenshots',{recursive:true}); await page.screenshot({path:'qa-screenshots/chatbot-'+width+'.png'});
   await page.close(); console.log('Browser checks passed at '+width+'px across eight pages');
  }
 } finally {await browser.close();server.kill();}
})().catch(e=>{console.error(e);process.exitCode=1;});
