const {chromium}=require('playwright');
const {spawn}=require('child_process');
const fs=require('fs');
(async()=>{
 const server=spawn('python3',['-m','http.server','8765','--bind','127.0.0.1'],{stdio:'ignore'});
 const browser=await chromium.launch({headless:true});
 fs.mkdirSync('qa-screenshots',{recursive:true});
 let failures=[];
 try{
  await new Promise(r=>setTimeout(r,1500));
  for(const [device,width,height] of [['desktop',1440,900],['mobile',390,844],['small-mobile',320,720]]){
   const page=await browser.newPage({viewport:{width,height},deviceScaleFactor:1});
   page.on('pageerror',e=>failures.push(device+' JS error: '+e.message));
   for(const path of ['index.html','services.html','music-marketing.html','portfolio.html','about.html','contact.html','privacy.html','thank-you.html']){
    await page.goto('http://127.0.0.1:8765/'+path,{waitUntil:'domcontentloaded'});
    await page.locator('.twd-cookie-reject').click().catch(()=>{});
    await page.screenshot({path:'qa-screenshots/'+device+'-'+path.replace('.html','')+'.png',fullPage:path==='index.html'});
    const m=await page.evaluate(()=>({scroll:document.documentElement.scrollWidth,view:innerWidth,css:!![...document.styleSheets].find(x=>x.href&&x.href.includes('bold-dark-preview.css')),bg:getComputedStyle(document.body).backgroundColor}));
    if(m.scroll>m.view+2)failures.push(device+' '+path+' horizontal overflow '+m.scroll+'/'+m.view);
    if(!m.css)failures.push(device+' '+path+' draft CSS not loaded');
    if(m.bg!=='rgb(6, 17, 30)')failures.push(device+' '+path+' wrong background '+m.bg);
   }
   await page.goto('http://127.0.0.1:8765/index.html');
   if(device!=='desktop'){
    await page.locator('.menu-btn').click();
    if(!(await page.locator('#navlinks').isVisible()))failures.push(device+' menu failed to open');
    await page.keyboard.press('Escape');
    if(await page.locator('#navlinks').isVisible())failures.push(device+' menu failed to close');
   }
   await page.goto('http://127.0.0.1:8765/contact.html');
   if(await page.locator('form[data-netlify]').count()!==1)failures.push(device+' Netlify form missing');
   if(await page.locator('input[name="privacy-consent"]').count()!==1)failures.push(device+' consent checkbox missing');
   if(await page.locator('form[name="project-enquiry"] input[name="form-name"]').count()!==1)failures.push(device+' Netlify hidden form name missing');
   if(await page.locator('form[name="project-enquiry"]').getAttribute('action')!=='/thank-you.html')failures.push(device+' wrong form action');
   console.log('Checked '+device);
   await page.close();
  }
 }finally{await browser.close();server.kill()}
 if(failures.length){console.error('QA FAILURES:',failures.join('\n'));process.exitCode=1}
 else console.log('QA PASSED: 24 page/viewport checks, mobile navigation and form structure');
})().catch(e=>{console.error(e);process.exitCode=1});
