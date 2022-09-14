const csrfToken = document.querySelector("meta[name=csrf-token]").content;

async function customFetch(url, options = {}) {
  options.headers = {
    'X-CSRF-Token': csrfToken,
    ...options.headers
  };

  return await fetch(url, options);
}

function followUser(id) {
  const options = {method: 'POST'};
  return customFetch(`/users/${id}/follow`, options);
}

function unFollowUser(id) {
  const options = {method: 'DELETE'}
  return customFetch(`/users/${id}/follow`, options);
}

export const followUserFunc = followUser;
export const unFollowUserFunc = unFollowUser;



