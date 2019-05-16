export default {
  "Are you building more something complex (than Twitter in 2007)?": {
    "yes": {
      "Are you building a startup?": {
        "yes": {
          "Is everyone on your team already familiar with how to use TypeScript?": {
            "yes": {
              "Definitely. If you know it, use it!": null
            },
            "no": {
              "Will it take you and your team time to learn?": {
                "yes": {
                  "Have you found product-market fit?": {
                    "yes": {
                      "Have you found traction?": {
                        "yes": {
                          "Do it. TypeScript will save you lots of hours of debugging = happier users.": null
                        },
                        "no": {
                          "Focus on traction first, use whatever language you're comfortable with.": null
                        }
                      }
                    },
                    "no": {
                      "Focus on product-market fit first, use whatever language you're comfortable with.": null
                    }
                  }
                },
                "no": {
                  "Do it. You've got to worry about product-market fit and traction first. Use whatever language you're comfortable with.": null
                }
              }
            }
          }
        },
        "no": {
          "Are you building something for work?": {
            "yes": {
              "Done! we need to continue": null
            },
            "no": {
              "So, it's a personal project. Is it just you working on it?": {
                "yes": {
                  "You definitely don't need it.": null
                },
                "no": {
                  "Are there more than 2 people working on it?": {
                    "yes": {
                      "3 or more developers? TypeScript would definitely be a good idea.": null
                    },
                    "no": {
                      "You probably don't need it. A nice linter should do the trick.": null
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "no": {
      "Done! we need to continue": null
    }
  }
}