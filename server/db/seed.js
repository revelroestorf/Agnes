const Week = require('../models/week')
const User = require('../models/user')
const mongoose = require('mongoose')
const PayRateCategories = require('../models/payRateCategories')
const Entitlements = require('../models/entitlements')
const StandardHours = require('../models/standardHours')

mongoose.connect('mongodb://localhost/agnes', (err) => {
  if (err) {
    console.log('Error connecting to database', err);
  } else {
    console.log('Connected to database!');
  }
});

const seedData = async () => {

  await Week.create({
      date: new Date("July 2 2018"),
      staff:
      [
        {
          staffID: 1, shifts:
          [
            {
              date: new Date("July 2 2018"),
              shiftCategory: "floor",
              start: {
                rostered: new Date("July 2 2018 8:00"),
                actual: new Date("July 2 2018 9:00"),
                timesheet: new Date("July 2 2018 9:00"),
                flag: false
              },
              finish: {
                rostered: new Date("July 2 2018 16:00"),
                actual: new Date("July 2 2018 15:00"),
                timesheet: new Date("July 2 2018 15:00"),
                flag: false
              }
            },
            {
              date: new Date("July 3 2018"),
              shiftCategory: "room",
              start: {
                rostered: new Date("July 3 2018 8:00"),
                actual: new Date("July 3 2018 7:00"),
                timesheet: new Date("July 3 2018 8:00"),
                flag: false
              },
              finish: {
                rostered: new Date("July 3 2018 16:00"),
                actual: new Date("July 3 2018 17:00"),
                timesheet: new Date("July 3 2018 16:00"),
                flag: false
              }
            },
            {
              date: new Date("July 4 2018"),
              shiftCategory: "Kitchen",
              start: {
                rostered: new Date("July 4 2018 8:00"),
                actual: new Date("July 4 2018 8:00"),
                timesheet: new Date("July 4 2018 8:00"),
                flag: false
              },
              finish: {
                rostered: new Date("July 4 2018 16:00"),
                actual: new Date("July 4 2018 16:00"),
                timesheet: new Date("July 4 2018 16:00"),
                flag: false
              }
            },
            {
              date: new Date("July 5 2018"),
              shiftCategory: "floor",
              start: {
                rostered: new Date("July 5 2018 8:00"),
                actual: new Date("July 5 2018 8:00"),
                timesheet: new Date("July 5 2018 8:00"),
                flag: false
              },
              finish: {
                rostered: new Date("July 5 2018 16:00"),
                actual: new Date("July 5 2018 16:00"),
                timesheet: new Date("July 5 2018 16:00"),
                flag: false
              }
            },
            {
              date: new Date("July 6 2018"),
              shiftCategory: "room",
              start: {
                rostered: new Date("July 6 2018 8:00"),
                actual: new Date("July 6 2018 8:00"),
                timesheet: '',
                flag: false
              },
              finish: {
                rostered: new Date("July 6 2018 16:00"),
                actual: new Date("July 6 2018 16:00"),
                timesheet: '',
                flag: false
              }
            },
            {
              date: new Date("July 7 2018"),
              shiftCategory: "Kitchen",
              start: {
                rostered: new Date("July 7 2018 8:00"),
                actual: new Date("July 7 2018 8:00"),
                timesheet: '',
                flag: false
              },
              finish: {
                rostered: new Date("July 7 2018 16:00"),
                actual: new Date("July 7 2018 16:00"),
                timesheet: '',
                flag: false
              }
            },
            {
              date: new Date("July 8 2018"),
              shiftCategory: "floor",
              start: {
                rostered: new Date("July 8 2018 8:00"),
                actual: new Date("July 8 2018 8:00"),
                timesheet: '',
                flag: false
              },
              finish: {
                rostered: new Date("July 8 2018 16:00"),
                actual: new Date("July 8 2018 16:00"),
                timesheet: '',
                flag: false
              }
            }, // end of saterday
          ] // end of shifts

        }, //end of staff member

        {
          staffID: 2, shifts:
          [
            {
              date: new Date("July 2 2018"),
              shiftCategory: "room",
              start: {
                rostered: new Date("July 2 2018 8:00"),
                actual: new Date("July 2 2018 9:00"),
                timesheet: '',
                flag: false
              },
              finish: {
                rostered: new Date("July 2 2018 16:00"),
                actual: new Date("July 2 2018 15:00"),
                timesheet: '',
                flag: false
              }
            },
            {
              date: new Date("July 3 2018"),
              shiftCategory: "kitchen",
              start: {
                rostered: new Date("July 3 2018 8:00"),
                actual: new Date("July 3 2018 7:00"),
                timesheet: '',
                flag: false
              },
              finish: {
                rostered: new Date("July 3 2018 16:00"),
                actual: new Date("July 3 2018 17:00"),
                timesheet: '',
                flag: false
              }
            },
            {
              date: new Date("July 4 2018"),
              shiftCategory: "floor",
              start: {
                rostered: new Date("July 4 2018 8:00"),
                actual: new Date("July 4 2018 8:00"),
                timesheet: '',
                flag: false
              },
              finish: {
                rostered: new Date("July 4 2018 16:00"),
                actual: new Date("July 4 2018 16:00"),
                timesheet: '',
                flag: false
              }
            },
            {
              date: new Date("July 5 2018"),
              shiftCategory: "room",
              start: {
                rostered: new Date("July 5 2018 8:00"),
                actual: new Date("July 5 2018 8:00"),
                timesheet: '',
                flag: false
              },
              finish: {
                rostered: new Date("July 5 2018 16:00"),
                actual: new Date("July 5 2018 16:00"),
                timesheet: '',
                flag: false
              }
            },
            {
              date: new Date("July 6 2018"),
              shiftCategory: "kitchen",
              start: {
                rostered: new Date("July 6 2018 8:00"),
                actual: new Date("July 6 2018 8:00"),
                timesheet: '',
                flag: false
              },
              finish: {
                rostered: new Date("July 6 2018 16:00"),
                actual: new Date("July 6 2018 16:00"),
                timesheet: '',
                flag: false
              }
            },
            {
              date: new Date("July 7 2018"),
              shiftCategory: "floor",
              start: {
                rostered: new Date("July 7 2018 8:00"),
                actual: new Date("July 7 2018 8:00"),
                timesheet: '',
                flag: false
              },
              finish: {
                rostered: new Date("July 7 2018 16:00"),
                actual: new Date("July 7 2018 16:00"),
                timesheet: '',
                flag: false
              }
            },
            {
              date: new Date("July 8 2018"),
              shiftCategory: "room",
              start: {
                rostered: new Date("July 8 2018 8:00"),
                actual: new Date("July 8 2018 8:00"),
                timesheet: '',
                flag: false
              },
              finish: {
                rostered: new Date("July 8 2018 16:00"),
                actual: new Date("July 8 2018 16:00"),
                timesheet: '',
                flag: false
              }
            }, // end of saterday
          ] // end of shifts
        }, // end of staff member

        {
          staffID: 3, shifts:
          [
            {
              date: new Date("July 2 2018"),
              shiftCategory: "kitchen",
              start: {
                rostered: new Date("July 2 2018 8:00"),
                actual: new Date("July 2 2018 9:00"),
                timesheet: '',
                flag: false
              },
              finish: {
                rostered: new Date("July 2 2018 16:00"),
                actual: new Date("July 2 2018 17:00"),
                timesheet: '',
                flag: false
              }
            },
            {
              date: new Date("July 3 2018"),
              shiftCategory: "floor",
              start: {
                rostered: new Date("July 3 2018 8:00"),
                actual: new Date("July 3 2018 7:00"),
                timesheet: '',
                flag: false
              },
              finish: {
                rostered: new Date("July 3 2018 16:00"),
                actual: new Date("July 3 2018 17:00"),
                timesheet: '',
                flag: false
              }
            },
            {
              date: new Date("July 4 2018"),
              shiftCategory: "room",
              start: {
                rostered: new Date("July 4 2018 8:00"),
                actual: new Date("July 4 2018 8:00"),
                timesheet: '',
                flag: false
              },
              finish: {
                rostered: new Date("July 4 2018 17:00"),
                actual: new Date("July 4 2018 16:00"),
                timesheet: '',
                flag: false
              }
            },
            {
              date: new Date("July 5 2018"),
              shiftCategory: "kitchen",
              start: {
                rostered: new Date("July 5 2018 8:00"),
                actual: new Date("July 5 2018 8:00"),
                timesheet: '',
                flag: false
              },
              finish: {
                rostered: new Date("July 5 2018 16:00"),
                actual: new Date("July 5 2018 16:00"),
                timesheet: '',
                flag: false
              }
            },
            {
              date: new Date("July 6 2018"),
              shiftCategory: "floor",
              start: {
                rostered: new Date("July 6 2018 8:00"),
                actual: new Date("July 6 2018 8:00"),
                timesheet: '',
                flag: false
              },
              finish: {
                rostered: new Date("July 6 2018 16:00"),
                actual: new Date("July 6 2018 16:00"),
                timesheet: '',
                flag: false
              }
            },
            {
              date: new Date("July 7 2018"),
              shiftCategory: "room",
              start: {
                rostered: new Date("July 7 2018 8:00"),
                actual: new Date("July 7 2018 8:00"),
                timesheet: '',
                flag: false
              },
              finish: {
                rostered: new Date("July 7 2018 18:00"),
                actual: new Date("July 7 2018 19:00"),
                timesheet: '',
                flag: false
              }
            },
            {
              date: new Date("July 8 2018"),
              shiftCategory: "kitchen",
              start: {
                rostered: new Date("July 8 2018 8:00"),
                actual: new Date("July 8 2018 8:00"),
                timesheet: '',
                flag: false
              },
              finish: {
                rostered: new Date("July 8 2018 16:00"),
                actual: new Date("July 8 2018 16:00"),
                timesheet: '',
                flag: false
              }
            }, // end of saterday
          ] // end of shifts
        }, // end of staff member

      ]
    })

  await Week.create({
    date: new Date("July 9 2018"),
    staff:
    [
      {
        staffID: 1, shifts:
        [
          {
            date: new Date("July 15 2018"),
            shiftCategory: "floor",
            start:  {
                        rostered: new Date("July 15 2018 8:00"),
                        actual: new Date("July 15 2018 8:00"),
                        timesheet: new Date("July 15 2018 8:00"),
                        flag: false
                    },
            finish: {
                        rostered: new Date("July 15 2018 16:00"),
                        actual: new Date("July 15 2018 16:00"),
                        timesheet: new Date("July 15 2018 16:00"),
                        flag: false
                    }
          },
        ], // end of shifts

      }, //end of staff member

      {
        staffID: 2, shifts:
        [
          {
            date: new Date("July 9 2018"),
            shiftCategory: "room",
            start:  {
                      rostered: new Date("July 9 2018 8:00"),
                      actual: new Date("July 9 2018 9:00"),
                      timesheet: '',
                      flag: false
                    },
            finish: {
              rostered: new Date("July 9 2018 16:00"),
              actual: new Date("July 9 2018 15:00"),
              timesheet: '',
              flag: false
                    }
          },
        ], // end of shifts
      }, // end of staff member

      {
        staffID: 3, shifts:
        [
          {
            date: new Date("July 10 2018"),
            shiftCategory: "floor",
            start:  {
                      rostered: new Date("July 10 2018 8:00"),
                      actual: new Date("July 10 2018 7:00"),
                      timesheet: '',
                      flag: false
                    },
            finish: {
                      rostered: new Date("July 10 2018 16:00"),
                      actual: new Date("July 10 2018 17:00"),
                      timesheet: '',
                      flag: false
                    }
          },
        ], // end of shifts
      }, // end of staff member

    ]
  })

  await Week.create({
    date: new Date("July 16 2018"),
    staff:
    [
      {
        staffID: 1, shifts: [ ],
      },
      {
        staffID: 2, shifts: [ ],
      },
      {
        staffID: 3, shifts: [ ],
      },
    ]
  })

  await User.create({
    staffID: 1,
    name: 'Pubert Gesepi',
    email: 'test@test.com',
    role: 'staff',
    PIN: 1234
  })

  await User.create({
    staffID: 2,
    name: 'Shaun Lamb',
    email: 'test@test.com',
    role: 'staff',
    PIN: 1234
  })

  await User.create({
    staffID: 3,
    name: 'Justin Case',
    email: 'test@test.com',
    role: 'staff',
    PIN: 1234
  })

  await PayRateCategories.create({
    payRateCategories:
    [
      'Ordinary','Sat', 'Sun', 'Night', 'Public Holiday', 'Wayne Ordinary',
      'Wayne Sat', 'Wayne Sun', 'Wayne Night', 'Wayne Public Holiday'
    ]
  })

  await Entitlements.create({
    entitlements:
    [
      'Annual Leave', 'Sick Leave', 'Long Service Leave', 'Sleep-over Bonus'
    ]
  })

  await StandardHours.create({
    staffID: '2',
    name: 'Greg',
    totalHours: '',
    categories: [
      {
        category: 'Ordinary',
        hoursWorked: 5
      },
      {
        category: 'Sat',
        hoursWorked: 3
      },
      {
        category: 'Sun',
        hoursWorked: 66
      },
      {
        category: 'Night',
        hoursWorked: 0
      },
      {
        category: 'Public Holiday',
        hoursWorked: 1
      },
      {
        category: 'Wayne Ordinary',
        hoursWorked: 1
      },
      {
        category: 'Wayne Saturday',
        hoursWorked: 4
      },
      {
        category: 'Wayne Sunday',
        hoursWorked: 22
      },
      {
        category: 'Wayne Night',
        hoursWorked: 11
      },
      {
        category: 'Wayne Public Holiday',
        hoursWorked: 0
      }
    ]
  })
  await StandardHours.create({
    staffID: '3',
    name: 'Jack',
    totalHours: '',
    categories: [
      {
        category: 'Ordinary',
        hoursWorked: 53
      },
      {
        category: 'Sat',
        hoursWorked: 32
      },
      {
        category: 'Sun',
        hoursWorked: 66
      },
      {
        category: 'Night',
        hoursWorked: 0
      },
      {
        category: 'Public Holiday',
        hoursWorked: 0
      },
      {
        category: 'Wayne Ordinary',
        hoursWorked: 1
      },
      {
        category: 'Wayne Saturday',
        hoursWorked: 4
      },
      {
        category: 'Wayne Sunday',
        hoursWorked: 2
      },
      {
        category: 'Wayne Night',
        hoursWorked: 1
      },
      {
        category: 'Wayne Public Holiday',
        hoursWorked: 1
      }
    ]
  })

  await mongoose.connection.close(() => {
    console.log('Disconnected from database!')
  })
}

seedData()
