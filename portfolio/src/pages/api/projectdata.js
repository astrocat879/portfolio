// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json({
      "project_list": [
        {
          "date": "2020-01-25",
          "title": "Competitive Programming",
          "link": "https://mcpt.ca/user/justinzhu/solved",
          "description": "I've solved and created various problems for the DMOJ and MCPT competitive programming platforms"
        },
        {
          "date": "2022-09-18",
          "title": "Wizard Cats",
          "link": "https://github.com/astrocat879/wizard-cats",
          "description": "A cat-themed PvP game in which players can cast spells by drawing with their mouse"
        }
      ]
    })
  }
  