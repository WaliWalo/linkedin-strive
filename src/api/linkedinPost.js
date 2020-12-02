//GET POSTS
export async function fetchPosts() {
  try {
    let response = await fetch(
      `https://striveschool-api.herokuapp.com/api/posts/ `,
      {
        method: "GET",
        headers: new Headers({
          Authorization: "Bearer " + process.env.REACT_APP_DOGGO,
        }),
      }
    );

    if (response.ok) {
      const data = response.json();
      return data;
    } else {
      return "Something Went Wrong";
    }
  } catch (error) {
    console.log(error);
  }
}

//CREATE POSTS
export async function createPost(post) {
  try {
    let response = await fetch(
      `https://striveschool-api.herokuapp.com/api/posts/`,
      {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + process.env.REACT_APP_DOGGO,
        },
      }
    );
    if (response.ok) {
      return "Post Created";
    } else {
      console.log(response);
      return "Something went wrong";
    }
  } catch (error) {
    console.log(error);
  }
}

//GET SINGLE POST
export async function fetchSinglePost(postId) {
  try {
    let response = await fetch(
      `https://striveschool-api.herokuapp.com/api/posts/${postId}`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + process.env.REACT_APP_DOGGO,
        },
      }
    );
    if (response.ok) {
      const data = response.json();
      return data;
    } else {
      return console.log("Something went wrong");
    }
  } catch (error) {
    console.log(error);
  }
}

//UPDATE SINGLE POST
export async function updateSingleExperience(postId, updatedPost) {
  try {
    let response = await fetch(
      `https://striveschool-api.herokuapp.com/api/posts/${postId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + process.env.REACT_APP_DOGGO,
        },
      }
    );
    if (response.ok) {
      return console.log("Experience updated");
    } else {
      return console.log("Something went wrong");
    }
  } catch (error) {
    console.log(error);
  }
}

//DELETE SINGLE POST
export async function deletePost(postId) {
  try {
    let response = await fetch(
      `https://striveschool-api.herokuapp.com/api/posts/${postId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + process.env.REACT_APP_DOGGO,
        },
      }
    );
    if (response.ok) {
      return "Feed Sent to Shadow Realm";
    } else {
      return "Something Went Wrong";
    }
  } catch (error) {
    console.log(error);
  }
}
