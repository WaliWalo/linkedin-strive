export async function fetchListOfProfiles() {
  try {
    let response = await fetch(
      `https://striveschool-api.herokuapp.com/api/profile/`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + process.env.REACT_APP_DOGGO,
        },
      }
    );
    const data = await response.json();
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
          Authorization: "Bearer " + process.env.REACT_APP_DOGGO,
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

//process.env.REACT_APP_DOGGO
export async function fetchMyProfile() {
  try {
    let response = await fetch(
      `https://striveschool-api.herokuapp.com/api/profile/me`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + process.env.REACT_APP_DOGGO,
        },
      }
    );
    const data = await response.json();
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
          Authorization: "Bearer " + process.env.REACT_APP_DOGGO,
        },
      }
    );
    const data = await response.json();
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
          Authorization: "Bearer " + process.env.REACT_APP_DOGGO,
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

export async function submitProfileImage(userId, file) {
  let form_data = new FormData();
  form_data.append("profile", file, file.name);
  console.log(form_data.get("profile"));
  try {
    let response = await fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${userId}/picture`,
      {
        method: "POST",
        body: form_data,
        headers: {
          Authorization: "Bearer " + process.env.REACT_APP_DOGGO,
        },
      }
    );
    if (response.ok) {
      return "Profile Image Updated";
    } else {
      throw new Error("Could not add profile!");
    }
  } catch (error) {
    console.log(error);
  }
}
//---------------------------------------------EXPERIENCE-------------------------
//GET EXPERIENCES
export async function fetchUserExperiences(userId) {
  try {
    let response = await fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`,
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

//CREATE EXPERIENCE
export async function createExperience(userId, experience) {
  try {
    let response = await fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`,
      {
        method: "POST",
        body: JSON.stringify(experience),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + process.env.REACT_APP_DOGGO,
        },
      }
    );
    if (response.ok) {
      return response.json();
    } else {
      return "Something went wrong";
    }
  } catch (error) {
    console.log(error);
  }
}

//GET SINGLE EXPERIENCE
export async function fetchSingleExperience(userId, expId) {
  try {
    let response = await fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}`,
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

//UPDATE SINGLE EXPERIENCE
export async function updateSingleExperience(userId, expId, updated) {
  try {
    let response = await fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}`,
      {
        method: "PUT",
        body: JSON.stringify(updated),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + process.env.REACT_APP_DOGGO,
        },
      }
    );
    if (response.ok) {
      return "Experience updated";
    } else {
      return "Something went wrong";
    }
  } catch (error) {
    console.log(error);
  }
}

//DELETE SINGLE EXPERIENCE
export async function deleteExperience(userId, expId) {
  try {
    let response = await fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + process.env.REACT_APP_DOGGO,
        },
      }
    );
    if (response.ok) {
      return "Experience Sent to Shadow Realm";
    } else {
      return "Something Went Wrong";
    }
  } catch (error) {
    console.log(error);
  }
}

export async function submitExperienceImage(userId, file, expId) {
  let form_data = new FormData();
  form_data.append("experience", file, file.name);
  console.log(form_data.get("experience"));
  try {
    let response = await fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}/picture`,
      {
        method: "POST",
        body: form_data,
        headers: {
          Authorization: "Bearer " + process.env.REACT_APP_DOGGO,
        },
      }
    );
    if (response.ok) {
      return "Image Created";
    } else {
      throw new Error("Could not add profile!");
    }
  } catch (error) {
    console.log(error);
  }
}
