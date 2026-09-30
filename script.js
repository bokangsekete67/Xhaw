const app = document.getElementById("app");

const img = name => `assets/${name}.jpg`;

const packages = [
  {name:"Ultimate Gamer Pass", price:1500, image:"packages_card1", tag:"POPULAR", description:"Full-day premium gaming with unlimited arena access."},
  {name:"VIP Gaming Experience", price:1800, image:"packages_card2", tag:"PREMIUM", description:"Private VIP setup, premium seating and dedicated support."},
  {name:"Esports Training Package", price:950, image:"packages_card3", tag:"COMPETE", description:"Focused training time for teams, ranked play and coaching."},
  {name:"Birthday Party Package", price:1600, image:"packages_card4", tag:"CELEBRATE", description:"A complete party setup for gaming, friends and memories."}
];

const experiences = [
  {name:"Virtual Reality Experience",price:450,image:"exp_card1",description:"Step into immersive worlds with next-generation VR."},
  {name:"Racing Simulator Challenge",price:790,image:"exp_card2",description:"Race on a high-performance simulator built for competition."},
  {name:"Escape Room Challenge",price:650,image:"exp_card3",description:"Solve puzzles, work together and beat the clock."}
];

const events = [
  {name:"Next Level Community Cup",date:"18 OCT",image:"events_card1",description:"A competitive community tournament with live action."},
  {name:"Weekend Social Gaming",date:"26 OCT",image:"events_card2",description:"Bring your crew for a relaxed gaming session."},
  {name:"Competitive Team Session",date:"02 NOV",image:"events_card3",description:"Structured team play, practice and competition."}
];

function button(text, page, extra="") {
  return `<button class="btn ${extra}" data-page="${page}">${text}</button>`;
}

function packageCard(p) {
  return `
  <article class="card">
    <img src="${img(p.image)}" alt="${p.name}">
    <div class="card-content">
      <div class="card-top"><span class="tag">${p.tag}</span><strong>R${p.price.toLocaleString()}</strong></div>
      <h3>${p.name}</h3>
      <p>${p.description}</p>
      ${button("Book package","booking","cyan full")}
      <button class="link-btn">View details →</button>
    </div>
  </article>`;
}

function experienceCard(x) {
  return `
  <article class="card">
    <img src="${img(x.image)}" alt="${x.name}">
    <div class="card-content">
      <div class="card-top"><span class="tag">EXPERIENCE</span><strong>R${x.price}</strong></div>
      <h3>${x.name}</h3><p>${x.description}</p>
      ${button("Book this experience","booking","cyan full")}
    </div>
  </article>`;
}

function eventCard(e) {
  return `
  <article class="card">
    <img src="${img(e.image)}" alt="${e.name}">
    <div class="card-content">
      <span class="tag pink-tag">${e.date}</span>
      <h3>${e.name}</h3><p>${e.description}</p>
      ${button("Request event details","booking","outline full")}
    </div>
  </article>`;
}

function home() {
return `
<section class="hero">
  <div class="hero-text">
    <span class="eyebrow">JOHANNESBURG'S NEXT LEVEL</span>
    <h1>YOUR NEXT LEVEL<br><span>STARTS HERE.</span></h1>
    <p>Play. Compete. Connect. High-energy gaming experiences built for friends, teams, celebrations and unforgettable moments.</p>
    <div class="actions">${button("Book your session ↗","booking","cyan")}${button("Explore packages","packages","outline")}</div>
  </div>
  <img class="hero-image" src="${img("home_hero")}" alt="Next Level gaming arena">
</section>

<section class="stats">
  <div><strong>04</strong><small>CORE EXPERIENCES</small></div>
  <div><strong>03</strong><small>EVENT FORMATS</small></div>
  <div><strong>01</strong><small>ARENA DESTINATION</small></div>
</section>

<section class="section">
  <div class="section-heading"><span class="eyebrow">OUR TOP PICKS</span><h2>One arena. Four ways to go all in.</h2><p>Choose a premium package, book your slot and let us handle the setup.</p></div>
  <div class="grid four">${packages.map(packageCard).join("")}</div>
</section>

<section class="feature">
  <div><span class="eyebrow">BUILT FOR FUN</span><h2>Big thrills. Zero warm-up required.</h2>${button("Explore experiences","experiences","outline")}</div>
  <div class="mini-grid">
    <div><b>01</b><strong>Virtual Reality</strong><small>Immersive play</small></div>
    <div><b>02</b><strong>Racing Simulator</strong><small>Competitive speed</small></div>
    <div><b>03</b><strong>Escape Room</strong><small>Team challenge</small></div>
  </div>
</section>

<section class="split section">
  <img src="${img("home_card3")}" alt="Gaming arena">
  <div><span class="eyebrow pink">UPCOMING AT THE VENUE</span><h2>Next Level Community Cup</h2><p>Bring your squad, test your skills and compete in a high-energy community session.</p><br>${button("View upcoming events","events","pink")}</div>
</section>

<section class="promo">
  <div><strong>Book together. Save up to 15%.</strong><span>Group sessions for 5+ players unlock special package pricing.</span></div>
  ${button("Build your booking","booking","cyan")}
</section>`;
}

function about() {
return `
<section class="hero">
  <div class="hero-text"><span class="eyebrow">ABOUT THE SPACE</span><h1>A PLACE TO PLAY HARD—<span>AND BELONG.</span></h1><p>Founded in 2023, Next Level Gaming & Events brings premium gaming, social experiences and community together under one roof.</p><div class="about-stats"><b>2023<small>FOUNDED</small></b><b>JHB<small>LOCATION</small></b><b>ALL<small>AGES</small></b></div></div>
  <img class="hero-image" src="${img("about_hero")}" alt="Gaming venue">
</section>

<section class="split section">
  <img src="${img("about_person")}" alt="Gaming community">
  <div><span class="eyebrow pink">WHY IT MATTERS</span><h2>“Gaming is at its best when great technology meets real human connection.”</h2><p>We focus on premium technology, approachable service and experiences that make it easy to play together.</p><div class="quote-box">Inclusive · high-quality · social · competitive</div></div>
</section>

<section class="section">
  <div class="section-heading"><span class="eyebrow">THE NEXT LEVEL WAY</span><h2>Built for focus, fun and full-send moments.</h2><p>A flexible venue with dedicated zones for individual play, competitive sessions and hosted events.</p></div>
  <div class="grid four">
    ${["PC gaming zone","Console lounge","VR & simulation","Group event area"].map((x,i)=>`<div class="info"><b>0${i+1}</b><h3>${x}</h3><p>Designed around easy access, quality equipment and a great atmosphere.</p></div>`).join("")}
  </div>
</section>

<section class="contact">
  <div><span class="eyebrow">YOUR JOHANNESBURG GAMING DESTINATION</span><h2>Start a conversation.</h2><p>Tell us what you are planning and our team will help shape the right session.</p></div>
  <form id="contactForm">
    <input required placeholder="Your name">
    <input required type="email" placeholder="Email address">
    <select><option>What are you interested in?</option><option>Gaming package</option><option>Event</option><option>Corporate booking</option></select>
    <textarea rows="4" placeholder="Tell us about your plans"></textarea>
    <button class="btn cyan full">Send secure enquiry ↗</button>
  </form>
</section>`;
}

function packagesPage() {
return `
<section class="page-title"><span class="eyebrow">GAMING PACKAGES</span><h1>CHOOSE THE EXPERIENCE.<br><span>WE'LL HANDLE THE SETUP.</span></h1><p>Four curated packages for full-day play, dedicated team sessions, birthdays and premium VIP experiences.</p><img src="${img("packages_hero")}" alt=""></section>
<section class="section">
  <div class="filters">
    <button class="filter active" data-filter="all">All</button><button class="filter" data-filter="gaming">Gaming</button><button class="filter" data-filter="social">Social</button><button class="filter" data-filter="competitive">Competitive</button><button class="filter" data-filter="celebration">Celebration</button>
  </div>
  <div class="grid two" id="packageGrid">${packages.map(packageCard).join("")}</div>
</section>
<section class="best-fit"><div><span class="eyebrow">FIND YOUR BEST FIT</span><h2>Not sure what to choose?</h2><p>Tell us your group size and goals and we'll point you toward a suitable setup.</p><br>${button("Ask the team","booking","cyan")}</div><div>${packages.slice(0,3).map(p=>`<div class="fit"><b>${p.name}</b><small>Great for groups & full sessions</small></div>`).join("")}</div></section>`;
}

function experiencesPage() {
return `
<section class="hero"><div class="hero-text"><span class="eyebrow">IMMERSIVE EXPERIENCES</span><h1>PICK A CHALLENGE.<br><span>CHASE THE RUSH.</span></h1><p>Try something new with high-quality hardware, bold energy and experiences built around play.</p><div class="actions">${button("Book an experience","booking","cyan")}</div></div><img class="hero-image" src="${img("exp_hero")}" alt=""></section>
<section class="section"><div class="section-heading"><span class="eyebrow">IMMERSE YOURSELF</span><h2>Immersive by design.</h2><p>Everything you need to jump in, perform and have fun.</p></div><div class="grid three">${experiences.map(experienceCard).join("")}</div></section>
<section class="steps section"><div class="section-heading"><span class="eyebrow">HOW IT WORKS</span><h2>Your session in three clean moves.</h2></div><div class="grid three">${["Choose","Request","Confirm"].map((x,i)=>`<div class="info"><b>0${i+1}</b><h3>${x}</h3><p>${["Pick an experience and fill in your details.","Share your preferred date, time and group size.","We confirm availability and send your booking details."][i]}</p></div>`).join("")}</div></section>`;
}

function eventsPage() {
return `
<section class="page-title event-title"><span class="eyebrow pink">EVENTS</span><h1>COMPETITION, CELEBRATION<br><span>AND CONNECTION—LIVE.</span></h1><p>From tournaments to team sessions, our events turn the arena into a shared experience.</p>${button("Plan your event →","booking","pink")}<img src="${img("events_hero")}" alt=""></section>
<section class="section"><div class="section-heading"><span class="eyebrow">UPCOMING</span><h2>On the arena calendar.</h2></div><div class="grid three">${events.map(eventCard).join("")}</div></section>
<section class="section"><div class="section-heading"><span class="eyebrow">HOST YOUR NEXT</span><h2>Bring the group. We'll shape the session.</h2></div><div class="grid three">${[
["events_group1","Level up the celebration"],["events_group2","Play, solve and collaborate"],["events_group3","Different arena. Better teamwork."]
].map(([im,t])=>`<div class="card"><img src="${img(im)}" alt=""><div class="card-content"><h3>${t}</h3><p>Flexible formats for friends, teams, schools and company groups.</p>${button("Plan the event","booking","outline")}</div></div>`).join("")}</div></section>
<section class="event-cta"><div><span class="eyebrow pink">TELL US ABOUT YOUR GROUP</span><h2>Occasion and preferred date.</h2><p>Let us know what you are planning and we'll help shape the right experience.</p></div>${button("Request event quotation","booking","pink")}</section>`;
}

function booking() {
return `
<section class="page-title"><span class="eyebrow">BOOKING & QUOTATION</span><h1>BUILD YOUR <span>ARENA BOOKING.</span></h1><p>Choose your service, tell us when you want to play and send your request.</p></section>
<section class="booking-layout">
<form id="bookingForm" class="booking-form">
  <div class="progress"><span>01 Select service</span><span>02 Choose time</span><span>03 Customer details</span><span>04 Review</span></div>
  <div class="form-section"><h2>Service</h2><label>Package<select id="service">${packages.map((p,i)=>`<option value="${i}">${p.name}</option>`).join("")}</select></label></div>
  <div class="form-section"><h2>Quantity and preferred time</h2><div class="form-grid"><label>Players<input id="players" type="number" min="1" max="30" value="4"></label><label>Date<input type="date" required></label><label>Preferred time<input type="time" required></label></div></div>
  <div class="form-section"><h2>Customer details</h2><div class="form-grid"><label>Full name<input required placeholder="Your full name"></label><label>Email<input required type="email" placeholder="you@example.com"></label><label>Phone<input required placeholder="+27 ..."></label><label>Company / group<input placeholder="Optional"></label></div><textarea rows="4" placeholder="Anything else we should know?"></textarea></div>
  <div id="bookingMessage"></div><button class="btn cyan full">Continue to review ↗</button>
</form>
<aside class="estimate"><span class="eyebrow">YOUR ESTIMATE</span><h2 id="total">R3,800</h2><p id="selectedName">${packages[0].name}</p><hr><p>Players <b id="playerCount">4</b></p><p>Rate <b id="rate">R1,500</b></p><button class="btn cyan full" id="estimateButton">Continue to review →</button><small>Final price is confirmed after availability and booking review.</small></aside>
</section>`;
}

function render() {
  const page = location.hash.replace("#","") || "home";
  const pages = {home,about,packages:packagesPage,experiences:experiencesPage,events:eventsPage,booking};
  app.innerHTML = (pages[page] || home)();

  document.querySelectorAll("[data-page]").forEach(el => {
    el.addEventListener("click", () => {
      location.hash = el.dataset.page;
    });
  });

  document.querySelectorAll(".filter").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter").forEach(x => x.classList.remove("active"));
      btn.classList.add("active");
    });
  });

  const contactForm = document.getElementById("contactForm");
  if(contactForm) contactForm.addEventListener("submit", e => {
    e.preventDefault();
    contactForm.innerHTML = '<div class="success">Message received. We will be in touch.</div>';
  });

  const bookingForm = document.getElementById("bookingForm");
  if(bookingForm) {
    const service = document.getElementById("service");
    const players = document.getElementById("players");
    const update = () => {
      const p = packages[Number(service.value)];
      const n = Math.max(1, Number(players.value) || 1);
      document.getElementById("selectedName").textContent = p.name;
      document.getElementById("rate").textContent = "R" + p.price.toLocaleString();
      document.getElementById("playerCount").textContent = n;
      document.getElementById("total").textContent = "R" + (p.price*n).toLocaleString();
    };
    service.addEventListener("change",update);
    players.addEventListener("input",update);
    bookingForm.addEventListener("submit", e => {
      e.preventDefault();
      document.getElementById("bookingMessage").innerHTML = '<div class="success">Booking request submitted successfully. We will contact you to confirm availability.</div>';
      update();
    });
    document.getElementById("estimateButton").addEventListener("click", () => bookingForm.requestSubmit());
    update();
  }

  window.scrollTo(0,0);
}

window.addEventListener("hashchange", render);
render();
