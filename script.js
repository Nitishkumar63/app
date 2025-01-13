const movieRecommendations = {
  Comedy: {
    Happy: {
      Medium:
        "Based on your preferences, we recommend watching The Grand Budapest Hotel — a quirky comedy film with a runtime of 99 minutes, perfect for a happy mood. Enjoy this lighthearted, visually stunning adventure!",
      Short:
        "Ferris Bueller's Day Off — a lighthearted comedy with a runtime of 80 minutes.",
      Long: "The Hangover — a wild comedy adventure with a runtime of 130 minutes.",
    },
    Relaxed: {
      Medium:
        "The Intern — a charming comedy about life and work with a runtime of 100 minutes.",
      Short:
        "The Proposal — a fun romantic comedy with a runtime of 66 minutes.",
      Long: "Crazy, Stupid, Love — a heartwarming comedy with a runtime of 144 minutes.",
    },
    Excited: {
      Medium:
        "Jumanji: Welcome to the Jungle — an exciting comedy adventure with a runtime of 96 minutes.",
      Short:
        "The Mask — a fun, fast-paced comedy with a runtime of 23 minutes.",
      Long: "Deadpool 2 — a hilarious action-packed comedy with a runtime of 166 minutes.",
    },
  },
  Action: {
    Excited: {
      Medium:
        "Mad Max: Fury Road — an intense action-packed movie with a runtime of 120 minutes.",
      Short: "John Wick — a high-octane thriller with a runtime of 81 minutes.",
      Long: "The Dark Knight — a gripping action movie with a runtime of 152 minutes.",
    },
  },
  Drama: {
    Relaxed: {
      Medium:
        "Forrest Gum — an emotionally rich drama with a runtime of 110 minutes.",
      Short:
        "The Pursuit of Happyness — an inspiring drama with a runtime of 67 minutes.",
      Long: "The Shawshank Redemption — a powerful drama with a runtime of 145 minutes.",
    },
  },
  Horror: {
    Adventurous: {
      Medium:
        "A Quiet Place — a thrilling horror film with a runtime of 102 minutes.",
      Short: "Get Out — a gripping horror with a runtime of 44 minutes.",
      Long: "The Conjuring — a terrifying supernatural horror movie with a runtime of 140 minutes.",
    },
  },
  SciFi: {
    Adventurous: {
      Medium:
        "Interstellar — a space exploration film with a runtime of 111 minutes.",
      Short:
        "Edge of Tomorrow — a thrilling sci-fi adventure with a runtime of 44 minutes.",
      Long: "The Matrix — a groundbreaking sci-fi movie with a runtime of 136 minutes.",
    },
    Excited: {
      Medium:
        "Guardians of the Galaxy — a fun and exciting space adventure with a runtime of 107 minutes.",
      Short:
        "Star Trek: Into Darkness — an action-packed sci-fi movie with a runtime of 55 minutes.",
      Long: "The Avengers — an epic, action-packed film with a runtime of 133 minutes.",
    },
  },
};

document
  .getElementById("movieForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const genre = document.getElementById("genre").value;
    const duration = document.getElementById("duration").value;
    const mood = document.getElementById("mood").value;

    console.log(genre, duration, mood);

    const recommendation = movieRecommendations[genre]?.[mood]?.[duration];
    const movieResult = document.getElementById("movieResult");

    if (recommendation) {
      movieResult.textContent = `Based on your preferences, we recommend: "${recommendation}"`;
    } else {
      movieResult.textContent =
        "Sorry, no recommendation found for these preferences.";
    }

    document.getElementById("recommendation").style.display = "block";
  });
