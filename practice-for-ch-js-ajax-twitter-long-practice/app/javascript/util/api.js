const csrfToken = document.querySelector("meta[name=csrf-token]").content;

async function customFetch(url, options = {}) {
  options.headers = {  
    'X-CSRF-Token': csrfToken,
    Accept: 'application/json',
    ...options.headers
  };

  const response = await fetch(url, options);
  
  if (response.ok) {
    return response.json();
  } else {
    throw response;
  }
  
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



