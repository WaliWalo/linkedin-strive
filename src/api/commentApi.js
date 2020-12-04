// fetch comments by id

export async function fetchCommentsById(id) {
  try {
    let response = await fetch(
      `https://striveschool-api.herokuapp.com/api/comments/${id}`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmNhMTgyN2QwNDQ2ZjAwMTU0ZTBmYjAiLCJpYXQiOjE2MDcwNzk5NzUsImV4cCI6MTYwODI4OTU3NX0.z22Dq9pEUG2EYP1AqEwdrvHAeRkhy92cNyphJIkdRww",
        },
      }
    );
    if (response.ok) {
      let comments = await response.json();
      return comments;
    } else {
      throw new Error("Could not fetch comments!");
    }
  } catch (er) {
    console.log(er);
  }
}

// submit single comment

export async function submitComment(comment) {
  try {
    let response = await fetch(
      `https://striveschool-api.herokuapp.com/api/comments`,
      {
        method: "POST",
        body: JSON.stringify(comment),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmNhMTgyN2QwNDQ2ZjAwMTU0ZTBmYjAiLCJpYXQiOjE2MDcwNzk5NzUsImV4cCI6MTYwODI4OTU3NX0.z22Dq9pEUG2EYP1AqEwdrvHAeRkhy92cNyphJIkdRww",
        },
      }
    );
    if (response.ok) {
      let newComment = await response.json();
      return newComment;
    } else {
      throw new Error("Could not add  comment!");
    }
  } catch (er) {
    console.log(er);
  }
}
