var config_data = `
{
	"enable_google_sheets": "true",
  "title": "Scouting PASS 2023",
  "page_title": "Charged Up",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Initials",
	  "gsCol": "scouter",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Event",
	"gsCol": "event",
      "code": "e",
      "type": "event",
      "defaultValue": "2022miroc",
      "required": "true",
      "disabled": "true"
    },
    { "name": "Match Level",
	"gsCol": "matchLevel",
      "code": "l",
      "type": "level",
      "choices": {
        "qm": "Quals<br>",
        "de": "Double Elimination<br>",
        "f": "Finals"
      },
      "defaultValue": "qm",
      "required": "true"
    },
    { "name": "Match #",
	"gsCol": "matchNum",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 100,
      "required": "true"
    },
    { "name": "Robot",
	"gsCol": "robot",
      "code": "r",
      "type": "robot",
      "choices": {
        "r1": "Red-1",
        "b1": "Blue-1<br>",
        "r2": "Red-2",
        "b2": "Blue-2<br>",
        "r3": "Red-3",
        "b3": "Blue-3"
      },
      "required":"true"
    },
    { "name": "Team #",
	"gsCol": "teamNum",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Auto Start Position",
	"gsCol": "startPos",
      "code": "as",
      "type": "field_image",
      "filename": "2023/field_image.png"
    }
  ],
  "auton": [
    { "name": "Mobility?",
	"gsCol": "mobility",
      "code": "am",
      "type": "bool"
    },
    { "name": "High Cube Scored",
	"gsCol": "HCS",
      "code": "auh",
      "type": "counter"
    },
    { "name": "Medium Cube Scored",
	"gsCol": "MCS",
      "code": "aum",
      "type": "counter"
    },
    { "name": "Low Cube Scored",
	"gsCol": "LCS",
      "code": "aul",
      "type": "counter"
    },
    { "name": "High Cone Scored",
	"gsCol": "HCNS",
      "code": "aoh",
      "type": "counter"
    },
    { "name": "Medium Cone Scored",
	"gsCol": "MCNS",
      "code": "aom",
      "type": "counter"
    },
    { "name": "Low Cone Scored",
	"gsCol": "LCNS",
      "code": "aol",
      "type": "counter"
    },
    { "name": "Docked",
	"gsCol": "dock",
      "code": "ad",
      "type":"radio",
      "choices": {
        "d": "Docked (not Engaged)<br>",
        "e": "Engaged<br>",
        "a": "Attempted but failed<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
    }
  ],
  "teleop": [
    { "name": "Cycle Timer",
	"gsCol": "cycleTimer",
      "code": "tct",
      "type": "cycle"
    },
    { "name": "High Cube Scored",
	"gsCol": "HCST",
      "code": "tuh",
      "type": "counter"
    },
    { "name": "Medium Cube Scored",
	"gsCol": "MCST",
      "code": "tum",
      "type": "counter"
    },
    { "name": "Low Cube Scored",
	"gsCol": "LCST",
      "code": "tul",
      "type": "counter"
    },
    { "name": "High Cone Scored",
	"gsCol": "HCNST",
      "code": "toh",
      "type": "counter"
    },
    { "name": "Medium Cone Scored",
	"gsCol": "MCNST",
      "code": "tom",
      "type": "counter"
    },
    { "name": "Low Cone Scored",
	"gsCol": "LCNST",
      "code": "tol",
      "type": "counter"
    },
    { "name": "Feeder Count",
	"gsCol": "feederCount",
      "code": "tfc",
      "type": "counter"
    },
    { "name": "Was Defended",
	"gsCol": "wasDefended",
      "code": "wd",
      "type": "bool"
    },
    { "name": "Smart Placement (creates Links)",
	"gsCol": "smartPlacement",
      "code": "lnk",
      "type": "bool"
    },
    { "name": "Cargo Intake From",
	"gsCol": "cargoIntake",
      "code": "cif",
      "type": "radio",
      "choices": {
        "t": "Substation<br>",
        "g": "Ground<br>",
        "b": "Both<br>",
        "x": "Not Attempted"
      },
      "defaultValue": "x"
    }
  ],
  "endgame": [
    { "name": "Docking Timer",
	"gsCol": "dockingTimer",
      "code": "dt",
      "type": "timer"
    },
    { "name": "Final Status",
	"gsCol": "finalStatus",
      "code": "fs",
      "type":"radio",
      "choices": {
        "p": "Parked<br>",
        "d": "Docked (Not Engaged)<br>",
        "e": "Engaged<br>",
        "a": "Attempted but failed<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
    },
    { "name": "# of alliance bots docked/engaged",
	"gsCol": "botsEngaged",
      "code": "cn",
      "type": "counter"
    }
  ],
  "postmatch": [
    { "name": "Driver Skill",
	"gsCol": "driverSkill",
      "code": "ds",
      "type": "radio",
      "choices": {
        "n": "Not Effective<br>",
        "a": "Average<br>",
        "v": "Very Effective<br>",
        "x": "Not Observed"
      },
      "defaultValue": "x"
    },
    { "name": "Links Scored",
	"gsCol": "linkScored",
      "code": "ls",
      "type": "counter"
    },
    { "name": "Defense Rating",
	"gsCol": "defenseRating",
      "code": "dr",
      "type": "radio",
      "choices": {
        "b": "Below Average<br>",
        "a": "Average<br>",
        "g": "Good<br>",
        "e": "Excellent<br>",
        "x": "Did not play defense"
      },
      "defaultValue": "x"
    },
    { "name": "Swerve drive?",
	"gsCol": "swerveDrive",
      "code": "sd",
      "type": "bool"
    },
    { "name": "Speed Rating",
	"gsCol": "speedRating",
      "code": "sr",
      "type": "radio",
      "choices": {
        "1": "1 (slow)<br>",
        "2": "2<br>",
        "3": "3<br>",
        "4": "4<br>",
        "5": "5 (fast)"
      },
      "defaultValue":"3"
    },
    { "name": "Died/Tipped",
	"gsCol": "tippedBot",
      "code": "d",
      "type": "bool"
    },
    { "name": "Avoided coopertition",
	"gsCol": "noCoopertition",
      "code": "coo",
      "type": "bool"
    },
    { "name": "Make good alliance partner?",
	"gsCol": "goodPartner",
      "tooltip": "Would you want this robot on your alliance in eliminations?",
      "code": "all",
      "type": "bool"
    },
    { "name": "Comments",
	"gsCol": "comments",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 50
    },
    { "name": "Confidence Rating",
	"gsCol": "confidenceRating",
      "code": "cnf",
      "type": "radio",
      "choices": {
        "v": "Very Confident<br>",
        "a": "Average<br>",
        "n": "Not Confident"
        },
      "defaultValue": "a"
    }
  ]
}`;
