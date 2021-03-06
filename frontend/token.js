function setRequestTokenLink() {
  document.querySelector('[js-request-token]').addEventListener('click', () => {
    fetch(`${getUrl()}/albuns`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: `album-${Date.now()}`
      })
    }).then((result) => {
      result.json().then((json) => {
        document.querySelector('#album-token').value = json.token;
        document.querySelector('.js-btn-token').click();
      })
    }).catch((err) => { alert("It wasn't possible to raise a new Token."); });
  });
}
