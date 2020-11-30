export async function fetchListOfProfiles() {
  try {
    let response = await fetch(
      `https://striveschool-api.herokuapp.com/api/profile/`,
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM0YjU4MmI3MDhjMjAwMTc1ZGU4OTMiLCJpYXQiOjE2MDY3MjcwNDQsImV4cCI6MTYwNzkzNjY0NH0.bzTQYFLAETWwbOrdML0WLEHa_gqWE8AK-ghAIEmw5bM",
        },
      }
    );
    const data = response.json();
    if (response.ok) {
      return data;
    } else {
      return "Something went wrong";
    }
  } catch (error) {
    console.log(error);
  }
}

export async function submitProfile(profile) {
  try {
    let response = await fetch(
      `https://striveschool-api.herokuapp.com/api/profile/`,
      {
        method: "POST",
        body: JSON.stringify(profile),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM0YjU4MmI3MDhjMjAwMTc1ZGU4OTMiLCJpYXQiOjE2MDY3MjcwNDQsImV4cCI6MTYwNzkzNjY0NH0.bzTQYFLAETWwbOrdML0WLEHa_gqWE8AK-ghAIEmw5bM",
        },
      }
    );
    if (response.ok) {
      let newProfile = await response.json();
      return newProfile;
    } else {
      throw new Error("Could not add profile!");
    }
  } catch (error) {
    console.log(error);
  }
}

export async function fetchMyProfile() {
  try {
    let response = await fetch(
      `https://striveschool-api.herokuapp.com/api/profile/me`,
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM0YjU4MmI3MDhjMjAwMTc1ZGU4OTMiLCJpYXQiOjE2MDY3MjcwNDQsImV4cCI6MTYwNzkzNjY0NH0.bzTQYFLAETWwbOrdML0WLEHa_gqWE8AK-ghAIEmw5bM",
        },
      }
    );
    const data = response.json();
    if (response.ok) {
      return data;
    } else {
      return "Something went wrong";
    }
  } catch (error) {
    console.log(error);
  }
}

export async function fetchProfileById(id) {
  try {
    let response = await fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${id}`,
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM0YjU4MmI3MDhjMjAwMTc1ZGU4OTMiLCJpYXQiOjE2MDY3MjcwNDQsImV4cCI6MTYwNzkzNjY0NH0.bzTQYFLAETWwbOrdML0WLEHa_gqWE8AK-ghAIEmw5bM",
        },
      }
    );
    const data = response.json();
    if (response.ok) {
      return data;
    } else {
      return "Something went wrong";
    }
  } catch (error) {
    console.log(error);
  }
}

//NOT WORKING YET, NEED TESTING
export async function updateProfile() {
  try {
    let response = await fetch(
      `https://striveschool-api.herokuapp.com/api/profile/`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM0YjU4MmI3MDhjMjAwMTc1ZGU4OTMiLCJpYXQiOjE2MDY3MjcwNDQsImV4cCI6MTYwNzkzNjY0NH0.bzTQYFLAETWwbOrdML0WLEHa_gqWE8AK-ghAIEmw5bM",
        },
      }
    );
    if (response.ok) {
      let newProfile = await response.json();
      return newProfile;
    } else {
      throw new Error("Could not add profile!");
    }
  } catch (error) {
    console.log(error);
  }
}
