// Simple interactions: nav toggle, smooth scroll, calculator, subscribe mock
document.addEventListener('DOMContentLoaded',function(){
  // nav toggle
  var btn = document.getElementById('nav-toggle');
  var links = document.getElementById('nav-links');
  btn && btn.addEventListener('click', ()=> { links.style.display = links.style.display === 'block' ? 'none' : 'block'; });

  // smooth links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      var target = document.querySelector(this.getAttribute('href'));
      if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth',block:'start'}); if(window.innerWidth<700) links.style.display='none'; }
    });
  });

  // calculator
  var calcBtn = document.getElementById('calc-btn');
  if(calcBtn){
    calcBtn.addEventListener('click', ()=>{
      var hrs = Number(document.getElementById('hours').value) || 0;
      var rate = Number(document.getElementById('hustle').value) || 0;
      var weekly = hrs * rate;
      var monthly = (weekly * 52 / 12).toFixed(2);
      document.getElementById('calc-result').textContent = 'Est: $' + weekly + '/week • ~$' + monthly + '/month';
    });
  }

  // subscribe mock
  var sub = document.getElementById('subscribe');
  if(sub){
    sub.addEventListener('click', ()=>{
      var email = document.getElementById('email').value;
      var msg = document.getElementById('sub-message');
      if(!email || !email.includes('@')){ msg.textContent = 'Enter a valid email'; msg.style.color='red'; return; }
      msg.style.color='green'; msg.textContent = 'Thanks — check your inbox for the starter guide!';
      // real setup: wire to Mailchimp/ConvertKit/API later
    });
  }

  // tiny performance: prefers-reduced-motion
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    document.documentElement.style.scrollBehavior = 'auto';
  }
});
