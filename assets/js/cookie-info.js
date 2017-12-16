const settings = {
  cookieName: 'GlobalView_cookie-info',
  cookieValue: 'on',
  cookieExpires: 3650,
  cookieInfo: 'Our website uses cookies for statistic purposes.',
  cookieButton: 'I&nbsp;Agree',
  body: document.body,
  div: document.createElement('div')
};

const addCookieInfo = () => {
  settings.div.setAttribute('id', 'cookie-info');
  settings.div.className = 'cookie__container';
  settings.div.innerHTML = (
    `<p class="cookie__info">${settings.cookieInfo}</p>
  <button class="cookie__btn" onclick="removeCookieInfo()">
  ${settings.cookieButton}
  </button>`
  );
  settings.body.appendChild(settings.div);
};

const removeCookieInfo = () => {
  settings.body.removeChild(settings.div);
  setCookie(settings.cookieName, settings.cookieValue, settings.cookieExpires);
};

const setCookie = (name, value, exDays) => {
  let date = new Date();
  let expires = '';
  if (exDays) {
    date.setTime(date.getTime() + (exDays * 24 * 60 * 60 * 1000));
    expires = `; expires=${date.toGMTString()}`;
  }
  document.cookie = `${name}=${value+expires}; path=/`;
};

const checkCookie = name => {
  let cookies = decodeURIComponent(document.cookie).split('; ');
  for (let i = 0, len = cookies.length; i < len; i++) {
    let cookie = cookies[i].split('=');
    if (cookie[0] === name) {
      return cookie[1];
    }
  }
};

settings.body.onload = () => {
  if (checkCookie(settings.cookieName) !== settings.cookieValue) {
    addCookieInfo();
  }
};
